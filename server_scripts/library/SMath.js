// priority: 100000




function SMath() {}

/**
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
SMath.clamp = function(value, min, max) {
	return Math.max(Math.min(value, max), min);
};