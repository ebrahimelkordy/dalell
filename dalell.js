let mg1=document.getElementsByClassName("mg1");
let mg2=document.getElementsByClassName("mg2");
let mg3=document.getElementsByClassName("mg3");
let mg4=document.getElementsByClassName("mg4");
let mg5=document.getElementsByClassName("mg5");
let mg6=document.getElementsByClassName("mg6");
let mg7=document.getElementsByClassName("mg7");
let dalell=document.querySelector(".dalell");
window.onscroll=function(){
    let value=scrollY;
    mg1[0].style.left = value*.5+"px";
    mg2[0].style.top = value*3+"px";
    mg6[0].style.left = value*2+"px";
    mg3[0].style.top = value*2+"px";
    mg4[0].style.top = value*1.5+"px";
    mg5[0].style.top = value*1+"px";
    mg6[0].style.top = value*3+"px";
    dalell.style.fontSize = value+"px";
if(scrollY>67){
    dalell.style.fontSize=67+"px";
    dalell.style.position="fixed";
    if(scrollY>=478){
        dalell.style.display="none";
    }
    else{
        dalell.style.display="block";
    }
}
if(scrollY>=187){
    document.querySelector("body").style.background="linear-gradient(#376281,#10001f)";
} else {
    document.querySelector("body").style.background="linear-gradient( rgb(26, 8, 23) 0%,rgb(11, 2, 2) 50%, rgb(26, 8, 23) 100% )";
    document.querySelector("body").style.transition="1s";
}

}
