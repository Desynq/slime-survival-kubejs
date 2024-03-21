// priority: 2147483647


const ApoliBadgeTypes = {};

/**
 * @param {String} sprite The namespace, path and ID of the texture to use as the icon of the badge.
 * @param {String | Object} text The text to use in the tooltip. Can accept a JSON text component
*/
ApoliBadgeTypes.Tooltip = function(sprite, text) {
	this.json = {
		type: 'origins:tooltip',
		sprite: sprite,
		text: text
	};
}
ApoliBadgeTypes.Tooltip.prototype.getJson = function() {
	return this.json;
}