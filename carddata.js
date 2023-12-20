// function allmenu(){

//     const http= new XMLHttpRequest();
//     http.open("GET","https://odd-ruby-chipmunk-kilt.cyclic.app/selectmenu");
//     http.send();
//     http.onreadystatechange=function(){
//         if(this.status !="[]"){
//             objects = JSON.parse(this.responseText);
//             var dataStore ='';
//         for(let object of objects){
//             // dataStore += '<div class="col-3">';
//             // dataStore +='<div class="card text-white bg-primary mb-3">';
//             // dataStore +='<div class="card-body">';
//             // dataStore +='<p align="center"><img width="80%" height="100%" border-radius="50px" src="'+["https://weareproject.000webhostapp.com/login/avatar/"]+object["imgmenu"]+'"class="avatar"></p>';
//             //dataStore +='<p><strong>Name:</strong>'+object['namemenu']+'</p>';
//             //dataStore +='<span><strong>Price:</strong>'+object['price']+'</span>';
//             //dataStore +='<p><span><Button class="btn-danger" onclick="deletemenu('+object['id']+')">Deletemenu</Button></span></p>';
//             // dataStore +='</div>';
            
//             // dataStore +='</div>';
//             // console.log(object);

//             // dataStore +='</div>';

//             dataStore +=`
            
//             <div class="row row-cols-1 row-cols-md-3 g-4">
//             <div class="col">
//                     <div class="card">
//                     <img width="50px" border-radius="50px" src="${["https://weareproject.000webhostapp.com/login/avatar/"]+object["imgmenu"]}"class="img1">
//                         <div class="card-body">
//                         <div class="intro">

//                             <h1>${object["namemenu"]}</h1>
//                             <p>The<span>FIFA</span> internationale de football association French for 'International Association Football Federation';[3] abbreviated as FIFA and pronounced in English as</p>
//                         </div>
                        
//                     </div>
    
//             </div>
//          </div>
//          </div>

//    `;
   

//         }

//     }
    
//         document.getElementById("allList").innerHTML=dataStore;

//         // document.getElementById("indexdata").innerHTML=dataStore;
//     }
 
// }
// allmenu()
function alluser(){

    const http= new XMLHttpRequest();
    http.open("GET","https://good-cyan-reindeer-ring.cyclic.cloud/selectusergis");
    http.send();
    http.onreadystatechange=function(){
        if(this.status !="[]"){
           let object1= JSON.parse(this.responseText);
            var dataStore2='';
             var i=1;
        for(let object2 of object1){
            // dataStore += '<div class="col-3">';
            // dataStore +='<div class="card text-white bg-primary mb-3">';
            // dataStore +='<div class="card-body">';
            // dataStore +='<p align="center"><img width="80%" height="100%" border-radius="50px" src="'+["https://weareproject.000webhostapp.com/login/avatar/"]+object["imgmenu"]+'"class="avatar"></p>';
            //dataStore +='<p><strong>Name:</strong>'+object['namemenu']+'</p>';
            //dataStore +='<span><strong>Price:</strong>'+object['price']+'</span>';
            //dataStore +='<p><span><Button class="btn-danger" onclick="deletemenu('+object['id']+')">Deletemenu</Button></span></p>';
            // dataStore +='</div>';
            
            // dataStore +='</div>';
            // console.log(object);

            // dataStore +='</div>';

            dataStore2 +=`
            
          <tr>
          <td>${object2["id_user"]}</td>
          <td>${object2["name"]}</td>
          <td>${object2["email"]}</td>
          <td>${object2["tel"]}</td>
          <td>


          <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-success" onclick="checkpass(${object2['id_user']})">Pass</button>
          <button type="button" class="btn btn-danger" onclick="deleteuser(${object2['id_user']})">Delete</button>
        </div>  
         
          </td>
          </tr>

   `;
   

        }

    }
    
        document.getElementById("tableuser").innerHTML=dataStore2;

        // document.getElementById("indexdata").innerHTML=dataStore;
    }
 
}
alluser();





