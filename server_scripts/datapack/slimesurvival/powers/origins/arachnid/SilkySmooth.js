// priority: 10

let in_web_condition = {
	type: "origins:and",
	conditions: [
		{
			type: 'origins:in_block_anywhere',
			block_condition: {
				type: 'origins:in_tag',
				tag: 'origins:cobwebs'
			}
		},
		{
			type: 'origins:power_active',
			power: '*:origins/arachnid/wall-climbing_toggle'
		}
	]
};

let powerJson = {
	name: 'Silky Smooth',
	description: 'You can move, climb, and attack through cobwebs unhindered.',

	type: 'origins:multiple',

	// removal of movement slowdown for cobwebs is done via having the `origins:no_cobweb_slowdown` power

	'web-climbing': {
		type: 'origins:climbing',
		condition: in_web_condition
	}
};

new ApoliPower(
	'slimesurvival:powers/origins/arachnid/silky-smooth.json',
	powerJson
);