class Persona extends Obj{

	constructor(X,Y,skin,nombre){
		super(X,Y,32,32,skin,nombre,"images/personas/");
	}

	dibujar(){
		
		//void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
		// s: source     d: destination

		ENV.ctx.drawImage(
			this.skin,
			PER_X*this.W,
			PER_Y*this.H,
			this.W,
			this.H,
			ENV.W/2/SCALE-this.W/SCALE-8,
			ENV.H/2/SCALE-this.H/2/SCALE,
			this.W,
			this.H
		);
	}

}