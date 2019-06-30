function on(){
    var n = document.getElementById("inner").value;
    var p = document.getElementById("non");
    var node = document.createElement("p");       
    var textnode = document.createTextNode(n);
    node.appendChild(textnode);                             
    p.appendChild(node);   
    window.scrollTo(0,document.body.scrollHeight);
}