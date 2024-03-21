// priority: 1000

/**
 * @param {Internal.Entity} player
 * @constructor
 */
function PlayerMoney(player) {
	this.player = player;
	this.server = this.player.server;
	this.scoreboard = this.server.scoreboard;
}

/**
 * @returns {Number}
 */
PlayerMoney.prototype.getMoney = function () {
	return ScoreboardLibrary.getPlayerScore(this.player, ObjectiveTemplate.objectives.MONEY);
}

/**
 * @param {Number} newValue
 * @returns {void}
 */
PlayerMoney.prototype.setMoney = function (newValue) {
	ScoreboardLibrary.setPlayerScore(this.player, ObjectiveTemplate.objectives.MONEY, newValue);
}


/**
 * @param {Number} newValue
 * @returns {void}
 */
PlayerMoney.prototype.addMoney = function (newValue) {
	let oldValue = new PlayerMoney(this.player).getMoney();
	let finalValue = oldValue + newValue;

	new PlayerMoney(this.player).setMoney(finalValue);
}

PlayerEvents.tick(event => {
	const { player } = event;
	/** @type {Internal.PlayerKJS} */
	const playerKJS = player;
	const playerMoney = new PlayerMoney(player);

	playerKJS.paint({
		test: {remove: false}
	});
	playerKJS.paint({
		test: {
			type: 'text',
			text: 'Moolah: ' + playerMoney.getMoney(),
			color: 'green',
			shadow: true,
			alignX: 'center',
			alignY: 'bottom',
			x: 0,
			y: -200,
			w: 0,
			h: 0
		}
	});
});