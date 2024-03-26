// priority: 2147483647

/**
 * @param {ApoliDataTypes.Ingredient} ingredient
 */
ApoliConditionType.Item_Ingredient = function (ingredient) {
	this.json = {};
	this.json['type'] = 'origins:ingredient'
	this.json['ingredient'] = ingredient.getJson();
}
ApoliConditionType.Item_Ingredient.prototype.getJson = function () {
	return this.json;
}