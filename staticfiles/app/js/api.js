var products_data = []
var products_old = []
var products_new = []
var frame_products = []
var check_pagination = 1
/*
    PAGE: HOME
*/ 
// khai báo các biến for pagination new products
var status_pagination1 = [0, 1, 8] // [startItemProduct, currentIndexPagination, ItemPerFrame]
const btn_next = document.querySelector(".pg__next")
const btn_prev = document.querySelector(".pg__prev")
const bnt_pg_items = document.querySelectorAll(".pg__item")
const frame1_products = document.getElementById("row-product1")
// khai báo các biến for pagination old products
var status_pagination2 = [0, 1, 8] // [startItemProduct, currentIndexPagination, ItemPerFrame]
const btn2_next = document.querySelector(".pg2__next")
const btn2_prev = document.querySelector(".pg2__prev")
const bnt2_pg_items = document.querySelectorAll(".pg2__item")
const frame2_products = document.getElementById("row-product2")

/*
    PAGE: PRODUCTS
*/ 
// khai báo các biến for pagination of PRODUCTS PAGE
var status_pagination3 = [0, 1, 8] // [startItemProduct, currentIndexPagination, ItemPerFrame]
const btn3_next = document.querySelector(".pg3__next")
const btn3_prev = document.querySelector(".pg3__prev")
const bnt3_pg_items = document.querySelectorAll(".pg3__item")
const frame3_products = document.getElementById("row-product3")

// Render khi load trang
render_products(status_pagination1, check_pagination=1)
render_products(status_pagination2, check_pagination=2)
render_products(status_pagination3, check_pagination=3)


/*
    PAGE: HOME
    Xử lý các sử kiện cho pagination new products
*/ 
//Xử lý button next, previous pagination1
btn_next.addEventListener("click", async() =>{
    // xử lý back-end cho các item pagination
    status_pagination1[1] += 1
    await render_products(status_pagination1, check_pagination=1)
    // xử lý font-end cho các item pagination
    // remove tất cả class active
    remove_class_list(bnt_pg_items, "active")
    console.log(status_pagination1[1])
    //add class active cho item pagination next 
    bnt_pg_items[status_pagination1[1] - 1].classList.add("active")
})
btn_prev.addEventListener("click", async() =>{
    // xử lý back-end cho các item pagination
    status_pagination1[1] -= 1
    await render_products(status_pagination1, check_pagination=1)
     // xử lý font-end cho các item pagination
    // remove tất cả class active
    remove_class_list(bnt_pg_items, "active")
    //add class active cho item pagination next 
    bnt_pg_items[status_pagination1[1] - 1].classList.add("active")
})
// Xử lý các item button pagination
for (let item_pg of  bnt_pg_items) {
    item_pg.addEventListener("click", (e) =>{
        // remove tất cả class active
        remove_class_list(bnt_pg_items, "active")
        //add class active cho class được chọn
        e.target.classList.add("active")
        // cập nhật currentIndexPagination
        status_pagination1[1] = e.target.value
        // tìm vị trí đầu tiên của sản phẩm dựa theo chỉ số currentIndexPagination
        status_pagination1[0] = (status_pagination1[1] - 1) * status_pagination1[2]
        render_products(status_pagination1, check_pagination=1)
    })
}

/*
    PAGE: HOME
    Xử lý các sử kiện cho pagination old products
*/ 
btn2_next.addEventListener("click", async() =>{
    // xử lý back-end cho các item pagination
    status_pagination2[1] += 1
    await render_products(status_pagination2, check_pagination=2)
    // xử lý font-end cho các item pagination
    // remove tất cả class active
    remove_class_list(bnt2_pg_items, "active")
    console.log(status_pagination2[1])
    //add class active cho item pagination next 
    bnt2_pg_items[status_pagination2[1] - 1].classList.add("active")
})
btn2_prev.addEventListener("click", async() =>{
    // xử lý back-end cho các item pagination
    status_pagination2[1] -= 1
    await render_products(status_pagination2, check_pagination=2)
     // xử lý font-end cho các item pagination
    // remove tất cả class active
    remove_class_list(bnt2_pg_items, "active")
    //add class active cho item pagination next 
    bnt2_pg_items[status_pagination2[1] - 1].classList.add("active")
})
// Xử lý các item button pagination
for (let item_pg of  bnt2_pg_items) {
    item_pg.addEventListener("click", (e) =>{
        // remove tất cả class active
        remove_class_list(bnt2_pg_items, "active")
        //add class active cho class được chọn
        e.target.classList.add("active")
        // cập nhật currentIndexPagination
        status_pagination2[1] = e.target.value
        // tìm vị trí đầu tiên của sản phẩm dựa theo chỉ số currentIndexPagination
        status_pagination2[0] = (status_pagination2[1] - 1) * status_pagination2[2]
        render_products(status_pagination2, check_pagination=2)
    })
}

