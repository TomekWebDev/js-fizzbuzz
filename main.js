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
versione con output html - Bonus 1 + aggiunta stile (Bonus 2)
***************************************************/


// let mainContainer = document.createElement("div")
// mainContainer.classList.add("bg-danger", "row", "m-0", "p-1", "w-100", "justify-content-around")
// mainContainer.setAttribute("id","main-container")
// document.getElementById("main").append(mainContainer)



// for (let i = 0; i <= 100; i++){

//     if( i % 3 == 0 && i != 0 && i % 5 == 0) { 
//         console.log("fizzBuzz");
//         let box = document.createElement("div")
//         box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
//         document.getElementById("main-container").append(box)
//         box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-primary">Fizz Buzz</div>`;
        
        
//         }
//     else if( i % 3 == 0 && i != 0 ) { 
//         console.log("fizz");
//         let box = document.createElement("div")
//         box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
//         document.getElementById("main-container").append(box)
//         box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-warning">Fizz</div>`;
//         }
//     else if(i % 5 == 0 && i != 0) {
//         console.log("buzz");  
//         let box = document.createElement("div")
//         box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
//         document.getElementById("main-container").append(box)
//         box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-success">Buzz</div>`;
//         } 
//     else {
//         console.log(i);
//         let box = document.createElement("div")
//         box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
//         document.getElementById("main-container").append(box)
//         box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-black text-white">${i}</div>`;
//     }
        
// }


/************************************************** 
versione con input utente - test
***************************************************/


function launchFizzBuzzGame(){

    // totale numeri su cui eseguire la "scansione"
    let t = parseInt(document.getElementById("inputCountTotale").value)
    // primo multiplo da controllare - "Fizz"
    let x = parseInt(document.getElementById("inputPrimoMultiplo").value)
    // secondo multiplo da controllare - "Buzz"
    let y = parseInt(document.getElementById("inputSecondoMultiplo").value)

    let mainContainer = document.createElement("div")
    mainContainer.classList.add("bg-danger", "row", "m-0", "p-1", "w-100", "justify-content-around")
    mainContainer.setAttribute("id","main-container")
    document.getElementById("main").append(mainContainer)



    for (let i = 0; i <= t; i++){

        if( i % x == 0 && i != 0 && i % y == 0) { 
            console.log("fizzBuzz");
            let box = document.createElement("div")
            box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
            document.getElementById("main-container").append(box)
            box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-primary">Fizz Buzz</div>`;
            
            
            }
        else if( i % x == 0 && i != 0 ) { 
            console.log("fizz");
            let box = document.createElement("div")
            box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
            document.getElementById("main-container").append(box)
            box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-warning">Fizz</div>`;
            }
        else if(i % y == 0 && i != 0) {
            console.log("buzz");  
            let box = document.createElement("div")
            box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
            document.getElementById("main-container").append(box)
            box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-success">Buzz</div>`;
            } 
        else {
            console.log(i);
            let box = document.createElement("div")
            box.classList.add("col-2", "d-flex", "justify-content-center", "m-2", "p-0",'text-lg')
            document.getElementById("main-container").append(box)
            box.innerHTML = `<div class="game-card d-flex justify-content-center align-items-center bg-black text-white">${i}</div>`;
        }
            
    }

}