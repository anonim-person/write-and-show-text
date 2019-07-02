function on(){
    var n = document.getElementById("inner").value;
    var p = document.getElementById("non");
    var node = document.createElement("p");       
    var textnode = document.createTextNode(n);
    if(n == ""){
        alert("Te rog scrie ceva...");
    }else{
        node.appendChild(textnode);                             
        p.appendChild(node);   
    }
    window.scrollTo(0,document.body.scrollHeight);
}
function red(){
    var a = document.getElementById('non');
    a.style.color = "red";
}
function blue(){
    var a = document.getElementById('non');
    a.style.color = "blue";
}
function green(){
    var a = document.getElementById('non');
    a.style.color = "green";
}
function maro(){
    var a = document.getElementById('non');
    a.style.color = "brown";
}
function yellow(){
    var a = document.getElementById('non');
    a.style.color = "yellow";
}
function pink(){
    var a = document.getElementById('non');
    a.style.color = "pink";
}
function black(){
    var a = document.getElementById('non');
    a.style.color = "black";
}
function purple(){
    document.body.style.background = "purple";
}
function grey(){
    document.body.style.background = "grey";
}
function white(){
    document.body.style.background = "white";
}
function orange(){
    document.body.style.background = "orange";
}
function beige(){
    document.body.style.background = "beige";
}
function golden(){
    document.body.style.background = "goldenrod";
}
function amethyst(){
    document.body.style.background = "rgb(59, 134, 156)";
}
function bacs(){
    var a = Math.floor(Math.random() * 250);
    var b = Math.floor(Math.random() * 250);
    var c = Math.floor(Math.random() * 250);
    document.body.style.background = "rgb(" + a + "," + b + "," + c + ")";
}