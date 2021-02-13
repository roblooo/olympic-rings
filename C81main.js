canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="yellow";

ctx.beginPath();
ctx.strokeStyle="blue"
ctx.lineWidth=5
ctx.arc(270,250,50,0,360);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="black"
ctx.lineWidth=5
ctx.arc(380,250,50,0,360);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="red"
ctx.lineWidth=5
ctx.arc(490,250,50,0,360);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="yellow"
ctx.lineWidth=5
ctx.arc(325,310,50,0,360);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.arc(445,310,50,0,360);
ctx.stroke()
