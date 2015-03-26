var obj = document.getElementById("demo");
var ctx = obj.getContext("2d");

var grd = ctx.createLinearGradient(0,0,100,100);
grd.addColorStop(0,"yellow");
grd.addColorStop(0.6,"blue");
ctx.fillStyle="red";
ctx.lineStyle = "red";
ctx.strokeStyle = "red";

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(120, 200);
ctx.closePath();
ctx.fillRect(0,0,80,100);
ctx.stroke();
ctx.fill();


ctx.fillStyle="blue";
ctx.strokeStyle = "blue";
ctx.lineStyle = "blue";

ctx.lineWidth=5;
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(380, 300);
ctx.lineTo(340, 310);

ctx.closePath();
ctx.moveTo(270, 18);

ctx.arc(270,18,15,0,Math.PI*2,true);

ctx.stroke();
ctx.fill();

ctx.lineWidth=1;
ctx.font="30px Verdana";
// 创建渐变
var gradient=ctx.createLinearGradient(0,0,200,200);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
// 用渐变进行填充
ctx.strokeStyle=gradient;
ctx.strokeText("Big smile!",300,50);


//var img=new Image()
//img.src="fish.png";
//ctx2.drawImage(img,0,0);

