// priority: 10


let powerJson = {
	name: 'Poison Resistance',
	description: 'You\'re immune to poison',

	type: 'origins:effect_immunity',
	effects: [
		'minecraft:poison'
	]
};

new ApoliPower(
	'slimesurvival:powers/origins/arachnid/poison-resistance.json',
	powerJson
);