// priority: 101


let Scaled = PACKAGE.powers.origins.draconian.Scaled = function() {
	console.log(Scaled.resourceLocation);
};

Scaled.prototype.generateJson = function() {
	this.json = {
		name: Scaled.powerName,
		description: Scaled.powerDescription,
		badges: Scaled.badges,
		type: Scaled.powerType
	}
}

Scaled.resourceLocation = 'slimesurvival:powers/origins/draconian/scaled.json';

Scaled.powerName = 'Scaled';
Scaled.powerDescription = 'Armor is transmuted to scales that cover your skin.';
Scaled.badges = [
	{
		type: 'origins:tooltip',
		sprite: 'origins:textures/block/glass_pane.png',
		text: 'Worn armor is invisible'
	},
	{
		type: 'origins:tooltip',
		sprite: 'origins:textures/item/iron_chestplate.png',
		text: '+1 Max Health per 1 Armor'
	}
];

Scaled.powerType = 'origins:multiple';






(function () {
	const format = Color.TEXT;

	const resourceLocation = 'slimesurvival:powers/origins/draconian/scaled.json';

	const powerJson = {
		name: 'Scaled',
		description: 'Armor is transmuted to scales that cover your skin.',
		badges: [
			{
				type: 'origins:tooltip',
				sprite: 'origins:textures/block/glass_pane.png',
				text: 'Worn armor is invisible'
			},
			{
				type: 'origins:tooltip',
				sprite: 'origins:textures/item/iron_chestplate.png',
				text: '+1 Max Health per 1 Armor'
			}
		],

		type: 'origins:multiple',
		'invisible-armor': {

		},
		'': {}
	};

	new ApoliPower(resourceLocation, powerJson, ['slimesurvival:draconian']);
})();