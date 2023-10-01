const pic = document.querySelector('.pic');


pic.addEventListener('mouseover', function (event) {
  if (event.target.tagName === 'IMG' ) {
    pic.innerHTML=
    `<h1 id="h1" style="color: aliceblue;">Bulb On</h1><img src="technology-light-bulb-lighting-lamp-wallpaper on.jpg" class="images1" height="80%" >
    body.style="background: #fff783;"`
    
    
  }
  
  
  
  else {
    pic.innerHTML=` <h1 id="h1" style="color: aliceblue;">Bulb Off</h1><img src="technology-light-bulb-lighting-lamp-wallpaperOFF bulb.jpg"  height="80%">`
   
  }
});