// priority: 100000



const $OriginLayer = Java.loadClass('io.github.apace100.origins.origin.OriginLayer');
const $OriginLayers = Java.loadClass('io.github.apace100.origins.origin.OriginLayers');
const $ModComponents = Java.loadClass('io.github.apace100.origins.registry.ModComponents');
const $Origin = Java.loadClass('io.github.apace100.origins.origin.Origin');

const $PowerType = Java.loadClass('io.github.apace100.apoli.power.PowerType');
const $PowerTypeReference = Java.loadClass('io.github.apace100.apoli.power.PowerTypeReference');



/**
 * @param {Internal.Entity} entity
 * @param {string} originLayerString
 */
function getOrigin(entity, originLayerString) {
	let originLayer = $OriginLayers.getLayer(originLayerString ?? 'origins:origin');
	let origin = $ModComponents.ORIGIN.get(entity).getOrigin(originLayer);

	return origin.getIdentifier();
}



/**
 * @param {Internal.Entity} entity
 * @param {string} powerId
 */
function isPowerActive(entity, powerId) {
	return new $PowerTypeReference(powerId).isActive(entity);
}