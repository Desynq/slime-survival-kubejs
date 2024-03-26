// priority: 2147483646



/**
 * @constructor
 */
PowerType.PreventFeatureRender = function () {
	this.json = {};
	this.json['type'] = 'origins:prevent_feature_render'
}
PowerType.PreventFeatureRender.prototype.getJson = function () {
	return this.json;
}

/**
 * @typedef {'armor' | 'cape' | 'cat_collar' | 'deadmau5' | 'dolphin_held_item' | 'drowned_overlay' | 'elytra' | 'enderman_block' | 'energy_swirl_overlay' | 'eyes' | 'fox_held_item' | 'head' | 'held_item' | 'horse_armor' | 'horse_marking'
 * | 'iron_golem_crack' | 'iron_golem_flower' | 'llama_decor' | 'mooshroom_mushroom' | 'panda_held_item' | 'saddle' | 'sheep_wool' | 'shoulder_parrot' | 'shulker_head' | 'slime_overlay' | 'snowman_pumpkin' | 'stray_overlay' | 'stuck_objects'
 * | 'trident_riptide' | 'tropical_fish_color' | 'villager_clothing' | 'villager_held_item' | 'wolf_collar'
 * } FeatureRender
 */

/**
 * @param {FeatureRender} feature
 */
PowerType.PreventFeatureRender.prototype.setFeature = function (feature) {
	this.json['feature'] = feature;
	return this;
}

/**
 * @param {Array<FeatureRender>} features
 */
PowerType.PreventFeatureRender.prototype.setFeatures = function (features) {
	this.json['features'] = features;
	return this;
}