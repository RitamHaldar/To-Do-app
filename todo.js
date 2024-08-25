let btn=document.querySelector("button");
let inp=document.querySelector("input");
let list=document.querySelector("ul")
btn.addEventListener("click",()=>{
    let a=document.createElement("li");
    a.innerText=inp.value;
    list.appendChild(a);
    inp.value="";
    let del=document.createElement("button");
    del.innerText="Delete";
    del.classList.add("delete");
    a.appendChild(del);
});
list.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
    let b=event.target.parentElement;
    b.remove();
    }
})

