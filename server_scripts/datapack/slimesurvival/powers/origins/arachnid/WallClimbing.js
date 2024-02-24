// priority: 10

/**
 * @param {number} offset
 * @param {Object} blockCondition
 */
function generateBlockCollisionCondition(offset, blockCondition) {
	const condition = {
		type: 'origins:block_collision',
		offset_x: offset,
		offset_z: offset
	};
	if (typeof blockCondition === 'object') {
		condition.block_condition = blockCondition;
	};
	return condition;
};



/** decided to use snake_case here since it reads nicer */
let climbing_conditions = {};
climbing_conditions.power_toggled_on = {
	type: 'origins:power_active',
	power: '*:*_toggle'
};
climbing_conditions.not_creative_flying = {
	inverted: true,
	type: 'origins:creative_flying'
};
climbing_conditions.illegal_block_condition = {
	type: 'origins:in_tag',
	tag: 'slimesurvival:arachnid_cannot_climb'
};
climbing_conditions.not_colliding_with_illegal_block = {
	inverted: true,
	type: 'origins:or',
	conditions: [
		generateBlockCollisionCondition(0.01, climbing_conditions.illegal_block_condition),
		generateBlockCollisionCondition(-0.01, climbing_conditions.illegal_block_condition)
	]
};
climbing_conditions.horizontally_colliding_with_block_while_not_sneaking = {
	type: 'origins:and',
	conditions: [
		{
			type: 'origins:sneaking',
			inverted: true
		},
		{
			type: 'origins:collided_horizontally'
		}
	]
};
climbing_conditions.colliding_with_block_while_sneaking = {
	type: 'origins:and',
	conditions: [
		{
			type: 'origins:sneaking'
		},
		{
			type: 'origins:or',
			conditions: [
				generateBlockCollisionCondition(0.01),
				generateBlockCollisionCondition(-0.01)
			]
		}
	]
};
climbing_conditions.colliding_with_block = {
	type: 'origins:or',
	conditions: [
		climbing_conditions.horizontally_colliding_with_block_while_not_sneaking,
		climbing_conditions.colliding_with_block_while_sneaking
	]
};



let powerJson = {
	name: 'Wall Climbing',
	description: 'You can climb on walls as long as they\'re made of solid, tangible materials',

	type: 'origins:multiple',

	'toggle': {
		type: 'origins:toggle',
		key: {
			key: 'key.origins.primary_active',
			continuous: false
		}
	},

	'climbing': {
		type: 'origins:climbing',
		condition: {
			type: 'origins:and',
			conditions: [
				climbing_conditions.power_toggled_on,
				climbing_conditions.not_creative_flying,
				climbing_conditions.not_colliding_with_illegal_block,
				climbing_conditions.colliding_with_block
			]
		}
	}
};

new ApoliPower(
	'slimesurvival:powers/origins/arachnid/wall-climbing.json',
	powerJson
);