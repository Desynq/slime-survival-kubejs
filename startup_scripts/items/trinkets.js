//priority 1

StartupEvents.registry('item', event => {
	event.create('slimesurvival:wallet')
	.unstackable()
	.formattedDisplayName(Component.yellow('Wallet'));
});