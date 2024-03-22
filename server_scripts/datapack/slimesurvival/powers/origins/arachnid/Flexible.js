// priority: 101



var Flexible = {};
DATAGEN.powers.origins.arachnid.Flexible = Flexible;



Flexible.combatRollRechargeBuff = 0.5;
Flexible.combatRollCountBuff = 1;

Flexible.resourceLocation = 'slimesurvival:powers/origins/arachnid/flexible.json';


Flexible.combatRollRechargeSubpower = new PowerType.Attribute().modifier(new ApoliDataTypes.AttributedAttributeModifier(
	'combatroll:recharge', 'multiply_total', Flexible.combatRollRechargeBuff, 'Arachnid flexible power'
));
Flexible.combatRollCountSubpower = new PowerType.Attribute().modifier(new ApoliDataTypes.AttributedAttributeModifier(
	'combatroll:count', 'addition', Flexible.combatRollCountBuff, 'Arachnid flexible power'
));
Flexible.powerType = new PowerType.Multiple()
	.addPower('combat-roll-recharge', Flexible.combatRollRechargeSubpower)
	.addPower('combat-roll-count', Flexible.combatRollCountSubpower)
;
Flexible.power = new Power(Flexible.resourceLocation, Flexible.powerType)
	.name('Flexible')
	.description('Arachnids have flexible limbs that allow them perform more acrobatic feats in quick succession and recover from them faster')
	.addBadge(new ApoliBadgeType.Tooltip('origins:textures/gui/badge/info.png', `+${Flexible.combatRollRechargeBuff * 100}% combat roll recharge rate`))
	.addBadge(new ApoliBadgeType.Tooltip('origins:textures/gui/badge/info.png', `+${Flexible.combatRollCountBuff} combat rolls`))
	.defaultOrigins('slimesurvival:arachnid')
	.debug()
;