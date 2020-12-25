// class Validator {
//     static isValidName(name) {
//         // ne tuscias tekstas
//         const a = Validator.notEmptyString(name);
//         if (!a) {}
//     }
// }


// isValidDate() {
//     //2020-11-16
// }



// export { Validator }

// .metodas nurodo kas bus darom su reiksme

class Validator {
    constructor (color) {
        this.color = color;
    }

    printColor() {
        if (Validator.notEmptyString(this.color)) {
            return 'Duota netinkamo formato spalva.';
        }
        return `My color is: ${this.color}`;
    }

    static notEmptyString(text) {
        if (typeof text !== 'string') {
            return 'Turi buti tekstas.';
        }
        if (text === '') {
            return 'Turi buti ne tuscias tekstas.';
        }
        return true;
    }
}

export { Validator }

// darbas su parametru galimas tik turint klases objekta
const tikrintojas = new Validator('red');
tikrintojas.printColor();

// darbas su notEmptyString() metodu galimas neturink klases objekto
Validator.notEmptyString();

