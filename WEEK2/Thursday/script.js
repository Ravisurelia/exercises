(function (){
    //step1 for making a traingle
    var canvas = document.getElementById("canvas");
    //console.log("canvas", canavas);
    // setting the context that we want to draw
    var ctx = canvas.getContext("2d");
    console.log("ctx:", ctx);

    //step2
    ctx.beginPath();

    //step3
    //ctx.strokeStyle = "brown";
    ctx.lineWidth = 5;

    //step4
    ctx.moveTo(150,150);

    //step5
    ctx.lineTo(450,450);
    ctx.lineTo(150,450);
    ctx.lineTo(150,150);

    //step6
    ctx.closePath();

    //step7
    //ctx.stroke();

    //step8 fill the traingle
    //ctx.fillStyle = "orange";
    //ctx.fill();


    /////////////////////////////////draw a circle
    //ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(300, 100, 50, 0, 2 * Math.PI);
    // arc method takes four arguments (x, y, radius, startAngle, endAngle)
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();

    //making body for stickman
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(300,100);
    ctx.lineTo(300,400);
    ctx.closePath();
    ctx.stroke();

    //Making legs 1-Right 2-left
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(300,400);
    ctx.lineTo(150,500);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(300,400);
    ctx.lineTo(450,500);
    ctx.closePath();
    ctx.stroke();

    //Making hands 1-right 2-left
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(300,250);
    ctx.lineTo(150,150);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.moveTo(300,250);
    ctx.lineTo(450,150);
    ctx.closePath();
    ctx.stroke();

})();
