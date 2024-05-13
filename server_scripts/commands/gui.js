// priority: 1



ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;


	const shadowExecutor = function (context) {
		const player = context.source.player;


		let mana_display_settings;
		try {
			mana_display_settings = player.persistentData.getCompound('mana_display_settings');
		} catch (error) {
			player.tell(error);
			player.persistentData.put('mana_display_settings', new $CompoundTag());
			mana_display_settings = player.persistentData.getCompound('mana_display_settings');
		}

		mana_display_settings.putBoolean('shadow', Arguments.BOOLEAN.getResult(context, 'shadow_boolean'));
	}

	const shadowArgument = Commands.argument('shadow_boolean', Arguments.BOOLEAN.create(event)).executes(context => shadowExecutor);
	/**
	 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
	 */
	const shadowLiteral = Commands.literal('shadow').then(shadowArgument);
});