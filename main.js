// ciclo for con console per verifica numeri multipli

// utilizzo anche lo 0 come numero di partenza così se i numeri
// arrivassero da un input utente non devo verificare che siano diversi
// da zero. perchè comunque usando questa formula lo zero risulterebbe 
// multiplo di ogni numero


for (let i = 0; i <= 100; i++){

    if( i % 3 == 0 && i != 0 ) { 
        console.log(i,"è multiplo  di 3");
        }
    else console.log(i,"non è multiplo di 3"); 
    
    if(i % 5 == 0 && i != 0) {
        console.log(i,"è Multiplo di 5");  
        }
    else console.log(i,"non è multiplo di 5"); 
    
}