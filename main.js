var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(510);
	block_image_object.set({
	top:0,
	left:0
	});
	canvas.add(block_image_object);
	});

}
function f2(){
    fabric.Image.fromURL('https://cdn4.iconfinder.com/data/icons/hats-caps-colored/48/Clothing_Hats__Caps_Artboard_35-512.png', function(Img) {
        block_image_object = Img;
            
        block_image_object.scaleToWidth(70);
        block_image_object.scaleToHeight(51);
        block_image_object.set({
        top:0,
        left:0
        });
        canvas.add(block_image_object);
        });




}
function playSound(){
	x.play();
}
