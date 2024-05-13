// priority: 2147483647

/**
 * @param {Internal.InventoryChangedEventJS} event
 */
const PlayerInventoryChangedEvent = function (event) {
	this.event = event;
	this.player = event.player;
}