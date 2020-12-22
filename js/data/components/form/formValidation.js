/*
- susirasti vinus validuotinus elementus
        - kiekvienam ju iskviesti Validator
            - gauti ats (error sarasas)
*/

import { Validator } from "./Validator.js"

function formValidation() {
    const forms = document.querySelectorAll ('form.form');

for (let form of forms) {
    const validables = form.querySelectorAll('[data-validation]');
    const submit = form.querySelectorAll('button[type="submit"]');
    comst validationResults = [];
    console.log(submit);

    submit.addEventListener('click', event => {
    // preventDefault komanda sustabdo puslapi nuo reload, paspaudus mygtuka.
            event.preventDefault ();
            console.log(validables);

                for (let input of validables) {
                    const rule = input.dataset.validation;
                    const text = input.value;

                    let results = null;

                    if (rule === 'name') {
                    ValidationResults.push(Validator.isValidName());
                    }

                    if (rule === 'email') {
                    ValidationResults.push(Validator.isValidEmail());

                    if (rule === 'message')
                    ValidationResults.push(Validator.isValidMesaage());
                   }

                   console.log(input.dataset.validation);
                }

        })
    }
}

export { formValidation }