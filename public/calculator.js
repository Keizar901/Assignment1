function getPercent(a){
	t = a.id;
	var x;
	if(t.charAt(6)=="1")
	{
		t = t.slice(0,-1);
		t = t + 2;
		x = document.getElementById(a.id).value/document.getElementById(t).value;
	if(isNaN((parseInt(document.getElementById(a.id).value)))||
		isNaN((parseInt(document.getElementById(t).value)))){
		x = "Incomplete Input";
	}

	}else{
		t = t.slice(0,-1);
		t = t + 1;
		x = document.getElementById(t).value/document.getElementById(a.id).value;
	if(isNaN((parseInt(document.getElementById(t).value)))||
		isNaN((parseInt(document.getElementById(a.id).value)))){
		x = "Incomplete Input";
	}

	}
	document.getElementById("output"+a.id.charAt(5)).innerHTML = x;

}

function getMean(){
	
var nums = [];
for(i = 0; i < (document.getElementById("table").rows.length - 1); i++){
	var x = parseFloat(document.getElementById("output"+(i+1)).innerHTML);
	nums.push(x);
}

var count = 0;
var meanArr = 0;
for(i = 0;i<nums.length;i++){
	if(!isNaN(nums[i])){
		count++;
		meanArr += nums[i];
	}
}

document.getElementById("results").innerHTML = (meanArr/count)*100 + "/100";
}


function getWeight(){

var weights = [];
var nums = [];
for(i = 0; i < (document.getElementById("table").rows.length - 1); i++){
	weights.push(parseFloat(document.getElementById("weight"+(i+1)).value));
	nums.push(parseFloat(document.getElementById("output"+(i+1)).innerHTML));

}


var total = 0;
var totalWeights = 0;

for(i = 0;i<weights.length;i++)
{

	if(isNaN(weights[i])&&!isNaN(nums[i])){
		alert("Blank Weights Omitted");
	}else if(isNaN(weights[i])&&isNaN(nums[i])){
		continue;
	}else{
		totalWeights += weights[i];
		total+= nums[i]*weights[i];
	}
}

document.getElementById("results").innerHTML = (total/totalWeights)*100 + "/100";


}


function createRow() {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell5.id = "output" + (table.rows.length -1);

    cell1.innerHTML = "Activity " + (table.rows.length - 1);
    cell2.innerHTML = "A" + (table.rows.length - 1);
    var text = document.createElement("input");
    text.type = "text";
    text.size = 10;
    text.style = "font-size:16pt;";
    text.id = "weight"+(table.rows.length - 1);
    var text2 = document.createElement("input");
    text2.type = "text";
    text2.size = 10;
    text2.style = "font-size:16pt;";
    text2.id = "grade"+(table.rows.length - 1)+1;

    var text3 = document.createElement("input");
    text3.type = "text";
    text3.size = 10;
    text3.style = "font-size:16pt;";
    text3.id = "grade"+(table.rows.length - 1)+2;


    cell3.appendChild(text);
    cell4.appendChild(text2);
    var b = document.createElement("br");
    var t = document.createTextNode("/");
    cell4.appendChild(t);
    cell4.appendChild(b);
    cell4.appendChild(text3);
    text2.onchange = function() {getPercent(text2)};
    text3.onchange = function() {getPercent(text3)};

}

function deleteRow() {
    document.getElementById("table").deleteRow(-1);

}











