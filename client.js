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
let maxStudents  = document.getElementById('max-students').innerText;

let count = 10;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
	if(count < maxStudents){
		count++;
		updateDisplay();
	} else {
		count++;
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
