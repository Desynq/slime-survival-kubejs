// priority: 101

let block_condition = {};
block_condition.cobwebs = {
	type: 'origins:in_tag',
	tag: 'origins:cobwebs'
};

let condition = {};
condition.in_cobweb = {
	type: 'origins:in_block_anywhere',
	block_condition: block_condition.cobwebs
};
condition.climbing_toggled_on = {
	type: 'origins:power_active',
	power: '*:origins/arachnid/wall-climbing_toggle'
};
condition.not_sneaking = {
	inverted: true,
	type: 'origins:sneaking'
};



let powerJson = {
	name: 'Silky Smooth',
	description: 'You can move, climb, and attack through cobwebs unhindered.',

	type: 'origins:multiple',

	// removal of movement slowdown for cobwebs is done via having the `origins:no_cobweb_slowdown` power

	'web-climbing': {
		type: 'origins:climbing',
		condition: {
			type: 'origins:and',
			conditions: [condition.in_cobweb, condition.climbing_toggled_on]
		}
	},

	'punch-through': {
		type: 'origins:prevent_block_selection',
		block_condition: block_condition.cobwebs,
		condition: condition.not_sneaking
	}
};

new ApoliPower(
	'slimesurvival:powers/origins/arachnid/silky-smooth.json',
	powerJson
);