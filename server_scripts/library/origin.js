// priority: 100000



const $OriginLayer = Java.loadClass('io.github.apace100.origins.origin.OriginLayer');
const $OriginLayers = Java.loadClass('io.github.apace100.origins.origin.OriginLayers');
const $ModComponents = Java.loadClass('io.github.apace100.origins.registry.ModComponents');
const $Origin = Java.loadClass('io.github.apace100.origins.origin.Origin');



/**
 * @param {Internal.Entity} entity
 * @param {string} originLayerString
 */
function getOrigin(entity, originLayerString) {
	let originLayer = $OriginLayers.getLayer(originLayerString ?? 'origins:origin');
	let origin = $ModComponents.ORIGIN.get(entity).getOrigin(originLayer);

	return origin.getIdentifier();
};