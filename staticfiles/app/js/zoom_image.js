'use strict';
function Image_Zoom(imgID, resultID, lensID) {
    var img, lens, result, cx, cy
    img = document.getElementById(imgID)
    result = document.getElementById(resultID)
    lens = document.getElementById(lensID)

    //  tỉ lệ img/lens
    cx = result.offsetWidth / lens.offsetWidth
    cy = result.offsetHeight / lens.offsetHeight

    result.style.backgroundImage = "url('" + img.src + "')"
    result.style.backgroundSize = (img.width * cx ) + "px " + (img.height * cy) + "px"

    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);

    lens.addEventListener("mouseout", mouseOutLens);
    img.addEventListener("mouseout", mouseOutLens);

    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function mouseOutLens(e) {
        result.style.opacity = "0"
        lens.style.opacity = "0"
    }
    function moveLens(e) {
        result.style.opacity = "1"
        lens.style.opacity = "1"
        var pos, x, y
        pos = getCursorPos(e)
        x = pos.x - (lens.offsetWidth / 2)
        y = pos.y - (lens.offsetHeight / 2)
        if (x < 0) {x = 0}
        if (y < 0) {y = 0}
        if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth}
        if(y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight}
        lens.style.top = y + "px"
        lens.style.left = x + 0.1 * lens.offsetWidth +  "px"
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px"
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0
        e = e || window.event
        a = img.getBoundingClientRect()
        x = e.pageX - a.left
        y = e.pageY - a.top
        x = x - window.pageXOffset
        y = y - window.pageYOffset
        return {x: x, y: y}
    }
            
}

function displayImageMini(idImageMain, clsImageMini) {
    var listImageMiniProduct = document.getElementsByClassName(clsImageMini)
    var imgMain = document.getElementById(idImageMain)
    for (let item of listImageMiniProduct) {
        item.addEventListener('click', (e) => {
            imgMain.src = e.target.src
            Image_Zoom("img-original", "img-zoom", "lens")
        })
    }
}
function commentEmotion(clsRate){
    var rate = document.querySelectorAll(clsRate)
    var emotion = document.querySelector(".emotion")
    for (let item of rate) {
        item.addEventListener("click", (e) => {
            if(e.target.id == "star1") {
                emotion.innerHTML = "I just hate it☹️"
            }
            else if(e.target.id == "star2") {
                emotion.innerHTML = "I don't like it😔"
            }
            else if(e.target.id == "star3") {
                emotion.innerHTML = "It is awesome😀"
            }
            else if(e.target.id == "star4") {
                emotion.innerHTML = "I just like it😆"
            }
            else if(e.target.id == "star5") {
                emotion.innerHTML = "I just love it😍"
            }
        })
    }
    
}
commentEmotion(".rate")
Image_Zoom("img-original", "img-zoom", "lens")
displayImageMini("img-original", "img-product-mini") 
