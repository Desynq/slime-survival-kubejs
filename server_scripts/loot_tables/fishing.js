// priority: 1



ServerEvents.fishingLootTables(event => {
	console.log('injecting axolotl gills');

	event.modify('minecraft:fish', table => {
		table.addPool(pool => {
			pool.rolls = [100, 100];
			pool.addItem('slimesurvival:materials/axolotl_gills')
		})
	})
});