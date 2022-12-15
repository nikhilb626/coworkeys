
const swiper1 = new Swiper(".slider-1", {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
  });
  



  var swiper = new Swiper(".rooms-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 50,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
  }
  ,
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
    breakpoints: {
       450: {
          slidesPerView: 1,
        },
       640: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });



  var swiper = new Swiper(".team-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 50,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
  }
  ,
  navigation: {
    nextEl: ".teams-next",
    prevEl: ".teams-prev",
  },
    breakpoints: {
       450: {
          slidesPerView: 1,
        },
       640: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });




  var swiper = new Swiper(".brands-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 50,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
  }
  ,
  navigation: {
    nextEl: ".brands-next",
    prevEl: ".brands-prev",
  },
    breakpoints: {
       350: {
          slidesPerView: 1,
        },

       500: {
         slidesPerView: 2,
       },

       790: {
         slidesPerView: 3,
       },
       1000: {
         slidesPerView: 5,
       },
    },
 });




  
//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements

const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");




function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflowY = "auto"; //show the scroll bar on body
  }
}




