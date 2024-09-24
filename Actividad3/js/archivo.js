let language = prompt('Select your language (English) (Russian) (Spanish)');

let texto = document.querySelector('h1');
let boton = document.querySelector('button');

switch (language) {
    case 'Russian':
        texto.classList.add('text-success');

        texto.innerHTML = 'Добро пожаловать';
        boton.innerHTML = 'Давайте начнем';

        alert('Добро пожаловать');
        console.log('Добро пожаловать');
    break;
    
    case 'Spanish':
        texto.classList.add('text-dark');

        texto.innerHTML = 'Bienvenido';
        boton.innerHTML = 'Comencemos';

        alert('Bienvenido');
        console.log('Bienvenido');
    break;

    case 'English':
        texto.classList.add('text-primary');

        texto.innerHTML = 'Welcome';
        boton.innerHTML = 'Let´s start';

        alert('Welcome');
        console.log('Welcome');
        break;
    break;

    default:
        alert("Please enter your language")
        location.href = '../';
}