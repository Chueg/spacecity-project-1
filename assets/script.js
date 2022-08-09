



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var modalBtn = document.getElementById("myBtn");
var exitBtn = document.getElementById("#exitBtn");
var entryBtn = document.getElementById("#entryBtn");

// get inputs
var entryName = document.getElementById("expenseName");
var entryAmount = document.getElementById("expenseCost");

//initial array and content of
var bigList = [];
var item = ['',0];
var itemComparison = ["",0];
var newList = document.getElementById("#bigLunch");

var costComparison = '';
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

function defineItem()
{
    item = [entryName.value,entryAmount.value];
    entryAmount.value = '';
    entryName.value= '';


}


function addToList()
{
    
    if(bigList.length === 0)
    {
        bigList[0] = item;
        console.log(bigList);
        return;
    }

    for(var i = 0;i <bigList.length; i++)
    {
        itemComparison = bigList[i];
        console.log(item[1]);
        console.log(itemComparison[1]);

        if(item[1] >= itemComparison[1])
        {
            bigList.splice(i, 0, item);
            console.log(bigList);
            return;
            
        }
        
        
    }
    if(item[1] < itemComparison[1])
    {
        bigList.push(item);
        console.log(bigList);
    }
    
}

function storeList() 
{
    localStorage.setItem("list", JSON.stringify(bigList));
}

function init() 
{
    
    var storedList = JSON.parse(localStorage.getItem("list"));

    if (storedList !== null) {
      bigList = storedList;
    }
    console.log(bigList);
  }

function makelist()
  {
    for(var i = 0; i<5; i++)
  {
  var li = document.createElement("li");
  var tempVar = bigList[i];
    li.textContent = tempVar[0] + " " + tempVar[1];
    console.log(li);
      newList.appendChild(li);
  }

}






// When the user clicks the button, open the modal 
modalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

entryBtn.onclick = function()
{
    
    defineItem();
    if(item[0].length ==0 || item[1].length == 0 )
    {
        console.log("hoohoo");
        return;
    }
    addToList();
    storeList();



}

exitBtn.onclick = function()
{
    modal.style.display = "none";
    makelist();
}





init();


