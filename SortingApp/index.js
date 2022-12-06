var slider1= document.getElementById('slider1');



slider1.oninput=function(){
    generate();
}
function generate(){


arr=[];//global arr
var i;
for (i=0;i<slider1.value;i++){
    
    var val = Math.floor(Math.random() * (200 - 50 + 1));
    
    arr.push(val);
    
    }
    display_Array();
}
function display_Array(){
    document.getElementById('disp').innerHTML = arr;
}
function display_sortedArray(){
    document.getElementById('disp2').innerHTML = arr;
}
function show(){
    console.log(arr);
}

function pre_sort(n){
    console.log(n);
    typ=n;//this is global variable
    changeColor();
}
function changeColor() {
    document.getElementById('bt').style.background = "green";
}
function changeColorback() {
    document.getElementById('bt').style.background = "white";
}
async function sort(){
    dis();
    changeColorback();
    if(typ==1){        
        selection(arr);
        display_sortedArray();
    }
    else if(typ==2){
        bubble(arr);
        display_sortedArray();
        console.log(arr);
        
    }
    en();
}

async function sleep(ms) {
    return new Promise(result=>setTimeout(result,ms));
  }
//selection sort***********************************************************
function selection(arr){
    dis();
    var n=arr.length;
    var i ;
    var j;
    var temp;
    
    for(i = 0; i < n; i++) {
        let min = i;
        for(j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             temp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = temp;      
        }
    }
    
    en();
}
// bubble sort **********************************************************************
async function bubble(arr){
    dis();
    
    var n=arr.length;
    var i ;
    var j;
    var temp;
    for( i = 0; i <n; i++){
     
        // Last i elements are already in place  
        for(var j = 0; j < (n - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(arr[j] > arr[j+1]){
              
            // If the condition is true then swap them
            var temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j+1] = temp
          }
        }
      }
    en();
    

}

function dis(){
    console.log("Disable");
    document.getElementById("bt1").disabled = true;
    document.getElementById("bt").disabled = true;
    document.getElementById("bt_sort").disabled = true;
    document.getElementById("slider1").disabled = true;
    
}

function en(){
    console.log("enable");
    document.getElementById("bt1").disabled = false;
    document.getElementById("bt").disabled = false;
    document.getElementById("bt_sort").disabled = false;
    document.getElementById("slider1").disabled = false;
}
