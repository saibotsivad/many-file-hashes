var test = require('tap').test
var manyHashes = require('../index.js')

test('generate hashes for some files', function(t) {
	t.plan(4)

	var files = [
		'../index.js',
		'./random.dat'
	]

	manyHashes(files, function(hashes) {
		t.equal(hashes[0].hash, '4f0814534ecd80914f34bf4c86646677c0031926', 'hashes should be identical')
		t.equal(hashes[1].hash, 'e0d0e3d97cf568fd31a9691b80a9375ade820608', 'hashes should be identical')
		t.equal(hashes[0].original, '../index.js', 'path should be identical')
		t.equal(hashes[1].original, './random.dat', 'path should be identical')
	})

})

test('generate hashes for the same files', function(t) {
	t.plan(4)

	var options = {
		files: [
			'../index.js',
			'./random.dat'
		],
		hash: 'sha256'
	}

	manyHashes(options, function(hashes) {
		t.equal(hashes[0].hash, '0ea67dc3298b746d69c67077efc8efcab237466e4aa9e63262431c8430f16161', 'hashes should be identical')
		t.equal(hashes[1].hash, '5e988e89cb1446db42dcb675a654d2b76c5e5933e8e316c44e99803ab943eeb4', 'hashes should be identical')
		t.equal(hashes[0].original, '../index.js', 'path should be identical')
		t.equal(hashes[1].original, './random.dat', 'path should be identical')
	})

})
