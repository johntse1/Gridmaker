let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked add row")
    var table = document.getElementById("grid");
    //Creates first element in the table
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    alert(numRows)
    //Loops through the number of columns to add rows
    for(let i =0; i < numCols;i++){
        var cell1 = row.insertCell();
    }
    cell1.innerHTML = numRows.toString();
    numRows++;
}
//Add a column
function addC() {
    alert("Clicked add Column")
    var table = document.getElementById("grid");
    //first element in table
    var col = table.insertRow(0);
    var cell2 = col.insertCell(0);
    for(let i=0;i< numRows;i++){
        var cell2 = col[i].insertCell();
    }
    cell2.innerHTML = numCols.toString();
    numCols++;
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}