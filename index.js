let homeScore= document.getElementById("hs")
let guestScore= document.getElementById("gs")
let hScore = 0
let gScore=0


function reset(){
    hScore=0
    gScore=0
    homeScore.textContent=hScore
    guestScore.textContent=gScore
    guestScore.style.color="black"
    homeScore.style.color="black"
}
function addOneHome(){addh("addOne")}
function addTwoHome(){addh("addTwo")}
function addThreeHome(){addh("addThree")}
function addOneGuest(){addg("addOne")}
function addTwoGuest(){addg("addTwo")}
function addThreeGuest(){addg("addThree")}

function addh(number){
    n=number
    switch(n){
        case "addOne":
            hScore+=1
            
        break
        case "addTwo":
            hScore+=2
            
        break
        case "addThree":
            hScore+=3
            
        break
        
    }
    homeScore.textContent=hScore
    h=hScore
    g=gScore
    if(h>g){
        homeScore.style.color="green"
        guestScore.style.color="red"
    }else if(g>h){
        guestScore.style.color ="green"
        homeScore.style.color="red"
    }else if(g==h){
       guestScore.style.color="black"
       homeScore.style.color="black" 
    }

    
}

function addg(number){
    x=number
    switch(x){
        case "addOne":
            gScore+=1
            
        break
        case "addTwo":
            gScore+=2
            
        break
        case "addThree":
            gScore+=3
            
        break
        
    }
    guestScore.textContent=gScore
     
    h=hScore
    g=gScore
    if(h>g){
        homeScore.style.color="green"
        guestScore.style.color="red"
    }else if(g>h){
        guestScore.style.color="green"
        homeScore.style.color="red"
    }else if(g==h){
        guestScore.style.color="black"
        homeScore.style.color="black"
    }
      
}

