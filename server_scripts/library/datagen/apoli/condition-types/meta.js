// priority: 2147483646

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