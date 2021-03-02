

/*
there are some changes...
("a","@")
("O","0")
("s",$)
("i",!)
("I",|)
*/

// Input user password... and that is not secure...
function securePass() {
    let password = document.getElementById("userPassword").value;

    if (password.includes('and') == true) {
        password = password.replace('and', '&');
    }

    // now split password in array/object...
    password = password.split('');

    // loop for replace some charctors...
    for (let i = 0; i < password.length; i++) {
        function myFn(oldChar, newChar) {
            password[i] = password[i].replace(oldChar, newChar);
        }

        // without if i want to try switch statement...

        if (password[i] == 'a' || password[i] == 'A') {
            myFn('a', '@');
            myFn('A', '@');
        }
        if (password[i] == 'o' || password[i] == 'O') {
            myFn('o', '0');
            myFn('O', '0');
        }
        if (password[i] == 's' || password[i] == 'S') {
            myFn('s', '$');
            myFn('S', '$');
        }
        if (password[i] == 'v' || password[i] == 'V') {
            myFn('v', '^');
            myFn('V', '^');
        }
        if (password[i] == 'i') {
            myFn('i', '!');
        }
        if (password[i] == 'I') {
            myFn('I', '|');
        }

    }

    // simply convert any random charctor to uppercase...
    let anyNumber = parseInt((Math.random()) * password.length);

    password[anyNumber] = password[anyNumber].toUpperCase();
    password[anyNumber] = password[anyNumber].toUpperCase();

    // array to string conversion...
    password = password.toString();

    // using for loop remove , between this string elements...
    for (let index = 0; index < password.length; index++) {
        password = password.replace(',', '');
    }

    // show secure password to user...  
    document.getElementById("securePassword").innerText = "Your secure password is " + `"${password}"`;

    if (password.length < 8) {
        alert("Your password is very small, please make less than 9 latter password for make more secure...");
    }
}

