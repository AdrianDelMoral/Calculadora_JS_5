let op1 = '', op = '', numero = 0;
const botonesNumeros = document.querySelectorAll('.botones-numeros');

class Calculadora {
    generateHTML() {
        let div1 = document.createElement('div');
        div1.className = 'alinear-calculadora';
        document.body.appendChild(div1);

        let div2 = document.createElement('div');
        div2.className = 'calculadora';
        div1.appendChild(div2);

        let div3 = document.createElement('div');
        div3.className = 'botones-calculadora';
        div2.appendChild(div3);

        /* <div class="display">0</div> */
        let display = document.createElement('div');
        display.className = 'display';
        display.textContent = '0';
        div3.appendChild(display);


        /* <button class="botones-naranjas" id="ere-btn">R</button>
        */
        let erre = document.createElement('button');
        erre.className = 'botones-naranjas';
        erre.id = 'ere-btn';
        erre.textContent = 'R';
        div3.appendChild(erre);

        /* <button class="botones-naranjas" id="division-btn">/</button>  */
        let division = document.createElement('button');
        division.className = 'botones-naranjas';
        division.id = 'division-btn';
        division.textContent = '/';
        div3.appendChild(division);

        /* 
            <button class="botones-numeros">7</button>
            <button class="botones-numeros">8</button>
            <button class="botones-numeros">9</button>
        */
        for (let i = 7; i < 10; i++) {
            let numeros = document.createElement('button');
            numeros.className = 'botones-numeros';
            numeros.textContent = `${i}`;
            div3.appendChild(numeros);
        }


        /*
            <button class="botones-naranjas" id="multiply-btn">x</button>
        */
        let multiplicacion = document.createElement('button');
        multiplicacion.className = 'botones-naranjas';
        multiplicacion.id = 'multiply-btn';
        multiplicacion.textContent = 'X';
        div3.appendChild(multiplicacion);
        /*
            <button class="botones-numeros">4</button>
            <button class="botones-numeros">5</button>
            <button class="botones-numeros">6</button>
        */
        for (let i = 4; i < 7; i++) {
            let numeros = document.createElement('button');
            numeros.className = 'botones-numeros';
            numeros.textContent = `${i}`;
            div3.appendChild(numeros);
        }
        /*
            <button class="botones-naranjas" id="rest-btn">-</button>
        */
        let resta = document.createElement('button');
        resta.className = 'botones-naranjas';
        resta.id = 'rest-btn';
        resta.textContent = '-';
        div3.appendChild(resta);

        /*
            <button class="botones-numeros">1</button>
            <button class="botones-numeros">2</button>
            <button class="botones-numeros">3</button>
        */
        for (let i = 1; i < 4; i++) {
            let numeros = document.createElement('button');
            numeros.className = 'botones-numeros';
            numeros.textContent = `${i}`;
            div3.appendChild(numeros);
        }
        /*
            <button class="botones-naranjas" id="add-btn">+</button>
        */

        let suma = document.createElement('button');
        suma.className = 'botones-naranjas';
        suma.id = 'add-btn';
        suma.textContent = '+';
        div3.appendChild(suma);

        /*
            <button class="botones-numeros">0</button>
        */
        let zeroBtn = document.createElement('button');
        zeroBtn.className = 'botones-numeros';
        zeroBtn.textContent = '0';
        div3.appendChild(zeroBtn);
        /*
            <button class="botones-naranjas" id="coma-btn">,</button>
            <button class="botones-naranjas" id="c-btn">C</button>
            <button class="botones-naranjas" id="igual-btn">=</button>
        */
        let coma = document.createElement('button');
        coma.className = 'botones-naranjas';
        coma.id = 'coma-btn';
        coma.textContent = ',';
        div3.appendChild(coma);

        let ce = document.createElement('button');
        ce.className = 'botones-naranjas';
        ce.id = 'c-btn';
        ce.textContent = 'C';
        div3.appendChild(ce);

        let igual = document.createElement('button');
        igual.className = 'botones-naranjas';
        igual.id = 'igual-btn';
        igual.textContent = '=';
        div3.appendChild(igual);
    }

    onSumBtnClick() {
        // Guardar operacion
        const display = document.querySelector('.display');
        op1 = parseFloat(display.textContent);

        // Guardar operacion
        op = '+';

        // limpiar display
        display.textContent = ' ';
        display.style.backgroundColor = '#975513';
        display.style.color = '#111111';
        display.style.fontWeight = 800;
        this.style.backgroundColor = 'red';
        this.style.color = 'black';
    }

    onRestBtnClick() {
        // Guardar operacion
        const display = document.querySelector('.display');
        op1 = parseFloat(display.textContent);

        // Guardar operacion
        op = '-';

        // limpiar display
        display.textContent = ' ';
        display.style.backgroundColor = '#975513';
        display.style.color = '#111111';
        display.style.fontWeight = 800;
        this.style.backgroundColor = 'red';
        this.style.color = 'black';
    }

    onMultiplyBtnClick() {
        // Guardar operacion
        const display = document.querySelector('.display');
        op1 = parseFloat(display.textContent);

        // Guardar operacion
        op = '*';

        // limpiar display
        display.textContent = ' ';
        display.style.backgroundColor = '#975513';
        display.style.color = '#111111';
        display.style.fontWeight = 800;
        this.style.backgroundColor = 'red';
        this.style.color = 'black';
    }

    onDivisionBtnClick() {
        // Guardar operacion
        const display = document.querySelector('.display');
        op1 = parseFloat(display.textContent);

        // Guardar operacion
        op = '/';

        // limpiar display
        display.textContent = ' ';
        display.style.backgroundColor = '#975513';
        display.style.color = '#111111';
        display.style.fontWeight = 800;
        this.style.backgroundColor = 'red';
        this.style.color = 'black';
    }
};

