var hashLetterToColor = function(hashLetter)
{
	switch (hashLetter) {
		case "0":
			return "#25a38d";
		case "1":
			return "#2dc3a9";
		case "2":
			return "#44d4bb";
		case "3":
			return "#64dcc6";
		case "4":
			return "#257ea3";
		case "5":
			return "#2d97c3";
		case "6":
			return "#44aad4";
		case "7":
			return "#64b8dd";
		case "8":
			return "#2c50c4";
		case "9":
			return "#4466d4";
		case "a":
			return "#6480dd";
		case "b":
			return "#849ae4";
		case "c":
			return "#4325a3";	
		case "d":
			return "#502dc3";
		case "e":
			return "#8165db";
		case "f":
			return "#b5a5eb";
	}	
}

var hashToColors = function(hashString)
{
	var colorsArr = [];
	for (var i = 0; i < hashString.length; i++) {
		colorsArr.push(hashLetterToColor(hashString[i]));
	}
	return colorsArr;
}

var arrToMatrix = function(inArr)
{
	var readyMatrix = [];
	for (var i = 0; i < 64; i = i + 8) {
		readyMatrix.push([
			inArr[i],
			inArr[i + 1],
			inArr[i + 2],
			inArr[i + 3],
			inArr[i + 4],
			inArr[i + 5],
			inArr[i + 6],
			inArr[i + 7]
		]);
	}
	return readyMatrix;
}

function getHash()
{
	var textToHash = document.getElementById("textToHash").value;
	var myHash = sha3_256(textToHash);
	var myColouredHash = hashToColors(myHash);
	var myColouredMatrix = arrToMatrix(myColouredHash);
	var c = document.getElementById("myCanvas");

	var ctx = c.getContext("2d");
	var barH = 32; 
	var crX, crY
 
	for (var i = 0; i < myColouredMatrix.length; i++) {
		for (var j = 0; j < myColouredMatrix[0].length; j++) {
			ctx.beginPath();
			crX = i * barH;
			crY = j * barH;
			ctx.rect(crX, crY, barH, barH);
			ctx.fillStyle = myColouredMatrix[i][j];
			ctx.fill();
		}
	}
	
	var w = window.open('about:blank','image from canvas');
	w.document.write("<img src='"+c.toDataURL("image/png")+"' alt='from canvas'/>");
	
}
