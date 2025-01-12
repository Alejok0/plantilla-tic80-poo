class Game_scene extends Scene
{
  constructor()
  {
    super();
    this.player = new Player(60,100);
    this.scenery = new Scenery();
  }

  update()
  {
    this.scenery.update();
    this.get_user_input();
  }

  drawn(t)
  {
    this.scenery.drawn(t)
    this.player.drawn(t); 
  }

  get_user_input()
  {
    if (btn(0) || key(23))
    {
      this.player.move("up");
    }
    else if (btn(1) || key(19))
    {
      this.player.move("down");
    }
    else if(btn(2) || key(1))
    {
      this.player.move("left");
    }
    else if(btn(3) || key(4))
    {
      this.player.move("right");
    }
  }

}

