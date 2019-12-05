let strokeIndex = 0;
let index = 0;
let pic;
let prevX, prevY;

//geri canvas og sæki myndina
function setup() {
	createCanvas(255, 255);
	background(200);
	loadJSON('/cat', gotDrawing);
}

//teiknar myndina eins og hún var teiknuð frá byrjun
function draw(){
	if (pic){
		let x = pic[strokeIndex][0][index];
		let y = pic[strokeIndex][1][index];
		stroke(0);
		strokeWeight(3);
		if (prevX !== undefined) {
			line(prevX, prevY, x, y);	
		}		
		index++;
		if (index >= pic[strokeIndex][0].length){
			strokeIndex++;
			prevX = undefined;
			prevY = undefined;
			index = 0;
			if(strokeIndex === pic.length){
				pic = null;
			}
		}
		else {
		prevX = x;
		prevY = y;
		}
	}

	
}

function gotDrawing(data){
	pic = data.drawing;
	console.log(data);
/*
	let drawing = data.drawing;
	console.log(drawing);
	for(let path of drawing){
		noFill();
		stroke(0);
		strokeWeight(3);
		beginShape();
		for(let i = 0; i < path[0].length; i ++){
			let x = path[0][i];
			let y = path[1][i];
			vertex(x,y);
		}
		endShape();
	}*/
}
