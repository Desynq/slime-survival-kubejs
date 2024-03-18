// priority: 1

/**
 * @param {Internal.CommandContext <Internal.CommandSourceStack>} context
 */
function openShop(context) {
	const { source } = context;
	const { player } = source;
	player.openChestGUI("hello world", 6, gui => {
		gui.anyClicked = e => player.tell(`Clicked ${e.slot}:${e.button}`);
	});
}








ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;
	event.register(
		Commands.literal('shop')
		.then(Commands.literal('open')
			.executes(context => {
				new ShopMainMenuScreen(context);
				return 0;
			})
		),
	);
});