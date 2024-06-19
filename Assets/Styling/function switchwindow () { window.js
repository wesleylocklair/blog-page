function switchwindow () { window.location.replace("http://www.w3schools.com")};

document.getElementById('submitbtn').addEventListener('click', (event) =>{
  let username = document.getElementById('name')
  let usertitle = document.getElementById('title')
  let userblog = document.getElementById('blog')
  
  localStorage.setItem('name', username.value);
  localStorage.setItem('title', usertitle.value);
  localStorage.setItem('blog', userblog.value);
   if(usertitle.value,userblog.value,username.value !== '') {
    alert('it worked')
   }
   else {
    alert('Please Enter All Fields')
   }
 })



 header{
  text-align: center;
  color:hotpink;
  font-family: "Franklin Gothic Medium";
  font-size:200% ;
}

.input-info{
  text-align: center;
  display: block;
  
}