function deleteuser(object){
    console.log(object)
    const http= new XMLHttpRequest();
    http.open("GET","https://good-cyan-reindeer-ring.cyclic.cloud/deleteuser/"+object);
    http.send();     
}




function checkpass(object){
    console.log(object)
    const http= new XMLHttpRequest();
    http.open("GET","https://good-cyan-reindeer-ring.cyclic.cloud/checkpass/"+object);
    http.send();     
}



// function insertdata(){
   

//     const email=document.getElementById('email').value;
//     const pass=document.getElementById('pass').value;
//     const name2=document.getElementById('name2').value;
//     const tel=document.getElementById('tel').value;
    
//     // console.log(email);
//     // console.log(pass);
//     // console.log(name2);
//     // console.log(tel);
//     var testmail= /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
//     console.log(testmail);
//     if(testmail.test(email)){
//         console.log("ok");
//     }
//     else{
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'please use true email',
//             // footer: '<a href="">Why do I have this issue?</a>'
//         })
//     }
//     const http= new XMLHttpRequest();
//     http.open("GET","https://lavender-blackbuck-gear.cyclic.app/insertuser/"+email+"/"+pass+"/"+name2+"/"+tel+"/"+"Defualt");
//     http.send();
//     http.onreadystatechange=function(){
  
//     }
// }



// function checkuserlogin(){
   

//     const email=document.getElementById('email2').value;
//     const pass=document.getElementById('pass2').value;
//     // const objects=JSON.parse(this.responseText);
//     console.log(email);
//     console.log(pass);

    
//     i=0;
                    
//     const http= new XMLHttpRequest();
//     http.open("GET","https://lavender-blackbuck-gear.cyclic.app/checklogin/"+email+"/"+pass);
//     http.send()
//     http.onreadystatechange=function(){
//         if(document.getElementById('email2').value=="" && document.getElementById('pass2').value==""){
          
//             Swal.fire({
//                 icon: 'warning',
//                 title: 'Email and Password is empty ',
//                 text: 'Please input email and password',
//                 // footer: '<a href="">Why do I have this issue?</a>'
//               })
    
    
//                 }
//         else if(document.getElementById('email2').value=="" ){
//             Swal.fire({
//                 icon: 'warning',
//                 title: 'Email is empty ',
//                 text: 'Please input isemail ',
//                 // footer: '<a href="">Why do I have this issue?</a>'
//               })
    
    
//                 }
    
//                 else if(document.getElementById('pass2').value=="" ){
//                     Swal.fire({
//                         icon: 'warning',
//                         title: 'Password is empty ',
//                         text: 'Please input  password',
//                         // footer: '<a href="">Why do I have this issue?</a>'
//                       })
            
            
//                         }
//         else if(this.responseText =="admin"){
//             console.log("status="+this.responseText)
//             window.location.href="./menuadmin.html";
//             console.log("else Admin");
//         }
//         else  if(this.responseText =="false") {
//             console.log("status="+this.responseText)
//             console.log("else 1")
//                 //    window.location.href='./meprofile.html';
//                 // Swal.fire(objects['เกิดข้อผิดพลาดในการ Login']);
                
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Error',
//                     text: 'Not found accounts',
//                     // footer: '<a href="">Why do I have this issue?</a>'
//                 })



//                     }

//         else if(this.responseText =="true"){
//             console.log("status="+this.responseText)
//             console.log("else 2")
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Logined',
//                 text: 'Login complete',
//                 // footer: '<a href="">Why do I have this issue?</a>'
//               }).then((result)=>{
//                 if(result.isConfirmed){
//                     window.location.href="./meprofile.html";
//                 }
//               })
            
//         }
//     }
// }

// https://aggressive-tie-jay.cyclic.app/


// apifluttersapling


