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
   
   if(username.value == '') {
    alert('Enter Fields')
   }
   else if(usertitle.value == ''){
    alert('Enter All fields')
   }
   else if(userblog.value == ''){
    alert('Must Enter All Fields')
   }
   else {
    alert('Transfer to blog website (Coming Soon)')
   }
 })