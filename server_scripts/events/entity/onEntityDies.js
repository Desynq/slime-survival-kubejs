// priority: 0

EntityEvents.death(event => {
    let entity = event.entity;

    // if a player killed it, set the player var.
    let player = event.source.getActual() instanceof $Player ? event.source.getActual() : undefined;

    // player robs entity?
    if (player) {

        let playerwallet = new PlayerWallet(player);

        if (!playerwallet.hasWallet()) { return };

        let moneyDropped = 0;

        switch (entity.type) {
            case 'minecraft:zombie':
                moneyDropped = Math.floor(Math.random() * 4);
                playerwallet.changeHeldMoney(moneyDropped);
                break;
            case 'minecraft:skeleton':
                moneyDropped = Math.floor(Math.random() * 2);
                playerwallet.changeHeldMoney(moneyDropped);
                break;
            case 'minecraft:villager':
                moneyDropped = Math.floor(Math.random() * 11 + 10);
                playerwallet.changeHeldMoney(moneyDropped);
                break;
            case 'minecraft:witch':
                moneyDropped = Math.floor(Math.random() * 11 + 10);
                playerwallet.changeHeldMoney(moneyDropped);
                break;
            case 'minecraft:zombie_villager':
                moneyDropped = Math.floor(Math.random() * 6 + 5);
                playerwallet.changeHeldMoney(moneyDropped);
                break;
            default:
                // not a robbable mob
                break;
        }
    }
});