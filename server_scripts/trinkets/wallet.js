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
 * @param {Number} additionalValue
 * @returns {void}
 */
PlayerWallet.prototype.addMoney = function(additionalValue) {
	let playerTrinketComponent = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player).get();
	let wallet = playerTrinketComponent.getEquipped('slimesurvival:wallet')[0].b;

	let oldMoneyHeld = wallet.getOrCreateTag().getInt('moneyHeld');

	this.setHeldMoney(oldMoneyHeld + additionalValue);
}

/**
 * @param  {Number} newValue
 * @returns {void}
 */
PlayerWallet.prototype.setHeldMoney = function(newValue) {
	let playerTrinketComponent = TrinketsClasses.$TrinketsAPI.getTrinketComponent(this.player).get();
	let wallet = playerTrinketComponent.getEquipped('slimesurvival:wallet')[0].b;

	wallet.getOrCreateTag().putInt('moneyHeld', newValue);
	wallet.getOrCreateTagElement('display').put('Lore', [`[{"text":"Money Held: $${newValue}","italic":false,"color":"gold"}]`]);
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
	let player = event.player;
	let playerWallet = new PlayerWallet(player);
	
	if (!playerWallet.hasWallet()) { 
		player.paint({
			wallet: {visible: false}
		})
		return;
	};

	player.paint({
		wallet: {
			type: 'text',
			text: 'Wallet: $' + playerWallet.getHeldMoney(),
			color: 'gold',
			shadow: true,
			alignX: 'left',
			alignY: 'top',
			x: 2,
			y: 31,
			scale: 2.5,
			visible: true
		}
	});
});


/**
 * @param {Internal.ItemStack} grabbedWallet
 * @returns {void}
 */
PlayerWallet.prototype.onWalletPickup = function(grabbedWallet) {
	let moneyToAbsorb = grabbedWallet.getOrCreateTag().getInt('moneyHeld');

	if (!this.hasWallet()) { return };

	this.addMoney(moneyToAbsorb);

	this.player.inven

	this.player.getAllSlots().forEach(item => {
		if (item.getId() == 'slimesurvival:wallet') {
			item.setCount(0);
		}
	});
}

ItemEvents.pickedUp(event => {
	let item = event.getItem();

	if (item.id != 'slimesurvival:wallet') { return };

	let player = event.getPlayer();

	let playerWallet = new PlayerWallet(player);

	playerWallet.onWalletPickup(item);
});