var test = require('tap').test
var manyHashes = require('../index.js')

test('generate hashes for some files', function(t) {
	t.plan(4)

	var options = {
		files: [
			'../index.js',
			'./random.dat'
		],
		hash: 'sha256'
	}

	manyHashes(options, function(hashes) {
		t.equal(hashes[0].hash, '673724df9340a2bab915ca1a8e3634a8c5a403929cbdba51525f2d943eac06af', 'hashes should be identical')
		t.equal(hashes[1].hash, '5e988e89cb1446db42dcb675a654d2b76c5e5933e8e316c44e99803ab943eeb4', 'hashes should be identical')
		t.equal(hashes[0].original, '../index.js', 'path should be identical')
		t.equal(hashes[1].original, './random.dat', 'path should be identical')
	})

})
