//  Light/Dark Button switching
let lightmode = document.getElementById("mode");
const body = document.body;
 lightmode.addEventListener("click", () => {
  body.classList.toggle("darkmode")
})

//
function switchwindow () { window.location.replace("")};

document.getElementById('submitbtn').addEventListener('click', (event) =>{
  let username = document.getElementById('name')
  let usertitle = document.getElementById('title')
  let userblog = document.getElementById('blog')
  
  localStorage.setItem('name', username.value);
  localStorage.setItem('title', usertitle.value);
  localStorage.setItem('blog', userblog.value);
  switchwindow()
   if(usertitle.value,userblog.value,username.value !== '') {
    alert('it worked')
   }
   else {
    alert('Please Enter All Fields')
   }
 })