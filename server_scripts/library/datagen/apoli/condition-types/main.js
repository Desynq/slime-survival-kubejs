// priority: 2147483646


/**
 * @typedef {ApoliConditionType.BiEntity_Actor} BiEntityCondition
 * 
 * @typedef {ApoliConditionType.Entity_EquippedItem} EntityCondition
 * 
 * @typedef {ApoliConditionType.Item_Ingredient} ItemCondition
 * 
 * @typedef {ApoliConditionType.Meta_Or} MetaCondition
 * 
 * @typedef {BiEntityCondition | EntityCondition | ItemCondition | MetaCondition} Condition
 */


/**
 * @constructor
 * @param {EntityCondition} entityCondition
 */
ApoliConditionType.BiEntity_Actor = function (entityCondition) {
	this.json = {};
	this.json['type'] = 'origins:actor_condition';
	this.json['condition'] = entityCondition.json;
}
ApoliConditionType.BiEntity_Actor.prototype.getJson = function () {
	return this.json;
};






/**
 * @constructor
 * @param {String} equipmentSlot
 * @param {ItemCondition} itemCondition
 */
ApoliConditionType.Entity_EquippedItem = function (equipmentSlot, itemCondition) {
	this.json = {};
	this.json['type'] = 'origins:equipped_item';
	this.json['equipment_slot'] = equipmentSlot;
	this.json['item_condition'] = itemCondition.json;
}
ApoliConditionType.Entity_EquippedItem.prototype.getJson = function () {
	return this.json;
}




/**
 * @param {...Condition}
 */
ApoliConditionType.Meta_Or = function () {
	this.json = {};
	this.json['type'] = 'origins:or';
	this.json['conditions'] = Array.from(arguments).map(condition => condition.getJson());
}
ApoliConditionType.Meta_Or.prototype.getJson = function () {
	return this.json
}



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