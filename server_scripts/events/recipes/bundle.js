// priority: 1

ServerEvents.recipes(event => {
	event.shaped(
		Item.of('minecraft:bundle', 1),
		[
			' 0 ',
			'1 1',
			' 1 '
		],
		{
			0: 'minecraft:string',
			1: 'minecraft:leather'
		}
	);
});