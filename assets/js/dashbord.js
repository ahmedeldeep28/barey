let btn_head = document.querySelector(".sidebar .header");
let sidebar_status = document.querySelector(".sidebar .header .status");
let sidebar = document.querySelector(".sidebar");
btn_head.addEventListener("click", () => {
    sidebar.classList.toggle("hede");
    if (sidebar.classList.contains("hede")) {
        sidebar_status.textContent = "اظهار";
    } else {
        sidebar_status.textContent = "اخفاء";
    }
})

    let menu_item = document.querySelectorAll(".sidebar .menu .menu-item");
    Array.from(menu_item)

    menu_item.forEach( (item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active")
        })
    })

