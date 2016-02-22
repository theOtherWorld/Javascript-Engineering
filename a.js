/**
 * Another way to use for statement,but be careful ,example like this!
 */

var paragraphs = [1,3,2,NaN,4,6];
var tmpX = [];
var tmpY = [];
for(var i = 0, paragraph; paragraph = paragraphs[i]; i++) {
    tmpX.push(paragraph);
}

for(var j = 0, len = paragraphs.length; j < len; ++j) {
	tmpY[j] = paragraphs[j];
}
console.log(tmpX); // [1,3,2]
console.log(tmpY); // [ 1, 3, 2, NaN, 4, 6 ]







