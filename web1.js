alert("Proceed to Sudoku");
var correct = "1,2,3,4,5,6,7,8,9";
var valid1=true;
var valid2=true;
function checkRows (array) {
  //var valid = true;
  array.forEach(function(row) {
	  var row1=new Array();
	  row1=row;
	  row1=row1.sort().toString();
    if (row1!= correct) {
      valid1 = false;
	  return(valid1);
    }
  });
  return valid1
}

function checkCols (array) {
	var newarr=[[]];
	newarr.pop();//coz length is 9
	for(var x=0;x<array.length;x++)
	{
		var arr1=[];
		for(var y=0;y<array.length;y++)
		{
			arr1.push(array[y][x]);
		}	
		newarr.push(arr1);
	}
	console.log(newarr);
	valid2=true;
	newarr.forEach(function(row) {
	  var row2=new Array();
	  row2=row;
	  row2=row2.sort().toString();
    if (row2!= correct) {
      valid2 = false;
	  return(valid2);
    }
  });
  return valid2
	
}

function checkSudoku (array) {
  return (checkRows(JSON.parse(JSON.stringify(array))) && checkCols((JSON.parse(JSON.stringify(array)))));
}

var correctArray = [
  [5,1,9,6,2,3,8,4,7],
  [6,8,4,9,1,7,5,2,3],
  [7,2,3,5,8,4,9,0,1],
  [3,9,6,7,4,8,1,5,2],
  [4,7,1,2,5,6,3,9,8],
  [8,5,2,1,3,9,6,7,4],
  [9,6,8,3,7,2,4,1,5],
  [2,4,5,8,6,1,7,3,9],
  [1,3,7,4,9,5,2,8,6]
];
//JAVA SCRIPT OBJECT NOTATION
document.write(checkRows(JSON.parse(JSON.stringify(correctArray))));
document.write(checkCols(JSON.parse(JSON.stringify(correctArray))));
document.write(checkSudoku(JSON.parse(JSON.stringify(correctArray))));

