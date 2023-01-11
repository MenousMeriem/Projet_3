
// Navbar

var tabbuttons = document.querySelectorAll(".Tabcontainer .Buttoncontainer button");
var tabpanels = document.querySelectorAll(".Tabcontainer .Tabpanel");

function showPanel(panelIndex,colorCode) {
    tabbuttons.forEach((Element) => {
       Element.style.backgroundColor="white" ; 
       Element.style.color = "black" ; 
    }) ; 
  
    tabbuttons[panelIndex].style.backgroundColor=colorCode;
    tabbuttons[panelIndex].style.color="white";
    tabpanels.forEach((Element)=>{
       Element.style.display="none";
    });
     
    tabpanels[panelIndex].style.display="block";
    tabpanels[panelIndex].style.backgroundColor="white";

}




