
var num = 0;

var id = setInterval(Animation, 1000);

function  Animation(){
    num += 10;

    if(num == 50){
        clearInterval(id);
    }else{
        var a = document.getElementById("test").style.marginTop = num+"px"; 
    }
}