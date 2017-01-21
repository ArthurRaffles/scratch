'use strict';
import fs from 'fs';

const transform = (result, cells) => {
	result[cells[0]] = result[cells[0]] || [];
	result[cells[0]].push({name:cells[1], amount:cells[2], price:cells[3]});
	return result;
};

let result = fs.readFileSync('../data.txt','UTF8')
				.split('\n')
				.map(row => row.split('\t'))
				.reduce(transform, {});
console.log(result);
