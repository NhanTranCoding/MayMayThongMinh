'use strict';
const title_category = document.querySelector(".title-category")
const main_menu = document.querySelector(".main-menu")
const wrapper = document.querySelector(".wrapper")
const slide_bar_phone = document.querySelector(".slide-bar-phone")
const sub_menu_maycn = document.querySelector(".sub-menu__cn")
const sub_menu_vs = document.querySelector(".sub-menu__vs")
const return_category = document.querySelector(".return-category")

const resize_container = document.querySelector(".resize-container")


const brand_maycn = document.querySelector(".brand-maycn")
const brand_mayvs = document.querySelector(".brand-mayvs")

title_category.addEventListener("click", () =>{
    main_menu.style.left = "100%"
    wrapper.style.left = "0"
    return_category.style.display = "inherit"
})
var widthScreen = window.innerWidth
if (widthScreen < 840) {
    brand_maycn.addEventListener("click", () =>{
        slide_bar_phone.style.top = "-100%"
        sub_menu_maycn.style.top ="0"
    }) 
    brand_mayvs.addEventListener("click", () =>{
        
        slide_bar_phone.style.top = "-100%"
        sub_menu_vs.style.top ="0"
    })
}
return_category.addEventListener("click", () =>{
    if (sub_menu_maycn.style.top == "0px" || sub_menu_vs.style.top == "0px") {
        sub_menu_maycn.style.top= "100%"
        sub_menu_vs.style.top = "100%"
        slide_bar_phone.style.top = "0"
        return_category.style.display = "inherit"
    }
    else {
        main_menu.style.left = "0"
        wrapper.style.left = "120%"
        return_category.style.display = "none"
    }
    
})
if (widthScreen > 820 && widthScreen <= 1024) {
    resize_container.style.minWidth = "100%"
    console.log("Đã hoàn thanh")
}
