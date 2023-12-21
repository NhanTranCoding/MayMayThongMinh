'use strict';
const listImagesBanner = document.querySelectorAll(".image_banner")
const boxListImagesBanner = document.querySelector(".slide-banner-images")
const btnArrowBannerLeft = document.querySelector(".btn-banner-left")
const btnArrowBannerRight = document.querySelector(".btn-banner-right")


var indexImageBannerCurr = 0
function moveAutoSlide(right=true){
    let widthImageBanner = listImagesBanner[0].width
    if (right) {
        indexImageBannerCurr = indexImageBannerCurr + 1
    }
    else {
        indexImageBannerCurr = indexImageBannerCurr - 1
    }

    if (indexImageBannerCurr >= listImagesBanner.length) {
        indexImageBannerCurr = 0
        boxListImagesBanner.style.transition = "0s ease-in-out"
    }
    else if (indexImageBannerCurr < 0) {
        indexImageBannerCurr = listImagesBanner.length - 1
        boxListImagesBanner.style.transition = "0s ease-in-out"
    }
    else {
        boxListImagesBanner.style.transition = "1s ease-in-out"
    }
    boxListImagesBanner.style.transform = `translateX(${widthImageBanner * indexImageBannerCurr * -1}px)`
}

var slideBannerInterval = setInterval(moveAutoSlide, 4000)
btnArrowBannerRight.addEventListener("click", (e) => {
    if (!e.currentTarget.clicked) {
        clearInterval(slideBannerInterval)
        moveAutoSlide(true)
        slideBannerInterval = setInterval(moveAutoSlide, 4000)
    }
})
btnArrowBannerLeft.addEventListener("click", (e) => {
    if (!e.currentTarget.clicked) {
        clearInterval(slideBannerInterval)
        moveAutoSlide(false)
        slideBannerInterval = setInterval(moveAutoSlide, 4000)
    }
})