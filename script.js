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
        cell1.onclick=function(){
            this.style.backgroundColor = colorSelected;
        }
        numCols++;
    }
    //Every case after the first one
    else{
        var row = table.insertRow(-1);
        //loops through to create all current columns in the row
        for(let i=0; i< numCols;i++){
            var cell1 = row.insertCell(i);
            cell1.onclick=function(){
                this.style.backgroundColor = colorSelected;
            }
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
        cell1.onclick=function(){
            this.style.backgroundColor = colorSelected;
        }
        numCols++;
    }
    //loops through the number of rows to create the column
    for(let i =0; i < numRows;i++){
        //This references the 
        var col = document.getElementById("grid").rows[i];
        var x = col.insertCell(-1);
        x.onclick=function(){
            this.style.backgroundColor = colorSelected;
        }
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
    //selects the cells within the table
    var table = document.querySelectorAll("td");
    //loops through the table for each cell there is and sets it to the colorselected
    table.forEach(function (cell){
        cell.style.backgroundColor=colorSelected;
    });
}

function clearAll(){
    alert("Clicked Clear All")
    var table = document.querySelectorAll("td");
    table.forEach(function (cell){
        //sets all background colors to white
        cell.style.backgroundColor="white";
    });
}

function fillU(){
    alert("Clicked Fill All Uncolored")
    var table = document.querySelectorAll("td");
    table.forEach(function (cell){
        //since the clear all set the background to white, checks for both empty and white
        if(cell.style.backgroundColor==""|| cell.style.backgroundColor=="white"){
            cell.style.backgroundColor=colorSelected;
        }
    });
}


