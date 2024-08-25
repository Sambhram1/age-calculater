function calc(){
    const ele = document.querySelector("input");
    const elt = new Date(ele.value);
    let nst = new Date()
    let yage = nst.getFullYear() - elt.getFullYear();
    let ymonth =nst.getMonth() - elt.getMonth();
    let ydate =nst.getDate() - elt.getDate();
    const p1 = document.createElement("div");
   
    p1.innerHTML="You are "+yage +"  years"+ ymonth+"  months"+ydate+"  days old"
    ele.parentNode.appendChild(p1);
    
}
