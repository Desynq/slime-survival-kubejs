// priority: 2147483646

/**
 * @typedef {ApoliConditionType.Entity_EquippedItem | ApoliConditionType.Entity_OnBlock} EntityCondition
 */


//#region origins:equipped_item
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
//#endregion