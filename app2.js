var node1 = document.createElement('div');
var node2 = document.createTextNode('Hello world');
var node3 = document.createTextNode('Hello world2');
var str = "Hello world3";
node1.append(str);
node1.append(str);
node1.id = "div2";
node1.className = "container"

var node = document.getElementById('div1');
node.append(node1);