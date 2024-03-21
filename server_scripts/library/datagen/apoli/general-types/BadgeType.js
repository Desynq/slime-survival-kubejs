// priority: 2147483647


const ApoliBadgeType = {};

/**
 * @param {String} sprite The namespace, path and ID of the texture to use as the icon of the badge.
 * @param {String | Object} text The text to use in the tooltip. Can accept a JSON text component
*/
ApoliBadgeType.Tooltip = function(sprite, text) {
	this.json = {
		type: 'origins:tooltip',
		sprite: sprite,
		text: text
	};
}
ApoliBadgeType.Tooltip.prototype.getJson = function() {
	return this.json;
}