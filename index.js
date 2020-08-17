var Promise = require('promise')
var path = require('path')
var crypto = require('crypto')
var fs = require('fs')

module.exports = function(options, cb) {
	if (Array.isArray(options)) {
		options = {
			files: options
		}
	} else if (typeof options === 'string') {
		options = {
			files: [ options ]
		}
	} else {
		options = options || {}
	}

	options.files = options.files || []
	options.hash = options.hash || 'sha1'
	options.encoding = options.encoding || 'hex'

	Promise.all(options.files.map(function createFileObject(file) {
		return {
			original: file,
			fullPath: options.cwd
				? path.resolve(path.join(options.cwd, file))
				: path.resolve(file)
		}
	}).map(function createFileHashPromise(file) {
		return new Promise(function(resolve, reject) {
			var fd = fs.createReadStream(file.fullPath)
			var hash = crypto.createHash(options.hash)
			hash.setEncoding(options.encoding)

			fd.on('error', function(err) {
				reject(err)
			})

			fd.on('end', function() {
				hash.end()
				file.hash = hash.read()
				resolve(file)
			})

			fd.pipe(hash)
		})
	})).then(function success(resolve) {
		cb(null, resolve)
	}, function failure(reject) {
		cb(reject)
	})

}
