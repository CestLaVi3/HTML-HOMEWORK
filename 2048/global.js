var array = [ [0,1,2,3],
			  [4,5,6,7],
			  [8,9,10,11],
			  [12,13,14,15] ];
var objArray = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var i; 
function initTable(){
	/*画16宫格*/
	debugger;
	var tb = document.getElementById("tb");
	var start = document.getElementById("start");
	start.style.display = "none";
	tb.style.display = "block";
	var tbody = document.getElementById("tbody");
	var index = 0;
	for(var a=0;a<4;a++)
	{
		/*创建行*/
		var tr = document.createElement("tr");
		tbody.appendChild(tr);
		for(var b=0;b<4;b++){
			/*创建列，提取列坐标*/
			var arraytd = array[a][b];
			var td = document.createElement("td");
			tr.appendChild(td);
			/*给每个td分配id*/
			td.id="div"+arraytd; 
		}
	}
	for(var id=0;id<16;id++){
		var objId = "div"+id;
		objArray[id] = document.getElementById(objId);
		objArray[id].value="";
	}
	/*获取坐标的随机数*/
	i=Math.floor(Math.random()*16);
	randomLocation(i);
	do{	/*只在第一局随机出现的第二个td*/
		var i0=Math.floor(Math.random()*16);
		randomLocation(i0);
	}while(i==i0)
}
function randomNumber(){
	i=Math.floor(Math.random()*16);
	randomLocation(i);
}
function randomLocation(i){
	/*获取随机value值*/
	var number = (Math.floor(Math.random()*11) < 9 ? 2 : 4);
	var tbody = document.getElementById("tbody");
	if(objArray[i].value==""){
		objArray[i].value = number;
		objArray[i].innerHTML=objArray[i].value;
	}
	else
		randomNumber();
	/*键盘事件触发*/
	window.onkeypress=move;
	numberStyle();
}
function move(){
	/*上移动*/
	if(event.keyCode==119){
		moveUp();
	}
	/*下移动*/
	if(event.keyCode==115){
		moveDown();
	}
	/*左移动*/
	if(event.keyCode==97){
		moveLeft();
	}
	/*右移动*/
	if(event.keyCode==100){
		moveRight();
	}
}
function moveUp(){
	for(var m=0;m<3;m++){
		for(var n=15;n>3;n--){
				if(objArray[n-4].value == ""){
					objArray[n-4].value=objArray[n].value;
					objArray[n].value="";
					objArray[n-4].innerHTML=objArray[n-4].value;
					objArray[n].innerHTML=objArray[n].value;
				}
		}
	}
	for(var n=0;n<12;n++){
		if(objArray[n].value!=""&&objArray[n].value==objArray[n+4].value){
			objArray[n].value=eval(objArray[n].value+'+'+objArray[n].value);
			objArray[n+4].value="";
			objArray[n].innerHTML=objArray[n].value;
			objArray[n+4].innerHTML=objArray[n+4].value;
		}
	}
	for(var m=0;m<3;m++){
		for(var n=15;n>3;n--){
				if(objArray[n-4].value == ""){
					objArray[n-4].value=objArray[n].value;
					objArray[n].value="";
					objArray[n-4].innerHTML=objArray[n-4].value;
					objArray[n].innerHTML=objArray[n].value;
				}
		}
	}
	randomNumber();
}
function moveDown(){
	for(var m=0;m<3;m++){
		for(var n=0;n<12;n++){
				if(objArray[n+4].value == ""){
					objArray[n+4].value=objArray[n].value;
					objArray[n].value="";
					objArray[n+4].innerHTML=objArray[n+4].value;
					objArray[n].innerHTML=objArray[n].value;
				}
		}
	}
	for(var n=15;n>3;n--){
		if(objArray[n].value!=""&&objArray[n].value==objArray[n-4].value){
			objArray[n].value=eval(objArray[n].value+'+'+objArray[n].value);
			objArray[n-4].value="";
			objArray[n].innerHTML=objArray[n].value;
			objArray[n-4].innerHTML=objArray[n-4].value;
		}
	}
	for(var m=0;m<3;m++){
		for(var n=0;n<12;n++){
				if(objArray[n+4].value == ""){
					objArray[n+4].value=objArray[n].value;
					objArray[n].value="";
					objArray[n+4].innerHTML=objArray[n+4].value;
					objArray[n].innerHTML=objArray[n].value;
				}
		}
	}
	randomNumber();
}
function moveLeft(){
	for(var m=0;m<3;m++){
		for(var a=0;a<4;a++){
			for(var b=3;b>0;b--){
				var curId = "div"+array[a][b];
				var curObj = document.getElementById(curId);
				var cmId = "div"+array[a][b-1];
				var cmObj = document.getElementById(cmId);
				if(cmObj.value == ""){
					cmObj.value=curObj.value;
					curObj.value="";
					cmObj.innerHTML=cmObj.value;
					curObj.innerHTML=curObj.value;
				}
			}
		}
	}
	for(var a=0;a<4;a++)
		for(var b=0;b<3;b++){
			var curId = "div"+array[a][b];
			var curObj = document.getElementById(curId);
			var cmId = "div"+array[a][b+1];
			var cmObj = document.getElementById(cmId);
			if(curObj.value!=null&&curObj.value==cmObj.value){
				curObj.value=eval(curObj.value+'+'+curObj.value);
				cmObj.value="";
				curObj.innerHTML=curObj.value;
				cmObj.innerHTML=cmObj.value;
			}
	}
	for(var m=0;m<3;m++){
		for(var a=0;a<4;a++){
			for(var b=3;b>0;b--){
				var curId = "div"+array[a][b];
				var curObj = document.getElementById(curId);
				var cmId = "div"+array[a][b-1];
				var cmObj = document.getElementById(cmId);
				if(cmObj.value == ""){
					cmObj.value=curObj.value;
					curObj.value="";
					cmObj.innerHTML=cmObj.value;
					curObj.innerHTML=curObj.value;
				}
			}
		}
	}
	randomNumber();
}
function moveRight(){
	for(var m=0;m<3;m++){
		for(var a=0;a<4;a++){
			for(var b=0;b<3;b++){
				var curId = "div"+array[a][b];
				var curObj = document.getElementById(curId);
				var cmId = "div"+array[a][b+1];
				var cmObj = document.getElementById(cmId);
				if(cmObj.value == ""){
					cmObj.value=curObj.value;
					curObj.value="";
					cmObj.innerHTML=cmObj.value;
					curObj.innerHTML=curObj.value;
				}
			}
		}
	}
	for(var a=0;a<4;a++)
		for(var b=3;b>0;b--){
			var curId = "div"+array[a][b];
			var curObj = document.getElementById(curId);
			var cmId = "div"+array[a][b-1];
			var cmObj = document.getElementById(cmId);
			if(curObj.value!=""&&curObj.value==cmObj.value){
				curObj.value=eval(curObj.value+'+'+curObj.value);
				cmObj.value="";
				curObj.innerHTML=curObj.value;
				cmObj.innerHTML=cmObj.value;
			}
	}
	for(var m=0;m<3;m++){
		for(var a=0;a<4;a++){
			for(var b=0;b<3;b++){
				var curId = "div"+array[a][b];
				var curObj = document.getElementById(curId);
				var cmId = "div"+array[a][b+1];
				var cmObj = document.getElementById(cmId);
				if(cmObj.value == ""){
					cmObj.value=curObj.value;
					curObj.value="";
					cmObj.innerHTML=cmObj.value;
					curObj.innerHTML=curObj.value;
				}
			}
		}
	}
	randomNumber();
}
function numberStyle(){
	for(var a=0;a<16;a++){
		if(objArray[a].value==""){
			objArray[a].style.background = "#ccc0b2";
		}
		if(objArray[a].value == 2){
			objArray[a].style.color = "#7c736a";
			objArray[a].style.background = "#eee4da";
		}
		if(objArray[a].value == 4){
			objArray[a].style.color = "#7c736a";
			objArray[a].style.background = "#ece0c8";
		}
		if(objArray[a].value == 8){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#f2b179";
		}
		if(objArray[a].value == 16){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#f59563";
		}
		if(objArray[a].value == 32){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#f57c5f";
		}
		if(objArray[a].value == 64){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#f65d3b";
		}
		if(objArray[a].value == 128){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#edce71";
		}
		if(objArray[a].value == 256){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#edcc61";
		}
		if(objArray[a].value == 512){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#ecc850";
		}
		if(objArray[a].value == 1024){
			objArray[a].style.color = "#fff7eb";
			objArray[a].style.background = "#edc53f";
		}
	}
}
