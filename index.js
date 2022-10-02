let homeScore= document.getElementById("hs")
let guestScore= document.getElementById("gs")
let periodOut= document.getElementById("p")
let hScore = 0
let gScore=0
let per= 1


function reset(){
    hScore=0
    gScore=0
    per=1
    homeScore.textContent=hScore
    guestScore.textContent=gScore
    periodOut.textContent=per
    guestScore.style.color="black"
    homeScore.style.color="black"
}
function period(){
    if(per<=3){
        per+=1
        periodOut.textContent=per
    }
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

