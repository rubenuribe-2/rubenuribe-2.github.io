const leftArrow= document.getElementById("left-arrow");
const rightArrow= document.getElementById("right-arrow");
const scrollArea = document.getElementById("project-list");
const projects = document.getElementsByClassName("grid-item");
const scrollPositions=document.getElementsByClassName("project-scroll");

var leftScroll=function(){
  this.disabled=true;
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  scrollArea.scrollLeft-=w*.71;
  setTimeout(()=>{this.disabled=false;},500);
}

var rightScroll=function(){
  this.disabled=true;
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  scrollArea.scrollLeft+=w*.71;
  setTimeout(()=>{this.disabled=false;},500);
  
}

var mouseScroll=function(e){
  scrollArea.removeEventListener('wheel',mouseScroll);
  if (e.deltaX>.025){
    rightScroll();
  }
  else if( e.deltaX<-.025){
    leftScroll();
  }
  setTimeout(()=>{scrollArea.addEventListener('wheel',mouseScroll);},500);
}

scrollArea.addEventListener('wheel',mouseScroll);

leftArrow.addEventListener('click',leftScroll);
rightArrow.addEventListener('click',rightScroll);
