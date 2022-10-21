/************************************************** 
versione con console
***************************************************/

// utilizzo anche lo 0 come numero di partenza così se i numeri
// arrivassero da un input utente non devo verificare che siano diversi
// da zero. perchè comunque usando questa formula lo zero risulterebbe 
// multiplo di ogni numero


// for (let i = 0; i <= 100; i++){

//     if( i % 3 == 0 && i != 0 && i % 5 == 0) { 
//         console.log("fizzBuzz");
//         }
//     else if( i % 3 == 0 && i != 0 ) { 
//         console.log("fizz");
//         }
//     else if(i % 5 == 0 && i != 0) {
//         console.log("buzz");  
//         } 
//     else console.log(i);
    
// }

/************************************************** 
versione con output html - Bonus 1
***************************************************/


let mainContainer = document.createElement("div")
mainContainer.classList.add("bg-danger", "row", "m-0", "p-1", "w-100", "justify-content-around")
mainContainer.setAttribute("id","main-container")
document.getElementById("main").append(mainContainer)



for (let i = 0; i <= 100
    ; i++){

    if( i % 3 == 0 && i != 0 && i % 5 == 0) { 
        console.log("fizzBuzz");
        let box = document.createElement("div")
        box.classList.add('bg-light',"col-2", "m-2", "text-center","p-0",'text-lg')
        box.innerText = i;
        document.getElementById("main-container").append(box)
        }
    else if( i % 3 == 0 && i != 0 ) { 
        console.log("fizz");
        let box = document.createElement("div")
        box.classList.add('bg-light',"col-2", "m-2", "text-center","p-0",'text-lg')
        box.innerText = "fizz";
        document.getElementById("main-container").append(box)
        }
    else if(i % 5 == 0 && i != 0) {
        console.log("buzz");  
        let box = document.createElement("div")
        box.classList.add('bg-light',"col-2", "m-2", "text-center","p-0",'text-lg')
        box.innerText = "buzz";
        document.getElementById("main-container").append(box)
        } 
    else {
        console.log(i);
        let box = document.createElement("div")
        box.classList.add('bg-light',"col-2", "m-2", "text-center","p-0",'text-lg')
        box.innerText = i;
        document.getElementById("main-container").append(box)
    }
        
    
}

