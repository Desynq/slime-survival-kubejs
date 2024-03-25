// priority: 10

/**
 * @constructor
 */
function CreateStringSpell() {}

CreateStringSpell.prototype.MANA_COST = 100;

/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
 */
CreateStringSpell.prototype.castFromCommand = function(context) {
	this.cast(context.source.player);
};


/**
 * @param {Internal.Player} player
 */
CreateStringSpell.prototype.cast = function (player) {
	const { server } = player;
	const mana = new PlayerManaSystem(player);

	if (mana.currentMana < this.MANA_COST) {
		player.tell(Text.red('You do not have enough mana to create string'));
		return 0;
	}

	playerManaSystem.updateMana(mana.currentMana - this.MANA_COST);

	player.give(Item.of('minecraft:string'));

	server.runCommandSilent(`execute at ${player.username} run playsound minecraft:entity.item.pickup master @a[distance=0..] ~ ~ ~ 1 1`);
	player.tell('You created 1x String.');
}