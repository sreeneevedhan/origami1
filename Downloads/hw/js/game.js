class Game {
    constructor(){
  
    }
  
    getState(){
    }
  
    update(){
    }
  

async start(){

    player1 = createSprite(0,0);
    player1.addAnimation("player1",player1Img);
    player1.setCollider("rectangle",0,0,20,80);  
    player1.scale=0.6;
   
    player2=createSprite(0,0);
    player2.addAnimation("player2",player2Img);
    player2.setCollider("rectangle",0,0,20,80);
    player2.scale=0.6;
   
    players=[player1,player2]

    hurdleGroup=new Group();
    hurdleGroup1=new Group();
    
  }

  play(){
           
  }
  end(){

  }
}