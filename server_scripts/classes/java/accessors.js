// priority: 2147483647

const SlimeSurvivalClasses = {
	$ModEntityAttributes: Java.loadClass('slimesurvival.common.registry.ModEntityAttributes'),
};

const TrinketsClasses = {
	$TrinketsAPI: Java.loadClass('dev.emi.trinkets.api.TrinketsApi'),
};

const CombatRollClasses = {
	$EntityAttributes_CombatRoll: Java.loadClass('net.combatroll.api.EntityAttributes_CombatRoll'),
};

const $ObjectiveCriteria = Java.loadClass('net.minecraft.world.scores.criteria.ObjectiveCriteria');
const $Entity = Java.loadClass('net.minecraft.world.entity.Entity');
const $Mth = Java.loadClass('net.minecraft.util.Mth');
const $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes');
const $Player = Java.loadClass('net.minecraft.world.entity.player.Player');
const $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier');
const $NbtUtils = Java.loadClass('net.minecraft.nbt.NbtUtils');
const $StringTag = Java.loadClass('net.minecraft.nbt.StringTag');
const $Stats = Java.loadClass('net.minecraft.stats.Stats');
const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag');
const $GameType = Java.loadClass('net.minecraft.world.level.GameType');
const $ServerPlayerGameMode = Java.loadClass('net.minecraft.server.level.ServerPlayerGameMode')