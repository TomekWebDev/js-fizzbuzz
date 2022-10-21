/************************************************** 
versione con console
***************************************************/

// utilizzo anche lo 0 come numero di partenza così se i numeri
// arrivassero da un input utente non devo verificare che siano diversi
// da zero. perchè comunque usando questa formula lo zero risulterebbe 
// multiplo di ogni numero


for (let i = 0; i <= 100; i++){

    if( i % 3 == 0 && i != 0 && i % 5 == 0) { 
        console.log("fizzBuzz");
        }

    else if( i % 3 == 0 && i != 0 ) { 
        console.log("fizz");
        }
    else if(i % 5 == 0 && i != 0) {
        console.log("buzz");  
        } 
    else console.log(i);
    
}

/************************************************** 
versione con output html
***************************************************/



