/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

    I principali datatype in JavaScript sono:
    1.String: ci permette di inserire una stringa di testo che deve essere contenuto tra doppi o singoli apici e può contenere, lettere numeri e caratteri speciali.

    2.Number: ci permtte di inserire un numero di qualsiasi tipo (con virgola e negativo) all'interno di una variabile

    3.Boolean: i bouleani sono due valori che rappresentano il valore di verità di una variabile e sono identificati con true e false

    4.Undefined: rappresenta un valore non ancora definito all'interno della variabile.  

    5.Null: rappresenta un valore vuoto, con null la variabile non contiene nulla  
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.

    In JavaScript un oggetto è una variabile che contine coppie di chiave-valore
        Es.
            let person = {
                name: "Carmelo"
                surname: "Muscolino"
                age: 26
            }
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
 */
    let addizione : 12 + 20,

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
    let x : 12,


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
    let name : "Carmelo"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
    let subtract: 4 - x

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

    let name1: "John"
    let name2: "john"
    console.log (name1 === name2 )
    console.log (name1.toLowerCase() === name2.toLowerCase())