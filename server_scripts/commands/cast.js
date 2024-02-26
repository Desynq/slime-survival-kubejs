// priority: 1





/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
 */
function castCreateString(context) {
	const {source} = context;
	const {player} = source;

	let currentMana = player.persistentData.current_mana ?? 0;

	if (currentMana < 50) {
		player.tell(Text.red('You do not have enough mana to create string'));
		return 0;
	}

	currentMana -= 50;
	player.persistentData.current_mana = currentMana;

	player.give(Item.of('minecraft:string'));

	player.tell('you create string');
};






ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;

	const spellTypeArgument = Commands.argument('spell_type', Arguments.STRING.create(event))
		.suggests((context, builder) => {
			builder.suggest('create_string');
			return builder.buildFuture();
		})
	;

	event.register(Commands.literal('cast')
		.then(spellTypeArgument
			.executes(context => {
				const spellType = Arguments.STRING.getResult(context, 'spell_type');

				switch (spellType) {
					case 'create_string':
						castCreateString(context);
						return 1;
				};
				return 0;
			})
		)
	);
});




// .suggests((context, builder) => {
// 	builder.suggest('create_string')
// 	return builder.buildFuture()
// });