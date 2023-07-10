function toggleMode(){
  // Meu orgulho. Meu primeiroa algoritimo de troca Em JS //
  const html = document.documentElement
  //if(html.classList.contains('light') == true){
  //  html.classList.remove('light')
  //  html.classList.add('dark')
  //} else{
  //  html.classList.remove('dark')
  //  html.classList.add('light') 
  //}
  html.classList.toggle('light')
  const img = document.querySelector('#profile img')
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/sol-avatar-2.png")
  }else{
    img.setAttribute('src', './assets/avatar.png')
  }
}