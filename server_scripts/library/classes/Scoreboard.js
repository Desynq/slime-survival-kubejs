// priority: 100000


/**
 * @param {String} name
 * @param {Internal.ObjectiveCriteria} criteria
 * @param {String} displayName
 * @param {Internal.ObjectiveCriteria$RenderType_} renderType
 * @constructor
 */
function ObjectiveTemplate(name, criteria, displayName, renderType) {
	this.name = name;
	this.criteria = criteria;
	this.displayName = displayName;
	this.renderType = renderType;
}

/**
 * Creates the objective within the specified scoreboard and returns it
 * @param {Internal.Scoreboard} scoreboard
 * @returns {Internal.Objective}
 */
ObjectiveTemplate.prototype.create = function (scoreboard) {
	return scoreboard.addObjective(this.name, this.criteria, this.displayName, this.renderType);
}

/**
 * @param {Internal.Scoreboard} scoreboard
 * @returns {Internal.Objective}
 */
ObjectiveTemplate.prototype.get = function (scoreboard) {
	return scoreboard.getObjective(this.name);
}

/**
 * @param {Internal.Scoreboard} scoreboard
 * @returns {Internal.Objective}
 */
ObjectiveTemplate.prototype.getOrCreate = function (scoreboard) {
	const objective = this.get(scoreboard);
	return objective === null ? this.create(scoreboard) : objective;
}


ObjectiveTemplate.objectives = {
	MONEY: new ObjectiveTemplate('money', $ObjectiveCriteria.DUMMY, 'Money', 'integer')
}










/**
 * @class
 */
function ScoreboardLibrary() {}

/**
 * @static
 * @param {Internal.Scoreboard} scoreboard
 * @param {ObjectiveTemplate} objectiveTemplate
 * @returns {Internal.Objective}
 */
ScoreboardLibrary.getOrAddObjective = function (scoreboard, objectiveTemplate) {
	const objective = scoreboard.getObjective(objectiveTemplate.name);

	return objective !== null ? objective : objectiveTemplate.create();
}

/**
 * @static
 * @param {Internal.Entity} entity
 * @param {ObjectiveTemplate} objectiveTemplate
 * @returns {Number}
 */
ScoreboardLibrary.getPlayerScore = function (entity, objectiveTemplate) {
	const { scoreboard } = entity;

	const playerScoreName = entity instanceof $Entity ? entity.gameProfile.name : entity.stringUuid;
	const objective = objectiveTemplate.getOrCreate(scoreboard);

	// if player does not have a player score, return 0 instead of creating a new score for them (avoids scoreboard bloat)
	return scoreboard.hasPlayerScore(playerScoreName, objective) ? scoreboard.getOrCreatePlayerScore(playerScoreName, objective).score : Math.floor(0);
}

/**
 * @static
 * @param {Internal.Entity} entity
 * @param {ObjectiveTemplate} objectiveTemplate
 * @param {Number} newValue
 * @returns {void}
 */
ScoreboardLibrary.setPlayerScore = function (entity, objectiveTemplate, newValue) {
	const { scoreboard } = entity;

	const playerScoreName = entity instanceof $Entity ? entity.gameProfile.name : entity.stringUuid;
	const objective = objectiveTemplate.getOrCreate(scoreboard);

	scoreboard.getOrCreatePlayerScore(playerScoreName, objective).setScore(newValue);
}