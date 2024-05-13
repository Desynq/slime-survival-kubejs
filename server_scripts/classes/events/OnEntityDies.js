// priority: 2147483647

/**
 * @param {Internal.LivingEntityDeathEventJS} event
 */
const OnEntityDiesEvent = function (event) {
	this.event = event;
	this.entity = event.entity;
	this.actualKiller = event.source.actual;

	this.diedFromPlayer();
};



OnEntityDiesEvent.prototype.getMoneyFromMob = function () {
	switch (this.entity.type) {
		case 'minecraft:zombie':
			return Math.floor(Math.random() * 4);

		case 'minecraft:skeleton':
			return Math.floor(Math.random() * 2);

		case 'minecraft:villager':
			return Math.floor(Math.random() * 11 + 10);

		case 'minecraft:witch':
			return Math.floor(Math.random() * 11 + 10);

		case 'minecraft:zombie_villager':
			return Math.floor(Math.random() * 6 + 5);

		default:
			return 0;
	}
};





OnEntityDiesEvent.prototype.diedFromPlayer = function () {
	if (!(this.actualKiller instanceof $Player)) return;
	const player = this.actualKiller;

	const playerWallet = new PlayerWallet(player);
	if (!playerWallet.hasWallet()) return;

	let moneyDroppedFromMob = this.getMoneyFromMob();
	if (moneyDroppedFromMob > 0) {
		player.tell(`You gained $${moneyDroppedFromMob} from ${this.entity.displayName.string}`)
		playerWallet.addMoney(moneyDroppedFromMob);
	}
};