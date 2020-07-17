var image=null;
function uploadImage() {
   var image1=document.getElementById("image");
   var canvas1=document.getElementById("canvas");
    image=new SimpleImage(image1);
    image.drawTo(canvas1);
}
function MakeGray() {
    var canvas1=document.getElementById("canvas");
    var image1=new SimpleImage(image);
    if(image1!=null){
        for(var pixel of image1.values()){
            var r=pixel.getRed();
            var g=pixel.getGreen();
            var b=pixel.getBlue();
            var q=(r+g+b)/3;
            pixel.setRed(q);
            pixel.setGreen(q);
            pixel.setBlue(q);
    }
        image1.drawTo(canvas1);
   }
    else{
        alert("Image has not been uploaded.");
    }
}
function reset() {
       var canvas1=document.getElementById("canvas");
       var image2=new SimpleImage(image);
       image2.drawTo(canvas1);
}
function make_red() {
    if(image!=null){
        var canvas1=document.getElementById("canvas");
        var image3=new SimpleImage(image);
        for(var pixel of image3.values()){
            pixel.setRed("255");
        }
        image3.drawTo(canvas1);
    }
    else{
        alert("Image has not been uploaded.");
    }
}
function Make_Rainbow() {
    var canvas1=document.getElementById("canvas");
    var image4=new SimpleImage(image);
    var h=image4.getHeight();
    for(var pixel of image4.values()){
        var y=pixel.getY();
        var r=pixel.getRed();
        var g=pixel.getGreen();
        var b=pixel.getGreen();
        var avg=(r+g+b)/3;

        if(y>0 && y<=(h/3)){
            pixel.setBlue(255);
        }
        else if(y>(h/3) && y<((2*h)/3)){
                if(avg<128){
                    pixel.setRed(2*avg);
                    pixel.setGreen(0);
                    pixel.setBlue(0);
                }
                else{
                    pixel.setRed(255);
                    pixel.setBlue((2*avg)-255);
                    pixel.setGreen((2*avg)-255);
                }
        }
         else{
              if(avg<128 && avg<128){
                  pixel.setRed(2*avg);
                  pixel.setGreen(2*avg);
                  pixle.setBlue(0);
              }
              else if(avg>128 && avg<128){
                  pixel.setRed(255);
                  pixel.setGreen(2*avg);
                  pixel.setBlue(0);
              }
              else if(r<128 && g>128){
                  pixel.setRed(2*avg);
                  pixel.setGreen(255);
                  pixel.setBlue(0);
              }
              else{
                  pixel.setRed(255);
                  pixel.setGreen(255);
                  pixel.setBlue(0);
              }
        }
    }
}
function Make_DarkRed() {
    if(image!=null){
    var canvas1=document.getElementById("canvas");
        var image5=new SimpleImage(image);
    for(var pixel of image5.values()){
        var r=pixel.getRed();
        var g=pixel.getGreen();
        var b=pixel.getGreen();
        var avg=(r+g+b)/3;
        if(avg<128){
            pixel.setRed(2*avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        }
        else{
            pixel.setRed(255);
            pixel.setBlue((2*avg)-255);
            pixel.setGreen((2*avg)-255);
        }
     }
    image5.drawTo(canvas1);
    }
    else {
        alert("Image has not been uploaded");
    }
}