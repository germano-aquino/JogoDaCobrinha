class Food {
	constructor(){
		this.x = w*floor(random(width/w));
		this.y = w*floor(random(height/w));
		this.eaten = false;
	}
	
	display(){
		stroke(255,0,0);
		fill(255,0,0);
		rect(this.x,this.y,w,w);
	}
	
	newFood(){
		this.x = w*floor(random(width/w));
		this.y = w*floor(random(height/w));
		this.eaten = false;
	}
}