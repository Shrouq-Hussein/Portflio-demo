// client reviews

// -------------------------------------------
// navbar 
let togglebtn = document.querySelector(".toggle-btn")
let navbarLinks = document.querySelector(".navbar-links ")

// small screen
togglebtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')

})

//active item
let nav_items = document.querySelectorAll(".navbar-links li")
console.log("nav_items: ", nav_items)
var deactivate = function (all) {
    Array.from(all).forEach((e => {
        // console.log(e.classList)
        e.classList.remove("active_nav_li")
    }))
}

Array.from(nav_items).forEach(element => {
    element.addEventListener("click", () => {
        deactivate(nav_items)
        element.classList.add("active_nav_li")
    })

});

// -------------------------------------------
// recent portfolio nav
let recent_portfolio =
{
    web: ["assets/istockphoto-1219473617-612x612.jpg"],
    branding: ["assets/istockphoto-1219473617-612x612.jpg", "assets/istockphoto-1219473617-612x612.jpg"],
    mockups: [],
    photography: ["assets/images.jpg", "assets/istockphoto-1219473617-612x612.jpg", "assets/images.jpg"],

}


//  active  recent_portfolio_menu
let recent_portfolio_menu = document.querySelectorAll(".recent_portfolio_menu li")
function creatingImages(arr){
    let content=""
    for (let i = 0; i < arr.length; i++) {
       content += ` <div class="col-lg-3 col-md-3 col-sm-10  p-2 m-2">
        <img src=${arr[i]} alt="" class="photgraphy_example">
    </div>`
    }
    return content
}
$(document).ready(function(){
    var content=""
    Object.values(recent_portfolio).forEach(function(e){
        content+=  creatingImages(e)
    })
    $(".recent_portfolio_content").html(content)
    console.log(    $("#all").addClass("active_nav_li") )
})

recent_portfolio_menu.forEach(function (tab) {
    tab.addEventListener("click", function () {
        deactivate(recent_portfolio_menu)
        tab.classList.add("active_nav_li")

        
       
        let content = ""
        if (this.id.toUpperCase() == "all".toUpperCase()) {
            console.log("all")
            Object.values(recent_portfolio).forEach(function(e){
                content+=  creatingImages(e)
            })

        }
        else {
            content+=  creatingImages(recent_portfolio[(this.id)])
            console.log("content",content)
        }
        $(".recent_portfolio_content").html(content)

    })
})


// circular progress
let circular_progress = document.getElementsByClassName("circular_progress")

let i
for (i in circular_progress) {
    let progress_value = circular_progress[i].querySelector(".progress_value").innerHTML
    console.log(progress_value, circular_progress[i])
    circular_progress[i].style.background = `conic-gradient(#51dcc5 ${progress_value},#4c4c4c 0deg)`
}









