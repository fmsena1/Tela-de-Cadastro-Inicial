class Validator {

    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

    //iniciar a validação de todos os campos

    validate(form){

        let inputs = document.getElementsByTagName('input')

        console.log(inputs);

        // Transformo uma HTMLCollection - > array

        let inputsArray = [...inputs];

        console.log(inputsArray);

        //Loop nos inputs e validação mediante ao que for encontrado

        inputsArray.forEach(function(input){


            //Loop com todas as validações existentes

            for(let i = 0; this.validations.length > i; i++){
                //Verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){

                    let method=this.validations[i].replace('data-', '').replace('-','');

                    let value = input.getAttribute(this.validations[i]);

                    this[method](input, value);

                }
            }

        }, this);

    }

    minlength(input, minValue){
        let inputLenght= input.value.length;
        let errorMessage= `O campo precisa ter pelo menos ${minValue} caracteres`;
        
        if(inputLenght < minValue){
            this.printMessage(input, errorMessage);
        }
    }
    //Método para imprimir mensagem de erro na tela
    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);
        
        template.textContent = msg;

        let inputParent = input.parentNode;

        template.classList.remove('template');

        inputParent.appendChild(template)
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//Evento que dispara as validações

submit.addEventListener('click', function(e){

    e.preventDefault();

    validator.validate(form);

})

