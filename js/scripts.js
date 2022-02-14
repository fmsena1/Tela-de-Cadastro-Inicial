class Validator{
    // Constructor serve para inicar as propriedades que um objeto possui.
    constructor(){
        this.validations=[

        ]
    }
    //Iniciar a validação de todos os campos

    validate(form){
        //pegar os inputs
        let inputs = form.getElementByTagName('input');

        console.log(inputs);

        //HTMLCollection -> ARRAY

        let inputsArray = [... inputs];

        console.log(inputsArray);

    }
}


let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit")

let validator= new Validator();

// Evento que dispara as validações

submit.addEventListener("click", function(e){
    
    e.preventDefault()
    

    validator.validate(form);

    })
