//##########################################################################################################
//                                Clase Obj
//##########################################################################################################
class Obj{
	constructor(X,Y,W,H,skin,nombre,skinRoute="images/"){
		this.X=X;
		this.Y=Y;
		this.W=W;
		this.H=H;
		this.nombre=nombre;
		this.skinRoute=skinRoute;
		this.cargarSkin(skin);
	}

	cargarSkin(skin){
		img_mutex--;
		this.skin = new Image();
		this.skin.src = this.skinRoute+skin+'.png';
		this.skin.onload = function () {
			img_mutex++;
			mandarADibujar();
		}
	}

	get Xend(){
		return this.X + this.W;
	}

	get Yend(){
		return this.Y + this.H;
	}

	get centro(){
		var centro = {};
		centro.X = this.X + this.W/2;
		centro.Y = this.Y + this.H/2;
		return centro;
	}

	colisionaCon(obj){
		return isBetween(obj.X) || isBetween(obj.Xend) || isBetween(obj.Y) || isBetween(obj.Yend);
	}

	isBetween(n){
		if(this.X < n && this.Xend > n){return true;}
		if(this.Y < n && this.Yend > n){return true;}
		return false;
	}

	dibujar(){
		ENV.ctx.drawImage(this.skin,this.X+ENV.X,this.Y+ENV.Y);
	}
}

//##########################################################################################################
//                                Clase Pared
//##########################################################################################################

class Pared extends Obj{

	constructor(X,Y,W,H,skin,nombre){
		super(X,Y,W,H,skin,nombre,"images/entorno/pared/");
	}

	dibujar(){
		var repeat="no-repeat";
		switch(this.nombre){
			case "vertical":{
				repeat="repeat-y";
				break;
			}
			case "horizontal":{
				repeat="repeat-x";
				break;
			}
		}
		ENV.ctx.fillStyle = ENV.ctx.createPattern(this.skin, repeat);
		ENV.ctx.save();
    	ENV.ctx.translate(this.X+ENV.X, this.Y+ENV.Y);
		ENV.ctx.fillRect(0,0, this.W, this.H);
		ENV.ctx.restore();
	}
}
//##########################################################################################################
//                                Clase Suelo
//##########################################################################################################

class Suelo extends Obj{

	constructor(X,Y,W,H,skin,nombre){
		super(X,Y,W,H,skin,nombre,"images/entorno/suelo/");
	}

	dibujar(){
		ENV.ctx.fillStyle = ENV.ctx.createPattern(this.skin, "repeat");
		ENV.ctx.save();
    	ENV.ctx.translate(this.X+ENV.X, this.Y+ENV.Y);
		ENV.ctx.fillRect(0,0, this.W, this.H);
		ENV.ctx.restore();
	}
}


//##########################################################################################################
//                                Clase Mueble
//##########################################################################################################

class Mueble extends Obj{
	constructor(X,Y,W,H,skin,nombre){
		super(X,Y,W,H,skin,nombre,"images/entorno/mueble/");
	}
}