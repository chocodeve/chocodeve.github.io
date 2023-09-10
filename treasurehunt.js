const treasure = (location) => {
   
    var randTreasure = Math.floor(Math.random() * 9)
    var randBomb = Math.floor(Math.random() * 9)

    if(randTreasure === location){
        alert("You Win!")
        document.getElementById(location).innerHTML = "🌈" //rainbow
        
    } else if(randBomb === location){
        alert("You lose!")
        document.getElementById(location).innerHTML = "🍫" // chocolate
    }
 
}