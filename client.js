let count = 0;

$( document ).ready( function(){
    $( "#newDivButton" ).on( 'click', function() {
      console.log( 'in newDivButton on click' );
      //get user inputs
      // create a new div
      div = document.createElement("div");
      $(div).addClass("inner").html();
      $("#container").append(div);
      
      addCount();
        }); // end add new function
});

function addCount() {
    let para = document.createElement("P");
        let txt = document.createTextNode("this is the number count");
        para.appendChild(txt);
        document.getElementById("container");
}

function addSwap() {
    let swapButton = document.createElement("Swap");
    swapButton.setAttribute('type', 'button');
    swapButton.addClass("colorSwap");
        
}
function addColor() {
    let newDivColor = document.getElementById("container");
    container.style.backgroundColor = "red";
    $(swapButton).on( 'click', container.style.backgroundColor = "yellow");
}