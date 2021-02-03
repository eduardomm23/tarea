function myFunction (){
    let myArray = [];
     const a = document.getElementById("a1").value;
     const b = document.getElementById("a2").value;
     const c = document.getElementById("a3").value;
 if (a === "" && b === "" && c === "") {
    alert ("Por favor ingresa la informacion");
 }
 else {
     let resl = {
        name: a,
        apel: b,
        eda: c,
     }
     myArray.push(resl);
    
 const tabl1 = document.createElement("table");
  tabl1.border=1;
  tabl1.width=200;
  tabl1.setAttribute('border', '3');
 
  document.getElementById("result").appendChild(tabl1);
   var tr = document.createElement('TR');
   tabl1.appendChild(tr);
 
   myArray.map((value) => {
    var i 
     for (i=0;i<document.myForm.hm.length;i++){ 
     if (document.myForm.hm[i].checked) 
            break; 
         } 
    var td1 = document.createElement('TD');
    td1.width = '75';
    td1.innerHTML += value.name;
    var td2 = document.createElement('TD');
    td2.width = '75';
    td2.innerHTML += value.apel;
    var td3 = document.createElement('TD');
    td3.width = '75';
    td3.innerHTML += value.eda;
    var td4 = document.createElement('TD');
    td4.width = '75';
    td4.innerHTML += document.myForm.hm[i].value;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3); 
    tr.appendChild(td4);   
      })
 }

}
