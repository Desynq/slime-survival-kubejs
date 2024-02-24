// priority: 10


let powerJson = {
	name: 'Fragile',
	description: 'Spiders are kinda weak. -4 Max Health',

	type: 'origins:attribute',
	modifier: {
		name: 'Origin base modifier',
		attribute: 'minecraft:generic.max_health',
		value: -4,
		operation: 'addition'
	}
};

new ApoliPower(
	'slimesurvival:powers/origins/arachnid/fragile.json',
	powerJson
);