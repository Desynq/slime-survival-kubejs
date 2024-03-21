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
	let playerTrinketComponent = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player).get();
	return playerTrinketComponent.isEquipped('slimesurvival:wallet');
}

/**
 * @param {Number} newValue
 * @returns {void}
 */
PlayerWallet.prototype.changeHeldMoney = function(newValue) {
	let playerTrinketComponent = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player).get();
	let wallet = playerTrinketComponent.getEquipped('slimesurvival:wallet')[0].b;

	let oldMoneyHeld = wallet.getOrCreateTag().getInt('moneyHeld');

	this.setHeldMoney(oldMoneyHeld + newValue);
}

/**
 * @param  {Number} newValue
 * @returns {void}
 */
PlayerWallet.prototype.setHeldMoney = function(newValue) {
	let playerTrinketComponent = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player).get();
	let wallet = playerTrinketComponent.getEquipped('slimesurvival:wallet')[0].b;

	wallet.getOrCreateTag().putInt('moneyHeld', newValue);
	wallet.getOrCreateTagElement('display').put('Lore', [`[{"text":"Money Held: ${newValue}","italic":false,"color":"gold"}]`]);
}

/**
 * @returns {Number}
 */
PlayerWallet.prototype.getHeldMoney = function() {
	let playerTrinketComponent = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player).get();
	let wallets = playerTrinketComponent.getEquipped('slimesurvival:wallet');
	if (wallets.length === 0) return 0;
	let wallet = wallets[0].b;

	let moneyHeld = wallet.getOrCreateTag().getInt('moneyHeld');
	if (isNaN(moneyHeld)) {
		return 0;
	} else {
		return moneyHeld;
	}
}


PlayerEvents.tick(event => {
	const { player } = event;
	/** @type {Internal.PlayerKJS} */
	const playerKJS = player;
	const playerWallet = new PlayerWallet(player);
	
	if (!playerWallet.hasWallet()) { 
		playerKJS.paint({
			wallet: {remove: true}
		})
	};

	playerKJS.paint({
		wallet: {
			type: 'text',
			text: 'Wallet: $' + playerWallet.getHeldMoney(),
			color: 'gold',
			shadow: true,
			alignX: 'left',
			alignY: 'top',
			x: 2,
			y: 31,
			scale: 2.5
		}
	});
});