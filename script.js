function dolime(){
  var t1=document.getElementById("d1");
  t1.style.backgroundColor="lime";
}

function doyellow(){
  var t1=document.getElementById("d1");
  t1.style.backgroundColor="white";
  
  var ctx=t1.getContext("2d");
  ctx.fillStyle="yellow";
  ctx.fillRect(20,10,40,40);
  ctx.fillRect(70,10,40,40);
  ctx.fillStyle= "purple";
  ctx.fillText("HIYA", 10,80);
  ctx.font= "50px Arial";
  
}