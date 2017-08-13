var image = [
	"draw_13.jpg",
	"draw_12.jpg",
	"draw_11.jpg",
	"draw_10.jpg",
	"draw_9.jpg",
	"draw_8.jpg",
	"draw_7.jpg",
	"draw_6.jpg",
	"draw_5.jpg",
	"draw_4.jpg",
	"draw_3.jpg",
	"draw_2.jpg",
	"draw_1.jpg",
];

document.addEventListener ("DOMContentLoaded",
	function (event) {
	
	console.log("this is working");

	loadImage();
});

function loadImage () {
	var columns = document.getElementsByClassName("column");
	var columnNum = columns.length;
	var putInNum = 0;

	console.log("Number of Images: " + image.length);
	console.log("Number of Columns: " + columns.length)

	for(var i = 0; i < image.length; i++){
		var newImg = document.createElement("img");
		newImg.className = "image";
		newImg.src = "./image/" + image[i];

		columns[putInNum].appendChild(newImg);

		putInNum++;

		if(putInNum > columnNum -1){
			putInNum = 0;
		}
		
	}

}