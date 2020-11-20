"use strict";
const url = "http://localhost:8080/counter"; // NOTE NEW URL

function counterCreate() {
    (async () => {
	let counterName = document.getElementById("countername").value;
	let userName = document.getElementById("username").value;
	const newURL = url + "/users/" + userName + "/create?name=" + counterName;
	console.log("counterCreate: fetching " + newURL);
	const resp = await fetch(newURL);
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "101: <b>" + userName + ", " + counterName + " created.</b>";
	} else {
	    document.getElementById("output").innerHTML = "100: " + userName + ", " + counterName + " not found.</b>";
	}
    })();
}

function counterRead() {
    (async () => {
	let counterName = document.getElementById("countername").value;
	let userName = document.getElementById("username").value;
	const newURL = url + "/users/" + userName + "/read?name=" + counterName;
	console.log("counterRead: fetching " + newURL);
	const resp = await fetch(newURL);
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "201: <b>"  + userName + ", " + counterName + " value = " + j['value'] + "</b>";
	} else {
	    document.getElementById("output").innerHTML = "200: " +  userName + ", " + counterName + " not found.</b>";
	}	    
    })();
}

function counterUpdate() {
    (async () => {
	let counterName = document.getElementById("countername").value;
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;

	const newURL = url + "/users/" + userName + "/update?name=" + counterName + "&value=" + counterValue;
	console.log("counterUpdate: fetching " + newURL);
	const resp = await fetch(newURL);
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "301: <b>" + userName + ", " + counterName + " value = " + j['value'] + "</b>";
	} else {
	    document.getElementById("output").innerHTML = "300: " + userName + ", " + counterName + " not found.";
	}	    
    })();
}

function counterDelete() {
    (async () => {
	let counterName = document.getElementById("countername").value;
	let userName = document.getElementById("username").value;
	const newURL = url + "/users/" + userName + "/delete?name=" + counterName;
	console.log("counterDelete: fetching " + newURL);
	const resp = await fetch(newURL);
	const j = await resp.json();
	if (j['result'] !== 'error') {
	    document.getElementById("output").innerHTML = "401: <b>" + userName + ", " + counterName + " deleted.</b>";
	} else {
	    document.getElementById("output").innerHTML = "400: " + userName + ", " + counterName + " not found.</b>";
	}	    
    })();
}

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 20;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
	const maxStudents  = document.getElementById('max-students').innerText;
	const alert = document.getElementById("alert");
	const alert2 = document.getElementById("alert2");
	const name = document.getElementById('exampleFormControlInput1').value;
	const email = document.getElementById('exampleFormControlInput2').value;
	
	if(alert){
		alert.remove();
	}
	if(alert2){
		alert2.remove();
	}
	console.log(count < maxStudents);
	if(count < maxStudents){
		if((name && email)){
			const alert = document.getElementById('namemail');
			const p = document.createElement('div');
			const dis = document.createElement('button');
			p.setAttribute('id','alert')
			p.classList.add('alert');
			p.classList.add('alert-success');
			p.classList.add('alert-dismissable');
			p.classList.add('fade');
			p.classList.add('show');
			p.setAttribute('role', 'alert')
			p.innerHTML = 'Name success!';
			dis.setAttribute('type', 'button');
			dis.classList.add('close');
			dis.setAttribute('data-dismiss', 'alert');
			dis.setAttribute('aria-label', 'Close');
			p.appendChild(dis);
			alert.appendChild(p);
			count++;
		} else {
			const alert = document.getElementById('namemail');
			const p = document.createElement('div');
			const dis = document.createElement('button');
			p.setAttribute('id','alert')
			p.classList.add('alert');
			p.classList.add('alert-danger');
			p.classList.add('alert-dismissable');
			p.classList.add('fade');
			p.classList.add('show');
			p.setAttribute('role', 'alert')
			p.innerHTML = 'Please enter name or email';
			dis.setAttribute('type', 'button');
			dis.classList.add('close');
			dis.setAttribute('data-dismiss', 'alert');
			dis.setAttribute('aria-label', 'Close');
			p.appendChild(dis);
			alert.appendChild(p);
		}
		const alert = document.getElementById('theForm');
		const p = document.createElement('div');
		const dis = document.createElement('button');
		p.setAttribute('id','alert2')
		p.classList.add('alert');
		p.classList.add('alert-success');
		p.classList.add('alert-dismissable');
		p.classList.add('fade');
		p.classList.add('show');
		p.setAttribute('role', 'alert2')
		p.innerHTML = 'Great success!';
		dis.setAttribute('type', 'button');
		dis.classList.add('close');
		dis.setAttribute('data-dismiss', 'alert');
		dis.setAttribute('aria-label', 'Close');
		p.appendChild(dis);
		alert.appendChild(p);
		updateDisplay();
	} else {
		const alert = document.getElementById('theForm');
		const p = document.createElement('div');
		const dis = document.createElement('button');
		p.setAttribute('id','alert')
		p.classList.add('alert');
		p.classList.add('alert-danger');
		p.classList.add('alert-dismissable');
		p.classList.add('fade');
		p.classList.add('show');
		p.setAttribute('role', 'alert2')
		p.innerHTML = 'Sorry, there are too many students currently in this area. Please try again later.';
		dis.setAttribute('type', 'button');
		dis.classList.add('close');
		dis.setAttribute('data-dismiss', 'alert');
		dis.setAttribute('aria-label', 'Close');
		p.appendChild(dis);
		alert.appendChild(p);
		updateDisplay();
	}
    
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    document.getElementById("counter-display").innerHTML = "count:" + count;
};
