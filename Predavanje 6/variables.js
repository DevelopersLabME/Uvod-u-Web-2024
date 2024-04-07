// Primjer 1
// Var i let

// function foo() {
// 	if (true) {
// 		let foo1 = "foo";
// 	}
// 	console.log(foo1);
// }

// function foo() {
// 	if (true) {
// 		var foo = "foo";
// 	}
// 	console.log(foo);
// }

// foo();


// Primjer 2
// Closures
function sayWord(word) {
	return () => console.log(word);
}

const sayHello = sayWord("hello");

// sayHello(); // "hello"


function spoljasnjaFunkcija(x) {
    // Unutrašnja funkcija koja koristi varijablu 'x' iz vanjskog opsega
    function unutrasnjaFunkcija(y) {
      return x + y;
    }
    
    return unutrasnjaFunkcija;
  }
  
  // Kreiranje closure-a
  var closure = spoljasnjaFunkcija(5);
  
  // Pozivanje closure-a
//   var rezultat = closure(3); // Očekivani rezultat je 5 + 3 = 8
//   console.log(rezultat); // Ispisuje 8



// console.log(num);
// var num = 5;
// console.log(num);


// let num = 5;

// saberi();
// function saberi() {
//     console.log(2+2);
// }