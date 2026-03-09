/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i datatype sono le tipologie di valori che troviamo in javascript. 
ci sono 7 tipi di datatype divisi in due famigli: i dati primitivi e dati complessi.
 
i dati complessi sono: (ne parleremo successivamente)
-object
-Array 

i dati primitivi sono:
-numbers: (es. 1, 23, -30, 150.50 ecc ) sono valori numerici.
-string: (es. 'stefano', 'casa', 'cane2' ecc) sono testi con caratteri racchiusi tra apici('').
-boolean: (es. true, false) è un tipo di dato che puo assumere solo valore vero o falso. 
-undefined: è il valore di default e rappresenta un valore indefinito.
-null: rappresenta una variabile vuota, cioè assenza esplicita di un valore. 
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Roberto"
console.log("Questo è il valore di myName:", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 20
let ab = a + b

console.log("la somma a + b risulta:", ab)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

console.log("Il valore di x è:", x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// cambio il valore di myName in Cafagna
myName = "Cafagna"
console.log("il valore di myName è cambiato in:", myName)

// creo una variabile costante(const) chiamata cognome con il valore stringa 'Roberto'
const cognome = "Roberto"
console.log("qui ho creato una const di nome cognome con valore:", cognome)

/* PROVO a cambiare il valore della variabile costante (const) con il valore stringa 'Cafagna'.
 il risultato sarà un errore poiche non si può cambiare il valore di una variabile CONST */
// cognome = "Cafagna"
// console.log("il valore di cognome è cambiato in:", cognome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4 - x
console.log("il valore della sottrazione di 4-x è:", y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// creiamo due variabili con due valore stringa
let name1 = "john"
let name2 = "John"
console.log("i valori di name1 e name2 sono:", name1, name2)
// comparazione tra variabili, mettiamo in relazione la variabile name1 e name2 e controlliamo se i loro valori sono uguali (in questo caso)
let name3 = name1 === name2
console.log("la variabile name3 ha valore:", name3)
// la comparazione ha dato come risultato: FALSE, i valori di name1 e name2 risultano diversi.

// assegnamo un valore diverso a name1 'da john a John' (cambio della prima lettera da minuscola a maiuscola)
// name1 = "John"

// mettiamo di nuovo in comparazioni i valori di name1 e name2 (dopo la riassegnazione del valore name1).
// name3 = name1 === name2
// console.log("la variabile name3 ORA ha un valore:", name3)
// name3 ha valore TRUE dopo la modifica del valore name1, questo mostra come l'utilizzo di lettere maiuscole o minuscole influenzano i dati di una variabile

name3 = name1 === name2.toLowerCase()

console.log("la variabile name3 ha valore:", name3)
