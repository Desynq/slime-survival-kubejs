// priority: 2147483646



/**
 * @constructor
 * @augments PowerType.Template
 */
PowerType.ModifyDamageTaken = function () {
	PowerType.Template.call(this, 'origins:modify_damage_taken');
}
PowerType.ModifyDamageTaken.prototype = PowerType.Template.prototype;
PowerType.ModifyDamageTaken.prototype.constructor = PowerType.ModifyDamageTaken;



PowerType.ModifyDamageTaken.prototype.biEntityAction = function () {}

PowerType.ModifyDamageTaken.prototype.selfAction = function () {}

PowerType.ModifyDamageTaken.prototype.attackerAction = function () {}

/**
 * @param {BiEntityCondition} biEntityCondition
 */
PowerType.ModifyDamageTaken.prototype.biEntityCondition = function (biEntityCondition) {
	this.json['bientity_condition'] = biEntityCondition.getJson();
	return this;
}

PowerType.ModifyDamageTaken.prototype.applyArmorCondition = function () {}

PowerType.ModifyDamageTaken.prototype.damageArmorCondition = function () {}

PowerType.ModifyDamageTaken.prototype.damageCondition = function () {}

/**
 * @param {ApoliDataTypes.AttributeModifier} modifier
 */
PowerType.ModifyDamageTaken.prototype.modifier = function (modifier) {
	this.json['modifier'] = modifier.getJson();
	return this;
}

/**
 * @param {Array<ApoliDataTypes.AttributeModifier>} modifiers
 */
PowerType.ModifyDamageTaken.prototype.modifiers = function (modifiers) {
	modifierJsons = modifiers.map(modifier => modifier.getJson());
	this.json['modifiers'] = modifierJsons;
	return this;
}