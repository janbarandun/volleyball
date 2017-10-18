export default class CollisionController {

    constructor(game,playerMaterial,ballMaterial, worldMaterial) {

        //  World Material 4 trues = the 4 faces of the world in left, right, top, bottom order
        game.physics.p2.setWorldMaterial(worldMaterial, true, true, false, true);
        
        let contactMaterial = game.physics.p2.createContactMaterial(ballMaterial, worldMaterial);
        contactMaterial.restitution = 0.6;  // bouncyness

        let playerBallContactMaterial = game.physics.p2.createContactMaterial(playerMaterial, ballMaterial);
        playerBallContactMaterial.friction = 0.3;
        playerBallContactMaterial.restitution = 0.3;
        
    }


}