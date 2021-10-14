let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked add row")
    //finds id of table
    var table = document.getElementById("grid");
    //Creates first element in the table
    if(numRows==0){
        var row = table.insertRow(0);
        var cell1 = row.insertCell();
        numCols++;
    }
    //Every case after the first one
    else{
        var row = table.insertRow(-1);
        //loops through to create all current columns in the row
        for(let i=0; i< numCols;i++){
            var cell1 = row.insertCell(i);
        }
    }
    //test
    //cell1.innerHTML = numRows.toString();
    numRows++;
}
//Add a column
function addC() {
    alert("Clicked add Column")
    if(numRows==0){
        var row = table.insertRow(0);
        var cell1 = row.insertCell();
        numCols++;
    }
    //loops through the number of rows to create the column
    for(let i =0; i < numRows;i++){
        //This references the 
        var col = document.getElementById("grid").rows[i];
        var x = col.insertCell(-1);
        //x.innerHTML = "new cell";
    }
    numCols++;
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
    //References grid
    var rrow = document.getElementById("grid");
    //Deletes the most recent row from the grid
    rrow.deleteRow(-1);
    numRows--;
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
    var rcol = document.getElementById("grid");
    //References all the rows in grid
    var row = rcol.rows;
    //loop and deletes the most recent column
    for(let i=0;i< numRows;i++){
        row[i].deleteCell(-1);
    }
    numCols--;
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