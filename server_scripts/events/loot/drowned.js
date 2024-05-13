// priority: 0

LootJS.modifiers(event => {
	event.addLootTableModifier('minecraft:entities/drowned')
		.addWeightedLoot([
			Item.of('minecraft:kelp').withChance(0.02)
		])
});