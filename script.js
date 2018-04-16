var btn = document.getElementById("myButton");

function createGrid(x,y){
	for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < y; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(900/x);
    $(".grid").height(500/y);
}

function clearGrid(){
    $(".grid").remove();
}

function createCustomGrid(){
	
	var nr1= document.getElementById("number1").value;
	var nr2= document.getElementById("number2").value;
	// var convertNr1= Number(nr1);
	// var convertNr2= Number(nr2);
    clearGrid();
    createGrid(nr1,nr2);
}

$(document).ready(function() {
	//create a default grid
    createGrid(5,5);
    
    $(".grid").click(function() {
    	 var color = document.getElementById("color").value;
        $(this).css({background:color});
     });

    $(btn).click(function() {
        createCustomGrid();
        $(".grid").click(function() {
        	 var color = document.getElementById("color").value;
        	$(this).css({background: color});

        });

    });
});
 
