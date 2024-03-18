// priority: 101


(function () {
	let resourceLocation = 'slimesurvival:powers/origins/sludge/unextinguishable.json';
	let powerJson = {
		name: 'Unextinguishable',
		description: 'You can\'t extinguish an oil fire using water. Likewise, the same logic applies to slimes and sludges.',

		type: 'slimesurvival:unextinguishable'
	};

	new ApoliPower(resourceLocation, powerJson, ['slimesurvival:sludge']);
})();