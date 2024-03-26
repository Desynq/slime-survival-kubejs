// priority: 101



function DraconianXiphophobiaPower() {
	this.damageModifierValue = 1.0;
	this.resourceLocation = 'slimesurvival:powers/origins/draconian/xiphophobia.json';

	this.equippedItemCondition = new ApoliConditionType.Entity_EquippedItem(
		'mainhand',
		new ApoliConditionType.Item_Ingredient(new ApoliDataTypes.Ingredient()
			.addTag('c:swords')
		)
	);
	this.powerType = new PowerType.ModifyDamageTaken()
		.biEntityCondition(new ApoliConditionType.BiEntity_Actor(this.equippedItemCondition))
		.modifier(new ApoliDataTypes.AttributeModifier('multiply_total_multiplicative', this.damageModifierValue, undefined, 'Draconian xiphophobia power'))
	;

	this.power = new Power(this.resourceLocation, this.powerType)
		.name('Xiphophobia')
		.description('Dragons are often slayed using swords as they can more easily penetrate their tough scales and stab them.')
		.defaultOrigins('slimesurvival:draconian')
		.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/item/iron_sword.png',
			`Damage from attackers using swords does +${this.damageModifierValue * 100}% damage`
		))
		.debug()
	;
}

DraconianXiphophobiaPower.INSTANCE = new DraconianXiphophobiaPower();