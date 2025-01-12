class Player 
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
