window.onload = function() {
    console.log( moment().format("MMM Do YYYY"));
    var now = moment().format("MMM Do YYYY");
   document.getElementById('dateheader').innerHTML = now;
} 



var timer = setInterval(checktime, 1000)
function checktime() {
   var now = moment()
   var time = document.getElementsByClassName('timecolumn');
   for (var i = 0; i < time.length; i++) {
         var htmlElement = time.item(i);
       var htmlParent = htmlElement.parentElement;
       var timeslot = moment(htmlElement.innerHTML, "hh:mm a");
       
       //if statement calls a function to color coordinate for past present and future
       if (now.hours() == timeslot.hours()) { //equals current time (gray)
       
           //color changing statement 
                       htmlParent.style.backgroundColor = "gray";
       }
       if (now.hours() < timeslot.hours()) { //after current time (green)
           //color changing statement 
                       htmlParent.style.backgroundColor = "green";
       }
       if (now.hours() > timeslot.hours()) { //before current time (red)
           //color changing statement 
           
                       htmlParent.style.backgroundColor = "red";
       }
   }
}
var savebtn = document.getElementsByClassName('savecolumn');

function save(param1) {
	var htmlElement = param1.currentTarget;
  var htmlParent = htmlElement.parentElement;
  var textChild = htmlParent.querySelector('.textcolumn');
  var timeChild = htmlParent.querySelector('.timecolumn');
  var textAreaChild = textChild.children[0];
  var dayplanner = textAreaChild.value;
  var specificDataKey = "myDataKey" + timeChild.innerHTML;
	
  localStorage.setItem(specificDataKey, dayplanner);
  
}

for (var i = 0; i < savebtn.length; i++) {
   var saveitem = savebtn.item(i);
   saveitem.addEventListener("click", save);
}


var myRows = document.getElementsByClassName('timecolumn');
for (var i = 0; i < myRows.length; i++) {
   var timeItem = myRows.item(i);
   var htmlParent = timeItem.parentElement;
  var textChild = htmlParent.querySelector('.textcolumn').children[0];
  var specificDataKey = "myDataKey" + timeItem.innerHTML;
  var data = localStorage.getItem(specificDataKey);
  
  textChild.value = data;
}