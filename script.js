function on(){
    var n = document.getElementById("inner").value;
    var p = document.getElementById("non");
    var node = document.createElement("p");       
    var textnode = document.createTextNode(n);
    node.appendChild(textnode);                             
    p.appendChild(node);   
    window.scrollTo(0,document.body.scrollHeight);
}
function red(){
    var a = document.getElementById('non');
    document.body.style.background = "purple";
    a.style.color = "red";
}
function blue(){
    var a = document.getElementById('non');
    document.body.style.background = "yellow";
    a.style.color = "blue";
}
function green(){
    var a = document.getElementById('non');
    document.body.style.background = "lightblue";
    a.style.color = "green";
}
function maro(){
    var a = document.getElementById('non');
    a.style.color = "brown";
    document.body.style.background = "pink";
}
function yellow(){
    var a = document.getElementById('non');
    a.style.color = "yellow";
    document.body.style.background = "green";
}
function pink(){
    var a = document.getElementById('non');
    a.style.color = "pink";
    document.body.style.background = "red";
}
function black(){
    var a = document.getElementById('non');
    a.style.color = "black";
    document.body.style.background = "grey";
}