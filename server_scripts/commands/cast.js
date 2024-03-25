// priority: 1






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
						new CreateStringSpell().castFromCommand(context);
						return 1;
				};
				return 0;
			})
		)
	);
});