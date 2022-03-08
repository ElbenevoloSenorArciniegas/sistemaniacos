class Entorno{

	constructor(nombre){

		this.suelos = new Array();
		this.paredes = new Array();
		this.muebles=new Array();
		this.personas=new Array();

		switch(nombre){
			case "sa":{
				this.construirSA();
				break;
			}
		}
	}

	dibujar(){
		this.pintarTodos(this.suelos);
		this.pintarTodos(this.paredes);
		this.pintarTodos(this.muebles);
		this.pintarTodos(this.personas);
	}

	pintarTodos(array){
		for (var i = 0; i < array.length; i++) {
			var obj = array[i];
			obj.dibujar();
		};
	}

	construirSA(){
		var w=186;
		var h=1200;
		var x=7;
		var y=-h+ENV.OffsetH;

		var anchoPasillo=280;

		this.suelos.push(new Suelo(x+4,y+9,w-9,h-9,"tableta","piso"));
		
		this.paredes.push(new Pared(x,y,9,h,"BlancaV","vertical"));
		this.paredes.push(new Pared(w,y,9,anchoPasillo+9+176,"BlancaV","vertical"));
		this.paredes.push(new Pared(w,y+anchoPasillo+306,9,h-anchoPasillo-306,"BlancaV","vertical"));

		this.paredes.push(new Pared(x,y,w,9,"BlancaH","horizontal"));
		this.paredes.push(new Pared(x,ENV.OffsetH-9,w,9,"BlancaH","horizontal"));

		this.paredes.push(new Pared(x,y,9,9,"BlancaESI","esquina"));
		this.paredes.push(new Pared(x,ENV.OffsetH-9,9,9,"BlancaEII","esquina"));
		this.paredes.push(new Pared(w,y,9,9,"BlancaESD","esquina"));
		this.paredes.push(new Pared(w,ENV.OffsetH-9,9,9,"BlancaEID","esquina"));

		//pasillo
		this.suelos.push(new Suelo(w,y+anchoPasillo+179+9,w+180,130-9,"blanco","piso"));

		this.paredes.push(new Pared(w+360,y+anchoPasillo+9+176,9,130,"BlancaV","vertical"));
		this.paredes.push(new Pared(w,y+anchoPasillo+9+176,360,9,"BlancaH","horizontal"));
		this.paredes.push(new Pared(w,y+anchoPasillo+306,360,9,"BlancaH","horizontal"));

		this.paredes.push(new Pared(w,y+anchoPasillo+9+176,9,9,"BlancaEII","esquina"));
		this.paredes.push(new Pared(w+360,y+anchoPasillo+9+176,9,9,"BlancaESD","esquina"));
		this.paredes.push(new Pared(w+360,y+anchoPasillo+306,9,9,"BlancaEID","esquina"));
		this.paredes.push(new Pared(w,y+anchoPasillo+306,9,9,"BlancaESI","esquina"));

		this.muebles.push(new Mueble(w,y+anchoPasillo+306-36,117,36,"mostrador","mostrador"));
		this.muebles.push(new Mueble(w+110,y+anchoPasillo+306-36,68,36,"microondas","microondas"));
		this.muebles.push(new Mueble(w+180,y+anchoPasillo+306-47,180,48,"meson","mesa"));

		//Muebles o algo XD
		this.muebles.push(new Mueble(w-80,ENV.OffsetH-80-85,80,80,"mesaVigilante","mesa"));
		this.muebles.push(new Mueble(w-80,ENV.OffsetH-80-175,80,80,"mesaBlanca4Sillas","mesa"));
		this.muebles.push(new Mueble(w-80,ENV.OffsetH-80-310,80,80,"mesaBlanca4Sillas","mesa"));
		this.muebles.push(new Mueble(w-80,ENV.OffsetH-2*80-300,80,80,"mesaBlanca4Sillas","mesa"));
		this.muebles.push(new Mueble(w-80,ENV.OffsetH-3*80-290,80,80,"mesaBlanca4Sillas","mesa"));
		this.muebles.push(new Mueble(w-80,ENV.OffsetH-80-720,80,80,"mesaBlanca4Sillas","mesa"));
		this.muebles.push(new Mueble(w-100,ENV.OffsetH-80-870,100,80,"mesaBlanca4SillasAmarillas","mesa"));
		this.muebles.push(new Mueble(w-100,ENV.OffsetH-80-950,100,80,"mesaBlanca4SillasAmarillas","mesa"));
		this.muebles.push(new Mueble(w-100,ENV.OffsetH-80-1030,100,80,"mesaBlanca4SillasAmarillas","mesa"));
		this.muebles.push(new Mueble(w-65,ENV.OffsetH-80-1110,80,65,"mesaCafe","Cafetera"));
		
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-74-30,32,74,"sillaRoja","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-74-220,32,74,"sillaRoja","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-74-595,32,74,"sillaRoja","silla"));
		
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-30-190,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-30-295,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-30-402,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-2*30-402,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-3*30-402,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-4*30-402,32,32,"sillaNegraAmarilla","silla"));
		
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-3*30-607,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-4*30-607,32,32,"sillaNegraAmarilla","silla"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-30-798,32,32,"sillaNegraAmarilla","silla"));

		this.muebles.push(new Mueble(x+9,ENV.OffsetH-125,25,25,"matera","matera"));
		this.muebles.push(new Mueble(x+9,ENV.OffsetH-25-10,25,25,"matera","matera"));
		this.muebles.push(new Mueble(w-25,ENV.OffsetH-25-10,25,25,"matera","matera"));

		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-120,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(w-2,ENV.OffsetH-65-30,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-330,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-530,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(w-2,ENV.OffsetH-65-250,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(w-2,ENV.OffsetH-65-530,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-730,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(w-4,ENV.OffsetH-65-800,13,65,"vidrioVerticalDer","puerta"));
		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-830,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-900,13,65,"puertaMaderaVertical","puerta"));
		this.muebles.push(new Mueble(x-2,ENV.OffsetH-65-1050,13,65,"puertaMaderaVertical","puerta"));

		this.muebles.push(new Mueble(x+w/2-64,y,65,13,"vidrioHorizontalSup","ventana"));
		this.muebles.push(new Mueble(x+w/2,y,65,13,"vidrioHorizontalSup","ventana"));
		this.muebles.push(new Mueble(x+w/2-64,ENV.OffsetH-13,65,13,"vidrioHorizontalInf","puerta"));
		this.muebles.push(new Mueble(x+w/2,ENV.OffsetH-13,65,13,"vidrioHorizontalInf","puerta"));
		this.muebles.push(new Mueble(w+360-4,y+anchoPasillo+200,13,65,"vidrioVerticalDer","puerta"));

		this.muebles.push(new Mueble(w-79,ENV.OffsetH-13-940,79,13,"separador","separador"));
		this.muebles.push(new Mueble(w-79,ENV.OffsetH-13-1100,79,13,"separador","separador"));
		this.muebles.push(new Mueble(x+9,y+9,50,50,"maquinaAgua","Expendedora"));

		//Personas 
		//Jugador
		this.personas.push(new Persona(ENV.X/2,ENV.Y/2,"arciniegas","Jugador"));
	}
}