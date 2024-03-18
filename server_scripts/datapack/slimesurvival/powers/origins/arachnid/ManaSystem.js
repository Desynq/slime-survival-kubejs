// priority: 101


let format = Color.TEXT;



let powerJson = {
	name: 'Mana System',
	description: 'Arachnids cast magic using hunger instead of mana.',
	badges: [
		{
			type: 'origins:tooltip',
			sprite: 'origins:textures/gui/badge/info.png',
			text: `${format.gray}Mana is calculated by doing (hunger + saturation) * manaCoefficient.`
		},
		{
			type: 'origins:tooltip',
			sprite: 'origins:textures/gui/badge/info.png',
			text: `${format.gray}manaCoefficient scales based on origin progression; starting value is 5.`
		}
	],

	type: 'origins:simple'
};

new ApoliPower(
	'slimesurvival:powers/origins/arachnid/mana-system.json',
	powerJson
);