// priority: 1

ServerEvents.highPriorityData(event => {
	/**
	 * @see ApoliPower
	 */
	ApoliPower.instances.forEach(power => {
		event.addJson(power.getResourceLocation(), power.getJson());
	});

	/**
	 * @see Origin
	 */
	Origin.instances.forEach(origin => {
		event.addJson(origin.getResourceLocation(), origin.getJson());
	});
});