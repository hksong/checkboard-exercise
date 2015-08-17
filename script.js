// Each tile should be a div
// Each tile's width is 11.1%
// Set each tile's float property to left
// Each tile's paddingBottom is 11.1%
// 7 rows x 9 columns

window.onload = start;
var numOfRows = 9;
var numOfCols = 9;
var divs = [];
var divRows = [];

function start() {
	createNewRowsDiv(numOfRows);
	createNewDivs(numOfRows, numOfCols, "even", "odd");
	placeDivs(numOfRows, numOfCols);
	styleDivs("even", "odd", "black", "red");
}

// creates a matrix of divs with alternating cls0/cls1 classes
function createNewDivs(rows, cols, cls0, cls1) {
	for (var i = 0; i < rows; i++) {
		var row = [];
		for (var j = 0; j < cols; j++) {
			row.push(document.createElement("div"));
			if ((i+j) % 2 === 0) {
				row[j].classList.add(cls0);
			}
			else {
				row[j].classList.add(cls1);
			}
		}
		divs.push(row);
	}
}

function createNewRowsDiv(rows) {
	for (var i = 0; i < rows; i++) {
		divRows.push(document.createElement("div"));
		divRows[i].classList.add("rows");
	}
}

function placeDivs(rows, cols) {
	var body = document.querySelector("body");
	for (var i = 0; i < rows; i++) {
		var row = divRows[i];
		body.appendChild(row);
		for (var j = 0; j < cols; j++) {
			row.appendChild(divs[i][j]);
		}
	}
}

function styleDivs(cls0, cls1, clr0, clr1) {
	var evens = document.getElementsByClassName(cls0);
	var odds = document.getElementsByClassName(cls1);
	var upper = odds.length;

	styleDiv(evens[0], randColor());
	for (var i = 0; i < upper; i++) {
		styleDiv(evens[i+1], randColor());
		styleDiv(odds[i], randColor());
	}

}

function styleDiv(div, color) {
	div.style.float = "left";
	div.style.width = "11.1%";
	div.style.paddingBottom = "11.1%";
	div.style.backgroundColor = color;
}

function randColor() {
	var r, g, b;
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return `rgb(${r},${g},${b})`;
}