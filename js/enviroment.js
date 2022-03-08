class Enviroment{
	constructor(W,H,SCALE,entorno){
		this.X=0;
		this.Y=0;
		this.W=W;
		this.H=H;
		this.SCALE=SCALE;

		this.cargarCanvas();
	}

	get OffsetH(){ //devuelve el desplazamiento relacionado al alto del canvas
		return this.H/this.SCALE;
	}

	cargarCanvas(){
		this.CANVAS=document.getElementById('canvas');
		this.CANVAS.width=this.W;
		this.CANVAS.height=this.H;
		this.ctx=this.CANVAS.getContext("2d");
	}

	dibujar(){
		this.CANVAS.width=this.CANVAS.width;
		this.ctx.fillStyle = "#111";
		this.ctx.fillRect(0, 0, this.W, this.H);
		this.ctx.scale(this.SCALE,this.SCALE);

		this.entorno.dibujar();
	}
}

//#############################################################################
//       Cargar datos
//#############################################################################

var H=600;
var W=600;
var SCALE=3;

//loading objs
var img_mutex=0;
function mandarADibujar () {
	if(img_mutex==0){ENV.dibujar();}
}

var ENV = new Enviroment(W,H,SCALE);
ENV.entorno = new Entorno("sa");


//#############################################################################
//       Keyboard EVENTS
//#############################################################################

var KEY_FLAG=false;
var KEY=0;

document.onkeydown=function(e)
{
  KEY=window.event?e.keyCode:e.which;
  if(KEY>=37 && KEY<=40){
  	KEY_FLAG=true;
  }
}
document.onkeyup=function(e){KEY_FLAG=false;}


var PER_FLAG=true;
var PER_X = 0;
var PER_Y = 0;
setInterval(function()
{
  if(!KEY_FLAG)return;
  if(KEY==37)ENV.X+=2;
  if(KEY==38)ENV.Y+=2;
  if(KEY==39)ENV.X-=2;
  if(KEY==40)ENV.Y-=2;
  
  if(PER_FLAG){
	PER_X+=1;
	if(PER_X>=8){
		PER_X=0;
	}

	if(KEY==37)PER_Y=3;
    if(KEY==38)PER_Y=0;
    if(KEY==39)PER_Y=2;
    if(KEY==40)PER_Y=1;

  }
  PER_FLAG=!PER_FLAG;

  ENV.dibujar();
},25);
