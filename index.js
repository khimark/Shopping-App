const root=document.getElementById("root");
const menu=["Home","products","categories","log in","contacts"]
function navBar(menu) {
const nav=document.createElement("nav");
const logo=document.createElement("a");
logo.innerHTML="shopping";
nav.appendChild(logo);
const div=document.createElement("div");
for(item in menu){
    const a=document.createElement("a");
    a.innerHTML=menu[item]+" ";
    div.appendChild(a);
}
nav.appendChild(div);
return nav;
}
root.appendChild(navBar(menu));
