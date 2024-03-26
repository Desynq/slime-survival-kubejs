// priority: 101

function DraconianArmoredPower() {
	this.defaultArmor = $Attributes.ARMOR.defaultValue;
	this.targetArmor = 5;

	this.resourceLocation = 'slimesurvival:powers/origins/draconian/armored.json';

	this.powerType = new PowerType.Attribute()
		.modifier(new ApoliDataTypes.AttributedAttributeModifier('minecraft:generic.armor', 'addition', this.targetArmor - this.defaultArmor, 'Draconian armored power'))
	;
	this.power = new Power(this.resourceLocation, this.powerType)
		.name('Armored')
		.description('Even without converting worn armor into scales, draconians have some natural armor.')
		.defaultOrigins('slimesurvival:draconian')
		.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/item/netherite_scrap.png',
			`+${this.targetArmor} armor`
		))
	;
}

DraconianArmoredPower.INSTANCE = new DraconianArmoredPower();