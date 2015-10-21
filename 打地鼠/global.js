var index = 0;
var first;
var sec;
var randomLocation1;
var randomLocation2;
var randomLogo1;
var randomLogo2;
var all;
var time=2000;
var curGame;
var logo = ['-17px -13px','-17px -125px','-17px -240px','-19px -358px','-20px -480px','-420px -10px','-422px -112px','-422px -223px','-417px -360px','-415px -480px'];
function init(){
	debugger;
	var btn = document.getElementById("startButton");
    btn.addEventListener("click",showGame);
	
	var introduces = document.getElementById("introduce");
	introduces.addEventListener("click",function(){
    start.style.display = "none";
    help.style.display = "block";
	});
	
	var returns = document.getElementById("return");
	returns.addEventListener("click",function(){
    start.style.display = "block";
    help.style.display = "none";
	});
	
	var out = document.getElementById("out");
	out.addEventListener("click",function(){
		window.close();
	});
	
	var main = document.getElementById("main");
	for(var i=1;i<10;i++){
		var div = document.createElement("div");
        main.appendChild(div);
        div.className = "div"+i;
	}
}
function showGame(){
	setTimeout(function(){
		start.style.display = "none";
    	main.style.display = "block";
    	daojishi.style.display = "block";
	},1000);
	setTimeout(function(){
		daojishi.style.backgroundPosition = "-397px -300px";
	},2000);
	setTimeout(function(){
		daojishi.style.backgroundPosition = "-338px -300px";
	},3000);
	setTimeout(function(){
		daojishi.style.width = "284px";
		daojishi.style.height = "80px";
		daojishi.style.marginLeft = "580px";
		daojishi.style.backgroundPosition = "-19px -300px";
	},4000);
	setTimeout(function(){
		daojishi.style.display = "none";
    	main.style.display = "block";
		score.style.display = "block";
		curGame = setInterval("randomNumber()",2000);
		//setTimeout("nextGame()",20000);
	},5000);
	
}
function randomNumber(){
	debugger;
    randomLocation1 = parseInt(Math.floor(Math.random()*9));
    // randomLocation2 = parseInt(Math.floor(Math.random()*9));
    randomLogo1 = parseInt(Math.floor(Math.random()*5));
    // randomLogo2 = parseInt(Math.floor(Math.random()*5));
    // if(randomLocation1==randomLocation2)
    //     randomLocation2=(randomLocation1==7?randomLocation1-1:randomLocation1+1);
	
    var all = document.getElementById("main");
    var first = all.childNodes[randomLocation1];
    // var sec = all.childNodes[randomLocation2];
    first.style.backgroundPosition= logo[randomLogo1];
    // sec.style.backgroundPosition= logo[randomLogo2];

    first.style.display = "block";
    // sec.style.display = "block";
    first.addEventListener("click",hit1);
    // sec.addEventListener("click",hit2);
    setTimeout(function(){
		first.style.display = "";
        //sec.style.display = "";
	},1500);
}
function hit1(){
	var curMouse = event.srcElement;
    curMouse.style.backgroundPosition= logo[randomLogo1+5];
	if(randomLogo1==0)
		index = parseInt(index+(index*0.2));
	else if(randomLogo1==1)
		index = parseInt(index+100);
	else if(randomLogo1==2)
		index = parseInt(index+500);
	else if(randomLogo1==3)
		index = parseInt(index-100);
	else
		index = parseInt(index/2);
	
	if(index<0)
		index=0;
		
	number.innerHTML=index;
	
	//var score1 = index%10;
	//var score10 =(index%100)/10;
	//var score100 =((index%1000)%100)/10;
    }
// function hit2(){
//     var curMouse = event.srcElement;
//     curMouse.style.backgroundPosition= logo[randomLogo2+5];
//     setTimeout(function(){
//         first.style.display = "";
//         sec.style.display = "";
//     },500);
// }
//function nextGame(){
//	clearInterval(curGame);
//	nextTime.style.display = "block";
//}