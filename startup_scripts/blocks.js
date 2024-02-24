// priority: 1

StartupEvents.registry('block', event => {
	event.create('slimesurvival:solid_black')
	.mapColor('color_black')
	.stoneSoundType()
	.hardness(30)
	.resistance(20)
	.requiresTool(true)
	.tagBlock('minecraft:mineable/pickaxe')
	.tagBlock('minecraft:needs_iron_tool')
	.displayName('Solid Black')
});