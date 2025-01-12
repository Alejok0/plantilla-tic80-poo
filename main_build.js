// title:   game title
// author:  game developer, email, etc.
// desc:    short description
// site:    website link
// license: MIT License (change this to your license of choice)
// version: 0.1
// script:  js


class Scene
{
 constructor(){}
 update(){}
 drawn(){}
 debug(){}
}class Player 
{
	constructor()
	{
		this.x=96;
		this.y=24;
		this.velocity = 2;
		this.sprite = 1
	}

	move(direction)
	{
		switch(direction)
		{
		case "up":
			this.y -= this.velocity;
			break;
		case "down":
			this.y += this.velocity;
			break;
		case "left":
			this.x -= this.velocity;
			break;
		case "right":
			this.x += this.velocity;
			break;
		}
	}

	drawn(t)
	{
		spr(this.sprite+((t%60)/30|0)*2,this.x,this.y,14,3,0,0,2,2);
	}

}
class Scenery 
{
  constructor() 
  {
    this.color = 13;
  }

  update() 
  {
  }

  drawn(t) 
  {
    cls(this.color);
    print("HELLO WORLD!",84,84)
  }
}
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

let t = 0;

function BOOT(){
 current_scene =  new Game_scene();
}

function TIC()
{
 update();
 drawn(t);

 t++;
}

function update()
{
 current_scene.update();
}

function drawn()
{
 current_scene.drawn(t);
}

// <TILES>
// 001:eccccccccc888888caaaaaaaca888888cacccccccacc0ccccacc0ccccacc0ccc
// 002:ccccceee8888cceeaaaa0cee888a0ceeccca0ccc0cca0c0c0cca0c0c0cca0c0c
// 003:eccccccccc888888caaaaaaaca888888cacccccccacccccccacc0ccccacc0ccc
// 004:ccccceee8888cceeaaaa0cee888a0ceeccca0cccccca0c0c0cca0c0c0cca0c0c
// 017:cacccccccaaaaaaacaaacaaacaaaaccccaaaaaaac8888888cc000cccecccccec
// 018:ccca00ccaaaa0ccecaaa0ceeaaaa0ceeaaaa0cee8888ccee000cceeecccceeee
// 019:cacccccccaaaaaaacaaacaaacaaaaccccaaaaaaac8888888cc000cccecccccec
// 020:ccca00ccaaaa0ccecaaa0ceeaaaa0ceeaaaa0cee8888ccee000cceeecccceeee
// </TILES>

// <WAVES>
// 000:00000000ffffffff00000000ffffffff
// 001:0123456789abcdeffedcba9876543210
// 002:0123456789abcdef0123456789abcdef
// </WAVES>

// <SFX>
// 000:000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304000000000
// </SFX>

// <TRACKS>
// 000:100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// </TRACKS>

// <PALETTE>
// 000:1a1c2c5d275db13e53ef7d57ffcd75a7f07038b76425717929366f3b5dc941a6f673eff7f4f4f494b0c2566c86333c57
// </PALETTE>

