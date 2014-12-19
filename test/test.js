var test = require('tap').test
var manyHashes = require('../index.js')

var setup = {
	files: [
		'./data/random.dat',
		'./data/child folder/random.dat'
	],
	hashes: {
		sha1: [
			'33d9dbde3e3984b524079b30cb82d95128fd0258',
			'a18bf6ad82565cb6fd7f8556bc50981350a08bce'
		],
		sha256: [
			'f31a0479e68e2dc2a3514a3e3f6ddb456d597d2ba842044e7241dbb776ef2883',
			'990a4d7c92fd6e7c9c093222cb1747b8c708e7e03727a1c84e050ecf67753729'
		]
	},
	directory: './data',
}

test('generate hashes for single file', function(t) {
	t.plan(2)

	manyHashes(setup.files[0], function(hashes) {
		t.equal(hashes[0].hash, setup.hashes.sha1[0], 'hashes should be identical')
		t.equal(hashes[0].original, setup.files[0], 'path should be identical')
	})

})

test('generate hashes for some files', function(t) {
	t.plan(4)

	manyHashes(setup.files, function(hashes) {
		t.equal(hashes[0].hash, setup.hashes.sha1[0], 'hashes should be identical')
		t.equal(hashes[1].hash, setup.hashes.sha1[1], 'hashes should be identical')
		t.equal(hashes[0].original, setup.files[0], 'path should be identical')
		t.equal(hashes[1].original, setup.files[1], 'path should be identical')
	})

})

test('generate different hashes for the same files', function(t) {
	t.plan(4)

	var options = {
		files: setup.files,
		hash: 'sha256'
	}

	manyHashes(options, function(hashes) {
		t.equal(hashes[0].hash, setup.hashes.sha256[0], 'hashes should be identical')
		t.equal(hashes[1].hash, setup.hashes.sha256[1], 'hashes should be identical')
		t.equal(hashes[0].original, setup.files[0], 'path should be identical')
		t.equal(hashes[1].original, setup.files[1], 'path should be identical')
	})

})
