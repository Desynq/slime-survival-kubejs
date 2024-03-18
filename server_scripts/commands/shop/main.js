// priority: 2

/**
 * @param {Internal.CommandContext <Internal.CommandSourceStack>} context
 * @constructor
 */
function ShopMainMenuScreen(context) {
	this.player = context.source.player;
	this.player.openChestGUI(this.TITLE, this.ROWS, gui => this.gui(gui));
}

ShopMainMenuScreen.prototype.TITLE = "Shop Main Menu";
ShopMainMenuScreen.prototype.ROWS = 3;



/**
 * @param {Internal.ChestMenuData} gui
 */
ShopMainMenuScreen.prototype.gui = function (gui) {
	gui.playerSlots = true;

	gui.anyClicked = event => {
		this.player.tell(`Clicked slot ${event.slot.index} using button ${event.button} as ${event.type}`);
	}

	gui.slot(0, 0, 8, 2, slot => {
		slot.item = Item.of('minecraft:gray_stained_glass_pane', 1);
	});

	gui.slot(0, 0, slot => {
		slot.item = Item.of('minecraft:apple', 1);
	});
};