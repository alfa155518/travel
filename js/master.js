// start variables

let user = document.querySelector(".log-in i.user")

let search = document.querySelector(".log-in i.search")

let formSearch = document.querySelector(".form-search")

let loginForm = document.querySelector(".login-form ")

let exit = document.querySelector(".login-form  i.exit")

let allVideos = document.querySelector(".videos")

let allVideo = Array.from(document.querySelectorAll(".landing .videos video"))

let lengthVideo = allVideo.length

let arrows = document.querySelectorAll(".arrows i")

let arrowPrev = document.querySelector(".arrows .prev")

let arrowNext = document.querySelector(".arrows .next")

let number = 1;

let allImagesBox = document.querySelectorAll(`.gallery .container-img .box `)

let allImages = document.querySelectorAll(`.gallery .container-img .box img`)

let allReviews = Array.from(document.querySelectorAll(".review .container-review .box"))

let reviewArrowsPrev = document.querySelector(".review .arrows .prev")

let reviewArrowsNext = document.querySelector(".review .arrows .next")

let bars = document.querySelector(".nav .bars")

let allLinks = document.querySelector(".page .nav .links")

// end variables



// start bars function 

bars.onclick = function() {
    allLinks.classList.toggle("active")
}

// end bars function 




// start  function clickable

user.onclick = function() {
    loginForm.classList.add("active")
}

exit.onclick = function() {
    loginForm.classList.remove("active")
}

search.onclick = function() {
    formSearch.classList.toggle("active")
}

// end  function clickable

// start slider videos  


check()


arrowPrev.onclick = function() {
    

    if (arrowPrev.classList.contains("disable")) {
        return false
    } else {
        number++
        check()
    }
    
}


arrowNext.onclick = function() {
    if (arrowNext.classList.contains("disable")) {
        return false
    } else {
        number--
        check()
    }
}




reviewArrowsPrev.onclick = function() {
    

    if (reviewArrowsPrev.classList.contains("disable")) {
        return false
    } else {
        number++
        check()
    }
    
}


reviewArrowsNext.onclick = function() {
    if (reviewArrowsNext.classList.contains("disable")) {
        return false
    } else {
        number--
        check()
    }
}





function check() {
    
    handelActive()

    allReviews[number - 1].classList.add("active")

    if (number == 1) {
        reviewArrowsNext.classList.add("disable")
    } else {
        reviewArrowsNext.classList.remove("disable")
    }
    if (number === allReviews.length) {
        reviewArrowsPrev.classList.add("disable")
    } else {
        reviewArrowsPrev.classList.remove("disable")
    }
    
    allVideo[number - 1].classList.add("active")



    
    if (number == 1) {
        arrowNext.classList.add("disable")
    } else {
        arrowNext.classList.remove("disable")
    } if (number == allVideo.length) {
        arrowPrev.classList.add("disable")
    } else {
        arrowPrev.classList.remove("disable")
    }

}


// remove active 

function handelActive() {

    allVideo.forEach(video => {
        video.classList.remove("active")
    })


    arrows.forEach(i => {
        i.classList.remove("active")
    })

    allReviews.forEach(review => {
        review.classList.remove("active")
    })

}

// start intersection-observer 




// end slider videos  





// start Gallery

        const overLay = document.createElement("div")

        overLay.className = "over-lay"

        const content = document.createElement("div")

        content.className = "content"

        const heading = document.createElement("h3")
        
        const text = document.createTextNode ("amazing place")

        const paraGraph = document.createElement("p")

        const about = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga?")

        const checkButton = document.createElement("a")

        const buttonText = document.createTextNode("See more")

        const removeOverlay = document.createElement("div")

        removeOverlay.innerHTML = "X"

        removeOverlay.className = "exit"

        checkButton.appendChild(buttonText)

        paraGraph.appendChild(about)
        
        heading.appendChild(text)
        
        content.appendChild(heading)

        content.appendChild(paraGraph)

        content.appendChild(checkButton)

        content.appendChild(removeOverlay)

        overLay.appendChild(content)

            
            allImagesBox.forEach( box => {
                
                box.addEventListener("click", e => {
                    document.body.appendChild(overLay)
                })

            })


            removeOverlay.onclick = function() {
                overLay.remove()
            } 




            // start intersection-observer API 

            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        const img = entry.target

                        img.src = img.dataset.src
    
                        observer.unobserve(img)

                    }
                })
            }
            , {
                rootMargin: "0px 0px -200px 0px"
            })

            allImages.forEach(img => {
                observer.observe(img)
            })

// end Gallery


