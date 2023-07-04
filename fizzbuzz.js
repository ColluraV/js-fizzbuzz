const blocchiContainer = document.querySelector(".blocchi-container")

for ( let i = 1 ; i <= 100; i++){

    /*`<div class="bloccoNumero"></div>`*/
    let singoloBlocco =  document.createElement("div");
    singoloBlocco.classList.add("bloccoNumero")
    blocchiContainer.append(singoloBlocco);

    if ((i %3 == 0) && (i %5 == 0)){
        console.log('FizzBuzz');
        singoloBlocco.innerHTML = ('Fizz Buzz');
        singoloBlocco.classList.add("bg-warning");
    }

     else if (i %3 ==  0 ){
        console.log('Fizz');
        singoloBlocco.innerHTML = ('Fizz');
        singoloBlocco.classList.add("bg-success");

    }

    else if ( i %5 == 0) {
        console.log('Buzz');
        singoloBlocco.innerHTML = ('Buzz');
        singoloBlocco.classList.add("bg-danger");

    }

    else {
        console.log(i);
        singoloBlocco.innerHTML = (i);

    }


}


      