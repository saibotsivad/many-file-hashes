# many-file-hashes

Get the hashes of multiple files.

Uses [path](https://www.npmjs.com/package/path) to resolve file path.

## use

Simplest use is like this (outputs `sha1` hashes in `hex` encoding):

	var manyHashes = require('many-file-hashes')

	manyHashes([ './file1.ext', './file2.ext' ], function(err, hashes) {
		/*
		hashes = [
			{
				original: './file1.ext',
				fullPath: '/tmp/folder/file1.ext',
				hash: 'cd92815bf6273acbaf834b9faed277c722068291'
			}, {
				original: './file2.ext',
				fullPath: '/tmp/folder/file2.ext',
				hash: 'f6273acbaf834b9faed277c722068291cd92815b'
			}
		]
		*/
	})

## first param

You can pass in any of these as the first parameter:

* `string` : which is interpreted is a single file
* `array` : which is interpreted as a list of files
* `object` : which is an options object, see below

## not supported

Does not do recursive directory walking.

Must be actual files.

Use something like [glob](https://www.npmjs.com/package/glob) to walk directories.

## all options

The first parameter can be an object, with the following optional parameters, like this:

	var manyHashes = require('many-file-hashes')

	var options = {
		files: [ './file.ext' ], // an array of *files* (directories not supported)
		encoding: 'base64', // any node.js encoding type: http://nodejs.org/docs/v0.4.9/api/crypto.html#hash.digest
		hash: 'sha512' // any node.js hash type: http://nodejs.org/docs/v0.4.9/api/crypto.html#crypto.createHash
	}

	manyHashes(options, function(err, hashes) {
		/*
		hashes = [
			{
				original: './file.ext',
				fullPath: '/tmp/folder/file.ext',
				hash: 'ZOSB36hJrh/oflExNSTXa0YmdkJ9KXrOEtrukC5hwLx1FR0ySjPMbFB1RkcYB4aKlATOA+AgNl4Y/cvRZitsDg=='
			}
		]
		*/
	})

## license

Released under the [Very Open License (VOL)](http://veryopenlicense.com/).
