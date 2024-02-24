// priority: 1

/**
 * @param {Internal.CommandContext} context
 */
function toggleArachnidClimbing(context) {
	context.source.player.tell(Text.green('Hello World'));
}

ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;
	event.register(
		Commands.literal('race')
		.then(Commands.literal('toggle')
			.executes(context => {
				context.source.player.tell(Text.green('Hello World'));
				return 0;
			})
		),
	);
});