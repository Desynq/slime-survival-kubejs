// priority: 0

EntityEvents.death(event => {
    let entity = event.entity;

    // if a player killed it, set the player var.
    let player = event.source.getActual() instanceof $Player ? event.source.getActual() : undefined;

    // player robs entity?
    if (player) {

        if (new PlayerWallet(player).hasWallet() != true) { return };

        switch (entity.type) {
            case 'minecraft:zombie':
                new PlayerWallet(player).addMoneyToWallet(1);
                break;
            default:
                // not a robbable mob
                break;
        }
    }
});