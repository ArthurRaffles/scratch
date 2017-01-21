'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = function transform(result, cells) {
	result[cells[0]] = result[cells[0]] || [];
	result[cells[0]].push({ name: cells[1], amount: cells[2], price: cells[3] });
	return result;
};

var result = _fs2.default.readFileSync('../data.txt', 'UTF8').split('\n').map(function (row) {
	return row.split('\t');
}).reduce(transform, {});
console.log(result);