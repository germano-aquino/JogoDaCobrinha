class Cobra {
    

    constructor(){
        this.xhead = w*floor(random(width/w));
        this.yhead = w*floor(random(height/w));
        this.alive = true;
        this.size = 1;
        this.velx = 0;
        this.vely = 0;
		this.body = [];
    }
     display(){
        stroke(255);
        fill(255);
        rect(this.xhead,this.yhead,w,w);
        for (var i = 0; i < this.body.length; i++){
			this.body[i].display();
		}
    }
     move(){
        this.xhead+= this.velx;
        this.yhead+= this.vely;
		for( var i = this.body.length; i>1; i--){
			var c1 = this.body[i-2];
			var c2 = this.body[i-1];
			c2.move(c1);
		}
		if (this.size>1){
			var c1 = this.body[0];
			c1.move(this);
		}
		
    }
	 checkWall(){
		 if(this.xhead < 0 || this.xhead > width - w || this.yhead < 0 || this.yhead > height - w) this.alive = false;
	 }
	 eat(rat){
		 if(this.xhead === rat.x && this.yhead === rat.y){
			 rat.eaten = true;
			 if(this.size == 1) {
				 let b = new Body(this.xhead, this.yhead, this.velx, this.vely)
				 this.body.push(b);
			 }
			 else {
				 let b = this.body[this.body.length -1];
				 let c = new Body(b.x,b.y,b.velx,b.vely);
				 this.body.push(c);
			 }
			 this.size++;
		 }
	 }
	eatBody(){
		for (var i = 0 ; i< this.body.length; i++){
			let b = this.body[i]
			if(this.xhead == b.x && this.yhead == b.y) this.alive = false;
			
		}
	}
}