// // const treasure = (placeholder) => {

// //     var randTreasure = Math.floor(Math.random() * 9)
// //     var randBomb = Math.floor(Math.random() * 9)

// //     if (placeholder === 0) {
// //         document.getElementById(placeholder).innerHTML = "&#x1f332"

// //         if (placeholder === randTreasure) {
// //         document.getElementById(placeholder).innerHTML = "&#x1f308"


// //         }
// //         else if (placeholder === randBomb) {
// //         document.getElementById(placeholder).innerHTML = "&#x2620"
// //         }

// //     }




// }

const treasure = (location) => {

    var randTreasure = Math.floor(Math.random() * 18)
    var randBomb = Math.floor(Math.random() * 18)

    if (randTreasure === location) {

        document.getElementById(location).innerHTML = "🍭" //lollipop
        return alert("You Win!")

    }
    else if (randBomb === location) {

        document.getElementById(location).innerHTML = "🍫" // chocolate
        return alert("You Lose!")
    }
    else {

    }
}