var slideIndex = 0;
showSlides();



function showSlides(){
    
    var slides = document.getElementsByClassName("myimages");
    //var slides = [img1, img2, img3]
    for (var i = 0; i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex >= slides.length){
        slideIndex=0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides,4000);
}

//1st loop i = 0, slides[i] = img 1
//2nd loop i = 1, slides[i] = img 2
//3rd loop i = 2, slides [i] = img 3


//style.display = "none" means ......

//console.log('Hello',slideIndex)