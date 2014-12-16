# many-file-hashes

Get the hashes of multiple files.

Uses [path](https://www.npmjs.com/package/path) to resolve file path.

## use

Simplest use is like this (outputs `sha1` hashes in `hex` encoding):

	var manyHashes = require('many-file-hashes')

	manyHashes([ './file.ext' ], function(hashes) {
		/*
		hashes = [
			{
				original: './file.ext',
				fullPath: '/tmp/folder/file.ext',
				hash: 'cd92815bf6273acbaf834b9faed277c722068291'
			}
		]
		*/
	})

## all options

The first parameter can be an object, with the following optional parameters, like this:

	var manyHashes = require('many-file-hashes')

	var options = {
		files: [ './file.ext' ],
		encoding: 'base64',
		hash: 'sha512'
	}

	manyHashes(options, function(hashes) {
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