/*
    PAGE: PRODUCTS
    Xử lý các sử kiện cho pagination trang products
*/ 
//Xử lý button next, previous pagination1
if(btn3_next != null) {
    btn3_next.addEventListener("click", async() =>{
        // xử lý back-end cho các item pagination
        status_pagination3[1] += 1
        await render_products(status_pagination3, check_pagination=3)
        // xử lý font-end cho các item pagination
        // remove tất cả class active
        remove_class_list(bnt3_pg_items, "active")
        console.log(status_pagination3[1])
        //add class active cho item pagination next 
        bnt3_pg_items[status_pagination3[1] - 1].classList.add("active")
    })
}
if(btn3_prev != null) {
    btn3_prev.addEventListener("click", async() =>{
        // xử lý back-end cho các item pagination
        status_pagination3[1] -= 1
        await render_products(status_pagination3, check_pagination=3)
         // xử lý font-end cho các item pagination
        // remove tất cả class active
        remove_class_list(bnt3_pg_items, "active")
        //add class active cho item pagination next 
        bnt3_pg_items[status_pagination3[1] - 1].classList.add("active")
    })
}

// Xử lý các item button pagination
for (let item_pg of  bnt_pg_items) {
    item_pg.addEventListener("click", (e) =>{
        // remove tất cả class active
        remove_class_list(bnt3_pg_items, "active")
        //add class active cho class được chọn
        e.target.classList.add("active")
        // cập nhật currentIndexPagination
        status_pagination3[1] = e.target.value
        // tìm vị trí đầu tiên của sản phẩm dựa theo chỉ số currentIndexPagination
        status_pagination3[0] = (status_pagination3[1] - 1) * status_pagination3[2]
        render_products(status_pagination3, check_pagination=3)
    })
}



function remove_class_list(obj, name_class) {
    for (item of obj) {
        item.classList.remove(name_class)
    }
}

async function render_products(obj, check_pagination) {
    await callAPIProducts()
    //kiểm tra đang ở pagination nào
    var products_in_pagination = []
    if (check_pagination == 1) {
        products_in_pagination = products_new
        frame_products = frame1_products
    }
    else if(check_pagination == 2) {
         products_in_pagination = products_old
         frame_products = frame2_products
    }
    else {
        products_in_pagination = products_data
        frame_products = frame3_products
    }
    
    
    const products_length = products_in_pagination.length
    const max_item_pagination = Math.ceil(products_length/obj[2]) 
    var products_current_frame = []

    // Xử lý ràng buộc cho next pagination
    if(obj[1] > max_item_pagination) {
        obj[1] = 1 // cho về trang 1
    }

    // Xử lý ràng buộc cho prev pagination
    else if(obj[1] < 1) {
        obj[1] = max_item_pagination // cho về trang cuối
    }

    // Tìm vị trí đầu tiên của sản phẩm trón list products xuất hiện trong frame products
    obj[0] = (obj[1] - 1) * obj[2]
    products_current_frame = products_in_pagination.slice(obj[0], obj[0] + obj[2])

    // render vào HTML băng map
    if(frame_products!=null) {
        frame_products.innerHTML = `${products_current_frame.map(product=>
            `
            <div class="products-box" >
                <div class="product-img">
                    <a href="/products/product_details/${product.product_id}"><img src="${product.image}" alt="Image not display"></a>
                </div>
                <div class="product-details">
                    <div class="product-name">
                        <a href="product_details/{{product.product_id}}">
                            <h3>${product.name}</h3>
                        </a>
                    </div>
                </div>
                <div class="product-contact">
                    ${product.status == true
                        ?`<p class="have-product">Còn hàng</p>`
                        :`<p class="have-product">Hết hàng</p>`
                    }
                    <p class="contact-to-buy">
                        <a href="https://zalo.me/0989993038">Liên hệ</a>
                        
                    </p>
                </div>
            </div>
            `
            ).join('')}`
        }
}
async function callAPIProducts() {
    const url_API_Products = "http://127.0.0.1:8000/productsAPI/"
    const response = await fetch(url_API_Products)
    const data = await response.json()
    products_data = data
    products_old = products_data.filter(product=>product.new_product == false)
    products_new= products_data.filter(product=>product.new_product == true)
}


