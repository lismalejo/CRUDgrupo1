

function keepls(){
    
let loginCred = JSON.parse(localStorage.getItem("usuarios"))  || [],
    username = document.getElementById('usr').value,
    password = document.getElementById('pswrd').value;

   
    loginCred.push({
      usuario: username,
      contrasena: password
    })

    alert(username+"-"+ password);
    localStorage.setItem("usuarios", JSON.stringify(loginCred));
    if (username=='' || password==''){
        alert('Debe completar los campos con sus credenciales');
    }else{
        if (username!='' && password!='')
        setTimeout(function() {window.location = 'contactlist.html' }); 
    }

}
 

function showcontacts(){
    setTimeout(function() {window.location = 'contactos.html' }); 
}
function editform(){
    setTimeout(function() {window.location = 'editar.html' }); 
}


function keepcontact(){
let contacts = JSON.parse(localStorage.getItem("contactos")) || [],
    contactid = document.getElementById('id').value,
    nombre = document.getElementById('nm').value,
    tel = document.getElementById('tl').value,
    mail = document.getElementById('eml').value;

    contacts.push({
        ID: contactid,
        Nombre: nombre,
        Teléfono: tel,
        Email: mail

    })
    alert('Se han registrado los datos');
    localStorage.setItem("contactos", JSON.stringify(contacts));
    
    
}

function editcontact(i){

    
    /*let contacts = JSON.parse(localStorage.getItem("contactos")) || [];
    contacts[i].contactid= document.getElementById('id2').value;
    contacts[i].Nombre = document.getElementById('nm2').value;
    contacts[i].tel= document.getElementById('tl2').value;
    contacts[i].mail= document.getElementById('eml2').value;

    alert('Se han modificado los datos');
    localStorage.setItem("contactos", JSON.stringify(contacts));
    */
}
//function deletecontact(){
   
//}





function showcontactslist(){
    let contacts = JSON.parse(localStorage.getItem("contactos")) || [];

    for(var i=0; i<contacts.length; i++)
    {
       var row = document.createElement('tr');
           data = document.createElement('td');       
       data.innerText=contacts[i]['ID'];
       row.appendChild(data);


       data = document.createElement('td');
       data.innerText =contacts[i]['Nombre'];
       row.appendChild(data);

       data = document.createElement('td');
       data.innerText =contacts[i]['Teléfono'];
       row.appendChild(data);

       data = document.createElement('td');
       data.innerText =contacts[i]['Email'];
       row.appendChild(data);

       document.getElementById("listuser").appendChild(row);

       data = document.createElement('td');
       btn = document.createElement('button');
       btn.setAttribute('class','btn btn-danger');
       btn.setAttribute('onclick', 'removerow(this)');
       data.appendChild(btn);
       row.appendChild(data);
       document.getElementById("listuser").appendChild(row);  
    }

}

var removerow = function(boton){
row = boton.parentNode.parentNode;
if(confirm('¿Desea eliminar este registro?')){
    row.parentNode.removeChild(row);
    
    let contacts = JSON.parse(localStorage.getItem("contactos")) || [],
    contactid = document.getElementById('id').value,
    nombre = document.getElementById('nm').value,
    tel = document.getElementById('tl').value,
    mail = document.getElementById('eml').value;

    contacts.delete({
        ID: contactid,
        Nombre: nombre,
        Teléfono: tel,
        Email: mail

    })
    alert('Se han borrado los datos');
    localStorage.setItem("contactos", JSON.stringify(contacts));

    /*let contacts = JSON.parse(localStorage.getItem("contactos")) || [];
    contactid = document.getElementById('id').value,
    nombre = document.getElementById('nm').value,
    tel = document.getElementById('tl').value,
    mail = document.getElementById('eml').value;

    for(var i=0; i<contacts.length; i++){
       localStorage.removeItem(contactid).value;
    }
    alert('Se han borrado los datos');
    localStorage.setItem("contactos", JSON.stringify(contacts));
    */
    
}}
function buscador(){
    var entrada = document.getElementById('searchbtn');
    filter = input.value.toUpperCase();
    table = document.getElementById("listuser");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
    }

}






