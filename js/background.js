var counter = 0;
function changeBG(){
    var imgs = [
        "url(img/banner3.jpg)",
        "url(img/slider4.jpg)",
        "url(img/salon.jpg)",
        "url(img/nefer.jpg)"
        
    ]    
    
    
    if(counter === imgs.length) counter = 0;
    $(".cover").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 3000);


