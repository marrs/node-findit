var assert = require('assert');
var find = require('../');

exports.cbSync = function () {
    var files = [];
    var dirs = [];
    find.sync(__dirname + '/foo', function (file, stat) {
        if (stat.isDirectory()) dirs.push(file)
        else files.push(file)
    });
    
    assert.deepEqual(dirs, [ 'a', 'a/b', 'a/b/c' ]);
    assert.deepEqual(files, [ 'x', 'a/y', 'a/b/z', 'a/b/c/w' ]);
};
