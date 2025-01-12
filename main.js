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