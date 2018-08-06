
var count = 0;
function pushTask(){

	var newElement = document.createElement('li');
	var task = document.getElementById('todo-list').value;
	newElement.textContent = task;
	newElement.setAttribute('id', '' + count);
	newElement.setAttribute('onClick', 'finishedTask(' + count + ')');

	var list = document.getElementById('unfinished-list');
	list.appendChild(newElement);
	document.getElementById("todo-list").value= '';
	count++;
}

function finishedTask(num){
	var newElement2 = document.createElement('li');
	var task2 = document.getElementById('' + num).textContent;
	newElement2.textContent = task2;

	var list2 = document.getElementById('finished-list');
	list2.appendChild(newElement2);
	document.getElementById(''+num).style.display= 'none';
}