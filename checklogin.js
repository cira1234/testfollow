global_email='';

// const email=document.getElementById('email2');
// const pass=document.getElementById('pass2');
// console.log('this is global email');
// console.log(email)
// console.log(pass)
function checkuserlogin(){
   

    const email=document.getElementById('email2').value;
    const pass=document.getElementById('pass2').value;
    // const objects=JSON.parse(this.responseText);
    // console.log(email);
    // console.log(pass);
 
    
    i=0;
                    
    const http= new XMLHttpRequest();
    http.open("GET","https://good-cyan-reindeer-ring.cyclic.cloud/checklogin/"+email+"/"+pass);
    http.send();
    http.onreadystatechange=function(){
 
        if(document.getElementById('email2').value=="" && document.getElementById('pass2').value==""){
          
            Swal.fire({
                icon: 'warning',
                title: 'Email and Password is empty ',
                text: 'Please input email and password',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
    
    
                }
        else if(document.getElementById('email2').value=="" ){
            Swal.fire({
                icon: 'warning',
                title: 'Email is empty ',
                text: 'Please input isemail ',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
    
    
                }
    
                else if(document.getElementById('pass2').value=="" ){
                    Swal.fire({
                        icon: 'warning',
                        title: 'Password is empty ',
                        text: 'Please input  password',
                        // footer: '<a href="">Why do I have this issue?</a>'
                      })
            
            
                        }
        else if(this.responseText =="admin"){
            console.log("status="+this.responseText)
            Swal.fire({
                icon: 'success',
                title: 'Welcome Admin Flutter Sapling',
                text: 'Login complete',
                // footer: '<a href="">Why do I have this issue?</a>'
              }).then((result)=>{
                if(result.isConfirmed){
                    window.location.href="./menuadmin.html";
 
                }
              })
            console.log("else Admin");
        }
        else  if(this.responseText =="false") {
            console.log("status="+this.responseText)
            console.log("else 1")
                //    window.location.href='./meprofile.html';
                // Swal.fire(objects['เกิดข้อผิดพลาดในการ Login']);
                
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Not found accounts',
                    // footer: '<a href="">Why do I have this issue?</a>'
                })
 
 
 
                    }
 
        else if(this.responseText =="true"){
            console.log("status="+this.responseText)
            console.log("else 2")
            Swal.fire({
                icon: 'success',
                title: 'Logined',
                text: 'Login complete',
                // footer: '<a href="">Why do I have this issue?</a>'
              }).then((result)=>{
                if(result.isConfirmed){
                  //  getid(email,pass);
                    window.location.href="./meprofile.html";
                }
              })
            
        }
    }
 }
 

 
//  function getid(email,pass){
//    console.log("function getid");
//    console.log(email);
//    console.log(pass);

//      const http= new XMLHttpRequest();
//      http.open("GET","https://aggressive-tie-jay.cyclic.app/getid/"+email+"/"+pass);
//      http.send();
//      http.onreadystatechange=function(){
//       if (http.readyState == 4 && http.status == "200") {

//         let id1=JSON.parse(http.responseText);
//         // for(let id2 of id1){
//          let id2=id1[0];
//           console.log("this is id object");
//           console.log(id2["id_user"]);
          
//                   datainsertpost(id2["id_user"]);

//         //  insertpost(id2["id_user"]);
       
//         // }
      
        
//       }
     
      
//         };
     
//  }
//  function iduser(id2){
//     return id2;
//  }  

//  window.onload = function (){
//   var buttonElement = document.getElementById("clickbutton");
//   // console.log(id2);

//   if (buttonElement) {
//     buttonElement.addEventListener('click',skriv,false);
//     // console.log();
//   }
 

// }
// function skriv(id2) {
//   console.log("this is wait id ");
//   console.log(id2)
//   // datainsertpost()
// }


// function datainsertpost(id2){

//  console.log("this is function datainsertpost");

//   console.log('this is parameter id')
//   console.log(id2)


//   const section=document.getElementById('section2').value;
//   const question=document.getElementById('question2').value;
//   const img=document.getElementById('files').value;
//   const namefilepost=img.split('\\').pop().split('/').pop();


//                 const http= new XMLHttpRequest();
//                 //  http.open("GET","https://aggressive-tie-jay.cyclic.app/selectuser");
//                   http.open("GET","https://aggressive-tie-jay.cyclic.app/insertpost/"+section+"/"+question+"/"+namefilepost+"/"+id2);
//                   http.send();
//                   // window.location.href="showpost.html"
              

                
                 

//                       // let  inserta= JSON.parse(this.responseText);
//                       // let insertb=inserta["insertId"];
//                      // console.log(this.responseText);
                     
//                     //  console.log(insertb);
//      //                for(const insertb of inserta){
//      //                  console.log("this is id object insert");
//      //                  console.log(inserta["insertId"]);
//      //                  console.log(inserta); 
                     
                      
//      //                  // iduser(id2["id_user"]);
//      //                  // insertpost(id2["id_user"]);
//      //                  //  insertpost(id2["id_user"]);
                  
//      //    }
     
     
 
//  }
 


 function insertpost(){
  console.log("this insertpost")

 //    iduser();
//  const http= new XMLHttpRequest();
//      http.open("GET","https://aggressive-tie-jay.cyclic.app/getid/"+email+"/"+pass);
//      http.send();
//      http.onreadystatechange=function(){
//        let id1=JSON.parse(this.responseText);
//        for(let id2 of id1){
//          console.log("this is id object");
//          console.log(id2["id_user"]);
//          iduser(id2["id_user"]);
//          insertpost(id2["id_user"]);
//         //  insertpost(id2["id_user"]);
     
//         }
//      }
  // console.log("this is email data functizon datainsertpost"); 
  // console.log(section);
  // console.log(question);
  // console.log(namefilepost);
  // console.log("console log checklogin");


  //  console.log("this is email data function email"); 
  //  console.log(email);
  //  console.log(pass);
  //  console.log(namefilepost);

  //     console.log("this is id global_id in insertpost");
  //     console.log(id2)
 

 }

 