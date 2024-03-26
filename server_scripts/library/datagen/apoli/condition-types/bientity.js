// priority: 2147483646

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