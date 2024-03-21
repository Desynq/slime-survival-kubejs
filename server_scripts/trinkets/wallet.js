//priority: 0

/**
 * @param {Internal.Entity} player
 * @constructor
 */
function PlayerWallet(player) {
	this.player = player;
}

/**
 * @returns {Boolean}
 */
PlayerWallet.prototype.hasWallet = function() {
	let trinkets = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player);
	return trinkets.get().isEquipped('slimesurvival:wallet');
}

/**
 * @param {Number} newValue
 * @returns {void}
 */
PlayerWallet.prototype.addMoneyToWallet = function(newValue) {
	let trinkets = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player);
	let wallet = trinkets.get().getEquipped('slimesurvival:wallet');
	this.player.tell(wallet.get());
}