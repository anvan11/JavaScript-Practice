
var status = 0;
var time=0;

document.getElementById("output").innerHTML = "0:0:0:0";
console.log("hi");
function startPause(){
	if(status == 0){
		console.log("love");
		document.getElementById("startStop").innerHTML = "Pause";
		status = 1;
		run();
	}else{
		console.log("sweet");
		document.getElementById("startStop").innerHTML = "Stop";
		status = 0;		
	}
}

function reset(){
	console.log("nice");
	time = status = 0;
	document.getElementById("output").innerHTML = "00:00:00:00";
	document.getElementById("startStop").innerHTML = "Start";
}

function run(){
	console.log('run');
	if(status == 1) {
		setTimeout(function(){
		time++;
		var hrs = Math.floor(time/10/60);
		var mins = Math.floor(time/10/60/60);
		var secs = Math.floor(time/10);
		tenths = time%10;
		document.getElementById("output").innerHTML = hrs + ":" + mins + ":" + secs + ":" + tenths;
		run();
		},100);
	}
}
