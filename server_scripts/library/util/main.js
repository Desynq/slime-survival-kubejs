// priority: 2147483647



/**
 * @param {Object} sourceObject
 * @param {Object} targetObject
 */
function mergeObject(sourceObject, targetObject) {
	for (let key in sourceObject) {
		if (sourceObject.hasOwnProperty(key)) {
			targetObject[key] = sourceObject[key];
		}
	}
}