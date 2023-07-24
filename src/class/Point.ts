
  class Point{
    public x?: number;
     public y?: number;
     protected c? : number;
     private d? : number;
   
     constructor(x?: number, y?:number)
     {
         this.x=x;
         this.y=y;
 
     }
    
     draw(): void
     {
           console.log( 'x=' + this.x , 'y ='+ this.y)
     }
  
     getDistance( another : Point){
        // ..
     }
   }
 