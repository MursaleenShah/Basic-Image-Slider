// to create an image slider
// first of all we need to get the images
const slides = document.querySelectorAll(".slide");

//console.log(slides);

/*images will be accessed based on their index number that starts with 0 and so on.
for that we need to create a variable that keeps a track of the index numbers*/

var counter = 0;


/* Now we will implement forEach() loop to slides
this will call a function for each image*/
slides.forEach(positionImages);



/*This function will take two parameters, fisrt is image and second is index of that image.
this function moves each image a certain distance away from the main element.
the image with index 0 will be moved(0*100)% away and the image with index 1 will me moved (1*100)% away and so on*/
function positionImages(slide,index)
{
   
    slide.style.left = `${index *100}%`
    
}



//function for prev button

const goPrev = () => {
    counter--; 
    slideImage();
}



//function for next button

const goNext = () => {
    counter++;   
    slideImage();
    
   
        
    
    
}




//Now we will create a function to move images, this function will transform(move back and forth) images



const slideImage = () =>
{
   /*here we ensure that counter stays within th range of indices that is if counter is less than 0
   it is set to 0 to prevent it going below the first image and if it is larger than the total no of images(i.e slides.length) it 
   is set to the index of last image*/
    if (counter < 0) {
        counter = 0;
    } else if (counter >= slides.length) {
        counter = slides.length - 1;
        alert("end of images");
    }

    slides.forEach(
        (slide) =>
        
        {
            
            slide.style.transform = `translateX(-${counter * 100}%)`
            
        }
    )
}