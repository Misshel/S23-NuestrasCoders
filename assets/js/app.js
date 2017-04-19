var coder=[ '','Daguiana Revolledo','Jenny Velasquez','Nadia Cuadros', 'Michelle More', 'Marilu Llamoca', 'Wendy Reyes']

var body= document.getElementsByTagName("BODY")[0];
var title= document.createElement("h1");
title.innerText="Nuestras Coders";

body.appendChild(title);
var linea=document.createElement("hr");


body.appendChild(linea);

for(var i=1;i<coder.length;i++){

  var div=document.createElement("div");
  var imagen= document.createElement("img");
  var namecoder= document.createElement("span");
  imagen.setAttribute("src","assets/image/"+ i +".png");
  namecoder.innerHTML=coder[i];
  imagen.setAttribute("class","foto");
  div.setAttribute("class","imagen");
  namecoder.setAttribute("class","text");
  div.appendChild(imagen);
  div.appendChild(namecoder);
  body.appendChild(div);
}
