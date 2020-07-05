var node = document.getElementById("div1");
var node1 = document.createElement("ol");
node.append(node1);

function func(){
    var node2 = document.createElement("li");
    var val = document.getElementById("ip1").value;
    node2.append(val);
    node1.append(node2);
}

var node3 = document.createElement('button');
node3.append("Click here !!!");
node3.onclick = function (){
    console.log("Button is clicked");
}


node.append(node3);

