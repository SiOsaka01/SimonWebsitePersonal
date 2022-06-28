var mx = document.getElementById("mx");
var ctx = mx.getContext("2d");

//making the canvas size of broswer screen at time of render
mx.height = window.innerHeight;
mx.width = window.innerWidth;


//use binary numbers to make it look technical and even more impressive
var textdrop = "SimonOsaka";
//converting the string into an array of single characters
textdrop = textdrop.split("");

var font_size = 10;
var columns = mx.width/font_size; //number of columns for the rain
//an array of rain fall - one drop per column
var rain = [];
//x is the x coordinate
//1 = y co-ordinate of the rain drop
for(var x = 0; x < columns; x++)
	rain[x] = 1; 

//drawing the numbers to the screen
function begin()
{
	
	ctx.fillStyle = "rgba(0, 0, 0, 0.10)"; //black
	ctx.fillRect(0,0, mx.width, mx.height);
	
	ctx.fillStyle = "#7FFF00"; //lime coloured text
	ctx.font = font_size + "px Arial";
	//looping over rain drops
	for(var i = 0; i < rain.length; i++)
	{

    var text = textdrop[Math.floor(Math.random()*textdrop.length)];
		ctx.fillText(text, i*font_size, rain[i]*font_size);
		

		if(rain[i]*font_size > mx.height && Math.random() > 0.975)
			rain[i] = 0;
		
		rain[i]++;
	}
}

setInterval(begin, 24);

//Button onclick function calls
function showHome(){
    window.location="index.html"
}
function showBlog(){
    window.location="Blogs.html"
}
function showECom(){
    window.location="ECOM.html"
}
function showDev(){
    window.location="Devs.html"
}
function showVids(){
    window.location="Vids.html"
}
function showImgs(){
    window.location="Imgs.html"
}
function showArt(){
    window.location="Art.html"
}
function showMus(){
    window.location="Mus.html"
}
function showMed(){
    window.location="Med.html"
}


