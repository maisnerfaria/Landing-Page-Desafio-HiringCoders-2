const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('e-mail').value;
    let telefone = document.getElementById('telefone').value;
    let data = {
        nome,
        email,
        telefone,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

})