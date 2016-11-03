/**
 * Created by Boris on 02-Nov-16.
 */
window.onload = function () {
    for (let i = 0; i < 12; i++){
        var inp = document.createElement("input");
        inp.type = "number";
        inp.style.display = "block";
        if (i == 3 || i == 9){
            inp.max = 180;
            inp.min = -180;
        } else if(i == 0 || i == 5){
            inp.max = 90;
            inp.min = -90;
        } else {
            inp.max = 59;
            inp.min = 0;
        }
        inp.value = 0;
        document.body.appendChild(inp);
    }

    var bChildren = document.getElementById("first").children;
    for (let i = 0; i < bChildren.length; i++){
        console.log(bChildren[i]);
    }
};