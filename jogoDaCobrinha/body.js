class Body {

	constructor(x, y, velx, vely){
		this.x = x - mod(velx)*w;
		this.y = y - mod(vely)*w ;
		this.velx = velx;
		this.vely = vely;
	}
	display(){
		stroke(255);
		fill(255);
		rect(this.x,this.y,w,w);
	}
	move(c){
		this.x+= this.velx;
		this.y+= this.vely;
		this.velx = c.velx;
		this.vely = c.vely;
	}
}

function mod(a){
		if(a> 0) return 1;
		else if (a<0) return -1;
		else return 0;
	}