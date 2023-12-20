
// // const params=(new URL(document.location)).searchParams;
// // const namemenu=params.get('namemenu');
// // const price=params.get('price');
// // const typefood=params.get('typefood');
// // const menudetail=params.get('menudetail');
// // document.getElementById('namemenu').innerHTML =namemenu;
// // document.getElementById('price').innerHTML =price;
// // document.getElementById('typefood').innerHTML =typefood;
// // document.getElementById('menudetail').innerHTML =menudetail;


// // var domainimg="https://weareproject.000webhostapp.com/login/avatar/";
// function datatable(){
//     const http= new XMLHttpRequest();
//     http.open("GET","https://odd-ruby-chipmunk-kilt.cyclic.app/selectmenu");
//     http.send();
//     http.onreadystatechange=function(){
//         if(this.status !="[]"){
//             console.log(this.responseText);
//             var trHTML='';
//             const objects =JSON.parse(this.responseText);
//             for(let object of objects){
//                 trHTML +='<tr>';
//                 trHTML +='<td>'+object['id']+'</td>';
//                 trHTML +='<td><img width="50px" border-radius="50px" src="'+["https://weareproject.000webhostapp.com/login/avatar/"]+object["imgmenu"]+'"class="avatar"></td>';
//                 trHTML +='<td>'+object['namemenu']+'</td>';
//                 trHTML +='<td>'+object['price']+'</td>';
//                 trHTML +='<td>'+object['typefood']+'</td>';
//                 trHTML +='<td>'+object['menudetail']+'</td>';
                
//                 console.log(object);
//                 trHTML +='</tr>';
//             }
//             document.getElementById("mytable").innerHTML=trHTML;
//         }
//     }
// }
// datatable();



// function insertdata(){
   

//     const namemenu=document.getElementById('namemenu').value;
//     const price=document.getElementById('price').value
//     console.log(namemenu);
//     console.log(price);
    
//     const http= new XMLHttpRequest();
//     http.open("GET","https://odd-ruby-chipmunk-kilt.cyclic.app/insertmenu/"+namemenu+"/"+price+"/"+"1"+"/"+"1"+"/"+"typefood");
//     http.send();
//     http.onreadystatechange=function(){
    
//     }
// }





// //เรียกใช้video
// //trHTML +='<td><video width="50px" border-radius="50px" controls autoplay src="'+["https://weareproject.000webhostapp.com/login/avatar/test.mp4"]+'"class="avatar"></td>';
// //api
// //https://odd-ruby-chipmunk-kilt.cyclic.app 

