<style>
    .flex{
        display: flex;
        flex-direction: row;
    }
    .black{
        display:block;
        background-color:black;
        width:50px;
        height:50px;
    }
    .white{
        display:block;
        background-color:whitesmoke;
        width:50px;
        height:50px;
    }
</style>

<div id="placeAfter">

<script type="module">
import {square} from "/Chess/scripts/class.js"

var width = 8;
var height = 8;

var squares = [];

for(let row = 0; row<height;row++){
    var rowElement = document.createElement("div");
    rowElement.setAttribute("class", "flex")
    for(let column = 0;column < width;column++){
        var box = document.createElement("div");
        box.setAttribute("class", String((row+column)%2).replace("0","black").replace("1","white"));
        box.id = String(row)+","+String(column);
        rowElement.appendChild(box);
        squares.push(new square(row,column))
    }
    document.getElementById("placeAfter").insertAdjacentElement("afterend", rowElement);
}
</script>