/* Gen calculadora */
let calculator = new Calculadora();

calculator.generateHTML();

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */
// actualiza el display con el texto recibido(numeros)
function updateDisplay() {
    const display = document.querySelector('.display');
    if (display.textContent === '0') {
        display.textContent = this.textContent;
    } else {
        display.textContent += this.textContent;
    }
}
function addNumListener() {
    // Buscamos los botones numericos
    let buttons = document.querySelectorAll('.botones-numeros');

    // Asignamos updateDisplay al evento click de los botones
    for (const btn of buttons) {
        btn.onclick = updateDisplay;
    }
}

addNumListener();
/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */
/*Boton Más(+) */
/*Buscar el boton mas */
function addSumBtnListener() {
    // Buscar el boton +
    let btn = document.body.querySelector('#add-btn');

    // asignar onSumBtnClick
    btn.onclick = calculator.onSumBtnClick;
}
/*Buscar el boton mas FIN*/

addSumBtnListener();
/*Boton Más(+) FIN*/
/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */
/*Boton Menos(-) */
/*Buscar el boton menos */
function addRestBtnListener() {
    // Buscar el boton -
    let btn = document.body.querySelector('#rest-btn');

    // asignar onRestBtnClick
    btn.onclick = calculator.onRestBtnClick;
}
/*Buscar el boton menos FIN*/

addRestBtnListener();
/*Boton Menos(-) FIN*/
/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */
/*Boton Multiplicar(x) */
/*Buscar el boton multiplicar */
function addMultiplyBtnListener() {
    // Buscar el boton *
    let btn = document.body.querySelector('#multiply-btn');

    // asignar onRestBtnClick
    btn.onclick = calculator.onMultiplyBtnClick;
}
/*Buscar el boton multiplicar FIN*/
addMultiplyBtnListener();
/*Boton multiplicar(*) FIN*/

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/*Boton Dividir(x) */
/*Buscar el boton Dividir */
function addDivisionBtnListener() {
    // Buscar el boton -
    let btn = document.body.querySelector('#division-btn');

    // asignar onRestBtnClick
    btn.onclick = calculator.onDivisionBtnClick;
}
/*Buscar el boton Dividir FIN*/

addDivisionBtnListener();
/*Boton Dividir(/) FIN*/

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/*Boton R */
function onEreBtnClick() {
    // Guardar operacion
    const display = document.querySelector('.display');

    display.textContent = sessionStorage.getItem('numero')

    // limpiar display
    this.style.backgroundColor = 'red';
    this.style.color = 'black';
}

/*Buscar el boton R */
function addEreBtnListener() {
    // Buscar el boton -
    let btn = document.body.querySelector('#ere-btn');

    // asignar onEreBtnClick
    btn.onclick = onEreBtnClick;
}
/*Buscar el boton R FIN*/

addEreBtnListener(); // GUARDA EL ULTIMO NUMERO
/*Boton R FIN*/

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* Boton igual(=) */
function onIgualBtnClick() {
    if (op1 !== '' && Number.isFinite(op1)) {
        // Guardar operacion
        const display = document.querySelector('.display');
        let op2 = parseFloat(display.textContent);

        let btn;
        switch (op) {
            case '+':
                display.textContent = op1 + op2;
                btn = document.body.querySelector('#add-btn');
                break;

            case '-':
                display.textContent = op1 - op2;
                btn = document.body.querySelector('#rest-btn');
                break;

            case '*':
                display.textContent = op1 * op2;
                btn = document.body.querySelector('#multiply-btn');
                break;

            case '/':
                if ((op1 / op2) === NaN || (op1 / op2) === Infinity) {
                    display.textContent = 0;
                } else {
                    display.textContent = op1 / op2;
                }
                btn = document.body.querySelector('#division-btn');
                break;
        }

        sessionStorage.setItem('numero', display.textContent);
        op1 = '';

        display.style.backgroundColor = '';
        display.style.color = '';
        display.style.fontWeight = '';
        btn.style.backgroundColor = '';
        btn.style.color = '';
    }
}
/* Busca el boton igual*/
function addIgualBtnListener() {
    // Buscar el boton =
    let btn = document.body.querySelector('#igual-btn');

    // asignar onIgualBtnClick

    btn.onclick = onIgualBtnClick;
}
/* Busca el boton igual FIN */

addIgualBtnListener();
/* Boton igual(=) FIN */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* boton C */
function onCeBtnClick() {
    // Guardar operacion
    const display = document.querySelector('.display');
    let restarle1 = display.textContent;

    let arrayNums = restarle1.split('');/* [1,2,3,4,5,6] */
    arrayNums.pop();/* [1,2,3,4,5] */
    let arrayFinal = arrayNums.join(''); // sin comas

    display.innerHTML = Number(arrayFinal);

}
/*Buscar el boton C */
function addCeBtnListener() {
    // Buscar el boton C
    let btn = document.body.querySelector('#c-btn');

    // asignar onCBtnClick
    btn.onclick = onCeBtnClick;
}


addCeBtnListener();
/* boton C */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* boton Coma */
const btnComa = document.body.querySelector('#coma-btn');//Buscar el boton Coma
const comaClick = function () {
    const display = document.body.querySelector('.display');

    if (!display.textContent.includes('.')) {
        display.textContent = display.textContent.concat('.');
    }

}

btnComa.addEventListener('click', comaClick);
    /* boton Coma */