'use strict';
const nav_close_mobile = document.getElementById("nav_close_mobile")
const nav_container_mobile = document.getElementById("nav-container")
const nav_lis_menu = document.getElementById("list_menu")

function remove_Class(linkPagination, class_remove){
    const itemsFirstMenu = document.querySelector(".item-nav-menu")
    itemsFirstMenu.classList.add("active-nav-menu")
    for (let itemLink of linkPagination) {
        itemLink.classList.remove(class_remove)
    }
    console.log("Removed Complete!")
};

nav_close_mobile.addEventListener("click", () => {
    nav_container_mobile.style.left = "-"  + nav_container_mobile.offsetWidth + "px";
})
nav_lis_menu.addEventListener("click", () => {
    nav_container_mobile.style.left = "0";
})


// CONTACT
const contact_btn = document.getElementById("contact-btn")
const wrapper_contact = document.getElementById("wrapper-contact")
function display_or_hidden_contact(){
    contact_btn.addEventListener("click", () => {
        wrapper_contact.style.opacity = "1";
        contact_btn.style.opacity = "0";
    })
    contact_btn.addEventListener("mouseout", () => {
        wrapper_contact.style.opacity = "-1";
        contact_btn.style.opacity = "1";
    })
}
display_or_hidden_contact()


export default remove_Class;

