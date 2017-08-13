var image = [
	"lettering_2.jpg",
	"lettering_3.jpg"
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