const Inputs = document.querySelectorAll('.controls input');

function Change() {
    const Medida = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}` , this.value + Medida)
    console.log(document.documentElement.style.setProperty(`--${this.name}` , this.value + Medida));
}

Inputs.forEach(input => input.addEventListener( 'change' , Change));
Inputs.forEach(input => input.addEventListener( 'mousemove' , Change))