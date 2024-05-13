// priority: 1

ServerEvents.recipes(event => {
	event.remove('backpacked:backpack');

	event.shaped(
		Item.of('backpacked:backpack', 1),
		[
			'010',
			'232',
			'000'
		],
		{
			0: 'minecraft:leather',
			1: 'create:iron_sheet',
			2: 'minecraft:string',
			3: 'minecraft:bundle'
		}
	);
});