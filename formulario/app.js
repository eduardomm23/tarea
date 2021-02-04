function myFunction (){
    const rray = [
        {
            name: 'car 1',
            price: 20000
        },
        {
            name: 'car 2',
            price: 4000
        },
        {
            name: 'car 3',
            price: 100000
        }
    ];  
    
    const tabl1 = document.createElement("table");
    tabl1.border=1;
    tabl1.width=200;
    tabl1.setAttribute('border', '3');
 
    document.getElementById("tabla").appendChild(tabl1);
   
    rray.map((value) => {
    var tr = document.createElement('TR');
    tabl1.appendChild(tr);
    var td1 = document.createElement('TD');
    td1.width = '75';
    td1.innerHTML += value.name;
    var td2 = document.createElement('TD');
    td2.width = '75';
    td2.innerHTML += value.price;
        
    tr.appendChild(td1);
    tr.appendChild(td2);
  
      })

    
    let TotalSu = rray.reduce((acc,el) => acc+el.price,0)   
    const p = document.createElement("p");
    p.innerHTML+=TotalSu;
    document.getElementById("result").appendChild(p);
  
 }
