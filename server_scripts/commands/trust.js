// priority: 1



/**
 * @param {Internal.Player} player
 */
function TrustedPlayersData(player) {
	this.player = player;
}
TrustedPlayersData.KEY = 'trusted_players';
TrustedPlayersData.STRING_TAG_TYPE = 8;
TrustedPlayersData.LIST_TAG_TYPE = 9;


/**
 * Gets list tag of UUIDs from the player's persistent data
 * @returns {Internal.ListTag}
 */
TrustedPlayersData.prototype.getListTag = function () {
	return this.player.persistentData.getList(TrustedPlayersData.KEY, TrustedPlayersData.STRING_TAG_TYPE);
}

/**
 * @param {Internal.ListTag} listTag
 */
TrustedPlayersData.prototype.saveListTag = function (listTag) {
	this.player.persistentData.put(TrustedPlayersData.KEY, listTag);
}


/**
 * @param {String} playerName
 */
TrustedPlayersData.prototype.addPlayer = function (playerName) {
	const listTag = this.getListTag();
	const playerNameTag = $StringTag.valueOf(playerName);

	if (listTag.contains(playerNameTag)) {
		this.player.tell('Player is already added');
		return;
	}

	listTag.addTag(listTag.size(), playerNameTag);
	this.saveListTag(listTag);

	this.player.tell('Added player');
}

/**
 * @param {String} playerName
 */
TrustedPlayersData.prototype.removePlayer = function (playerName) {
	const listTag = this.getListTag();
	const playerNameStringTag = $StringTag.valueOf(playerName);

	if (!listTag.contains(playerNameStringTag)) {
		this.player.tell('Player is not added');
		return;
	}

	listTag.removeIf(tag => tag === playerNameStringTag);

	this.player.tell('Removed player');
}

/**
 * @returns {Array<String>}
 */
TrustedPlayersData.prototype.getNames = function () {
	const listTag = this.getListTag();
	const names = [];
	for (let i = 0; i < listTag.size(); i++) {
		names.push(listTag.getString(i));
	}
	return names;
}

TrustedPlayersData.prototype.listPlayers = function () {
	const names = this.getNames();
	this.player.tell(`Trusted Players: ${names.join(', ')}`);
}



/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
 * @param {Internal.SuggestionsBuilder} builder
 */
TrustedPlayersData.suggestPlayersToAdd = function (context, builder) {
	const { source, source: { player } } = context;
	const namesInList = new TrustedPlayersData(player).getNames();

	const names = source.server.playerList.players
		.map(player => player.gameProfile.name)
		.filter(name => namesInList.indexOf(name) === -1)
	;

	for (let name of names) {
		builder.suggest(name);
	}
	return builder.buildFuture();
}

/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
 * @param {Internal.SuggestionsBuilder} builder
 */
TrustedPlayersData.suggestPlayersToRemove = function (context, builder) {
	const { source, source: { player } } = context;
	const names = new TrustedPlayersData(player).getNames();

	for (let name of names) {
		builder.suggest(name);
	}
	return builder.buildFuture();
}





ServerEvents.commandRegistry(event => {
	const { commands: Commands, arguments: Arguments } = event;

	const removePlayerArgument = Commands.argument('target', Arguments.STRING.create(event))
		.suggests((context, builder) => TrustedPlayersData.suggestPlayersToRemove(context, builder) )
	;

	const addPlayerArgument = Commands.argument('target', Arguments.STRING.create(event))
		.suggests((context, builder) => TrustedPlayersData.suggestPlayersToAdd(context, builder))
	;


	event.register(Commands.literal('trust')
		.then(Commands.literal('add')
			.then(addPlayerArgument
				.executes(context => helper(context, 'add'))
			)
		)
		.then(Commands.literal('remove')
			.then(removePlayerArgument
				.executes(context => helper(context, 'remove'))
			)
		)
		.then(Commands.literal('list')
			.executes(context => helper(context, 'list'))
		)
	);

	/**
	 * @param {Internal.CommandContext<Internal.CommandSourceStack>} context
	 * @param {'add' | 'remove' | 'list'} type
	 */
	const helper = function (context, type) {
		const { source, source: { player } } = context;
		const data = new TrustedPlayersData(player);

		if (type === 'list') {
			data.listPlayers();
			return 1;
		}

		/** @type {String} */
		const targetName = Arguments.STRING.getResult(context, 'target');
		switch (type) {
			case 'add':
				data.addPlayer(targetName);
				break;
			case 'remove':
				data.removePlayer(targetName);
				break;
		}
		return 1;
	}
});
