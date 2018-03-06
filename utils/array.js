/**
 * @fileOverview 和数组相关的方法.
 */

/***
 *数组去重
 *@param {Array} arr 数组
 *@example
 *array.removeRepeat([1,2,3,4,5,1,2])
 *@returns {Array}
 */
exports.removeRepeat = function(arr) {
	var obj = {},
		array = [],
		len = arr.length;
	for (var i = 0; i < len; i++) {
		obj[arr[i]] = null;
	}
	for (var o in obj) {
		array.push(o);
	}
	return array;
};
