// // function datatable(){
// //     const http= new XMLHttpRequest();
// //     http.open("GET","https://www.melivecode.com/api/users");
// //     http.send();
// //     http.onreadystatechange=function(){
// //         if(this.readyState ==4 && this.status ==200){
// //             console.log(this.responseText);
// //             var trHTML='';
// //             const objects =JSON.parse(this.responseText);
// //             for(let object of objects){
// //                 trHTML +='<tr>';
// //                 trHTML +='<td>'+object['id']+'</td>';
// //                 trHTML +='<td><img width="50px" src="'+object['avatar']+'"class="avatar"></td>';
// //                 trHTML +='<td>'+object['fname']+'</td>';
// //                 trHTML +='<td>'+object['lname']+'</td>';
// //                 trHTML +='<td>'+object['username']+'</td>';
                

// //                 trHTML +='</tr>';
// //             }
// //             document.getElementById("mytable").innerHTML=trHTML;
// //         }
// //     }
// // }

// function showUserCreateBox(){
//     Swal.fire({
//      tittle:'Mutiple inputs',
//      html:
//      '<input id="fname" class="swal2-input" placeholder="Fisrt">'+
//      '<input id="lname" class="swal2-input" placeholder="Last">'+
//      '<input id="username" class="swal2-input" placeholder="Username">'+
//      '<input id="email" class="swal2-input" placeholder="Email">',
//      focusConfirm: false,
//      preConfirm:()=>{
//          return[
//              document.getElementById('swal-input1').value,
//              document.getElementById('swal-input2').value
//          ]
//      }
//     })
//  }
//  function usercreate(){
//      const fname=document.getElementById("fname").value;
//      const lname=document.getElementById("lname").value;
//      const username=document.getElementById("username").value;
//      const email=document.getElementById("email").value;
 
//      const xhttp= new XMLHttpRequest();
//      xhttp.open("POST","https://www.melivecode.com/api/users/create");
//      xhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
//      xhttp.send(
//          JSON.stringify({
//              "fname": fname,"lname":lname,"username":username,"email":email,
//              "avatar":"https://www.mecallapi.com/users/cat.png"
//          })
//      );
//      xhttp.onreadystatechange=function(){
//          if(this.readyState ==4 && this.status == 200){
//              const objects=JSON.parse(this.responseText);
//              Swal.fire(objects['message']);
//              datatable();
//          }
//          else{
//             Swal.fire(objects['message']);
//          }
//      }
//  }