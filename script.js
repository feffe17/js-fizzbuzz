// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per 
// i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
let fizz = "Fizz"
let buzz = "Buzz"
let fizzbuzz = "Fizzbuzz"

for(let i=1 ; i <=100 ; i++){
    if((i % 3) == 0){
        if((i % 5) == 0){
            console.log(fizzbuzz);
            
        } else {
            console.log(fizz);
            
        }
    }else if((i % 5) == 0){
        console.log(buzz);
        
    } else {
        console.log(i);
        
    }
}