// priority: 2147483646



ApoliDataTypes.Ingredient = function () {
	this.json = [];
}
ApoliDataTypes.Ingredient.prototype.getJson = function () {
	return this.json;
}


/**
 * @param {String} item
 */
ApoliDataTypes.Ingredient.prototype.addItem = function (item) {
	this.json.push({ item: item });
	return this;
}

/**
 * @param {String} tag
 */
ApoliDataTypes.Ingredient.prototype.addTag = function (tag) {
	this.json.push({ tag: tag });
	return this;
}