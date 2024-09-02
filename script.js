document.getElementById('rutForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const rut = document.getElementById('rut').value.trim();
    const result = document.getElementById('result');

    if (validarRUT(rut)) {
        result.textContent = `El RUT ${rut} es válido.`;
        result.style.color = 'green';
    } else {
        result.textContent = `El RUT ${rut} es inválido.`;
        result.style.color = 'red';
    }
});

function validarRUT(rut) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rut)) {
        return false;
    }

    const [body, dv] = rut.split('-');
    let sum = 0;
    let multiplier = 2;

    for (let i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body[i]) * multiplier;
        multiplier = multiplier < 7 ? multiplier + 1 : 2;
    }

    const dvExpected = 11 - (sum % 11);
    const dvComputed = dvExpected === 11 ? '0' : dvExpected === 10 ? 'K' : dvExpected.toString();

    return dvComputed.toUpperCase() === dv.toUpperCase();
}
