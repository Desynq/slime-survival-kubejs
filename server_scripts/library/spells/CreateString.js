// priority: 10

/**
 * @constructor
 */
function CreateStringSpell() {}

CreateStringSpell.prototype.MANA_COST = 100;

/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
 */
CreateStringSpell.prototype.cast = function(context) {
	const { source } = context;
	const { player, server } = source;
	const playerManaSystem = new PlayerManaSystem(player);


	let currentMana = playerManaSystem.getCurrentMana();

	if (currentMana < this.MANA_COST) {
		player.tell(Text.red('You do not have enough mana to create string'));
		return 0;
	}
	currentMana -= this.MANA_COST;
	playerManaSystem.updateMana(currentMana);

	player.give(Item.of('minecraft:string'));

	server.runCommandSilent(`execute at ${player.username} run playsound minecraft:entity.item.pickup master @a[distance=0..] ~ ~ ~ 1 1`);
	player.tell('You created 1x String.');
};