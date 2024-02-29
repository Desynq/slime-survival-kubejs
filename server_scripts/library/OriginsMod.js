// priority: 100000


const $OriginLayer = Java.loadClass('io.github.apace100.origins.origin.OriginLayer');
const $OriginLayers = Java.loadClass('io.github.apace100.origins.origin.OriginLayers');
const $ModComponents = Java.loadClass('io.github.apace100.origins.registry.ModComponents');
const $Origin = Java.loadClass('io.github.apace100.origins.origin.Origin');

const $PowerType = Java.loadClass('io.github.apace100.apoli.power.PowerType');
const $PowerTypeReference = Java.loadClass('io.github.apace100.apoli.power.PowerTypeReference');

const $PowerHolderComponent = Java.loadClass('io.github.apace100.apoli.component.PowerHolderComponent');

const $Power = Java.loadClass('io.github.apace100.apoli.power.Power');
const $VariableIntPower = Java.loadClass('io.github.apace100.apoli.power.VariableIntPower');
const $CooldownPower = Java.loadClass('io.github.apace100.apoli.power.CooldownPower');





const OriginsLibrary = {};

/**
 * @param {Internal.Entity} entity
 * @param {string} originLayerId
 * @returns {string}
 */
OriginsLibrary.getOriginIdentifier = function(entity, originLayerId) {
	let originLayer = $OriginLayers.getLayer(originLayerId ?? 'origins:origin');
	let origin = $ModComponents.ORIGIN.get(entity).getOrigin(originLayer);

	return origin.getIdentifier();
};

/**
 * @param {Internal.Entity} entity
 * @param {string} powerId
 * @returns {boolean}
 */
OriginsLibrary.isPowerActive = function(entity, powerId) {
	return new $PowerTypeReference(powerId).isActive(entity);
};

/**
 * @param {Internal.entity} entity
 * @param {string} powerId
 * @returns {Internal.Power}
 */
OriginsLibrary.getEntityPower = function(entity, powerId) {
	const component = $PowerHolderComponent.KEY.get(entity);
	const powerType = $PowerTypeReference(powerId);
	const power = component.getPower(powerType);
	return power;
};

/**
 * @param {Internal.entity} entity
 * @param {string} powerId
 * @returns {number}
 */
OriginsLibrary.getPowerResourceValue = function(entity, powerId) {
	const power = this.getEntityPower(entity, powerId);

	if (power instanceof $VariableIntPower) {
		return power.getValue();
	}
	if (power instanceof $CooldownPower) {
		return power.getRemainingTicks();
	}
	return 0;
};

// TODO: Add setPowerResourceValue(), setPowerResourceMaximum(), and setPowerResourceMinimum()