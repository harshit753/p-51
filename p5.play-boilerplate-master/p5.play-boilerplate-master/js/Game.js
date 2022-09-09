class Game {
    constructor() {

    }

start(){
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display()

    player1 = createSprite(width / 2 - 50, height - 100)
    player1.addImage("player1", player1_img)
    player1.scale = 0.07;

    player2 = createSprite(width / 2 + 150, height - 100)
    player2.addImage("player2", player2_img)
    player2.scale = 0.07;
    
}

}