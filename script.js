console.log("works")
const menuIcon = document.getElementById("menu-icon")
const sidebar = document.getElementById("sidebar")
const miniSidebar = document.getElementById("mini-sidebar")
const contentSection = document.getElementById("content")

menuIcon.addEventListener("click",()=>{
    sidebar.classList.toggle("hidden")
    miniSidebar.classList.toggle('hidden')
    contentSection.classList.toggle("ml-[15%]")
    contentSection.classList.toggle("ml-[7%]")
})

