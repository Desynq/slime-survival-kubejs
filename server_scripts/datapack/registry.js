// priority: 1

ServerEvents.highPriorityData(event => {
	global.powers.forEach(power => {
		event.addJson(power.getResourceLocation(), power.getJson());
	});

	/** @see global.origins */
	global.origins.forEach(origin => {
		event.addJson(origin.getResourceLocation(), origin.getJson());
	});
});