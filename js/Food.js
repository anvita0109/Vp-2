class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        // this.foodstock = foodStock;
        this.lastFed;
        this.foodstock = foodStock;
    }

    getFoodStock(){
    foodS = data.val();
    }

    updateFoodStock(){

    }

    deductFoodStock(){

    }

    display(){

        var x = 80;
        var y = 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.foodstock !== 0){
            for(var i = 0; i < this.foodstock; i++){
                if( i % 10 === 0){
                    x = 80;
                    y = y+50;
                }

                image(this.image, x, y, 50, 50)
                x = x+30;
            }


        }
    }



}