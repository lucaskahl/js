///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1999); // Ainda funciona (Hoisting), o JS Lê todo o arquivo e você ainda consegue chama-lo antes de declara-lo, só funciona para function declaration

// Funções
// function declaration
function calculateAge(year) {
	console.log(2018 - year);
}

// function expression
// retorna erro se chama-lo antes de declara-lo

//retirement(1999); // ERRO, SÓ FUNCIONA DEPOIS DE DECLARA-LO

var retirement = function(year) {
	console.log(65 - (2016 - year));
};

retirement(1999); // OK FUNCIONA

// Variaveis

//console.log(age); // undefined
var age = 23;
//console.log(age); // 23

function foo() {
	console.log(age); // undef.
	var age = 65;
	console.log(age); // 65
}
foo();
console.log(age); // 65;

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
