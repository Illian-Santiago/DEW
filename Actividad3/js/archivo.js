let language = prompt('Select your language (English) (Russian) (Spanish)');
let texto = document.querySelector('p');

switch (language) {
    case 'Russian':
        texto.classList.add('text-success');
        texto.innerHTML = 'Добро пожаловать';
        alert('Добро пожаловать');
        console.log('Добро пожаловать');
    break;
    
    case 'Spanish':
        texto.classList.add('text-light');
        texto.innerHTML = 'Bienvenido';
        alert('Bienvenido');
        console.log('Bienvenido');
    break;

    case 'English':
        texto.classList.add('text-primary');
        texto.innerHTML = 'Welcome';
        alert('Welcome');
        console.log('Welcome');
        break;
    break;

    default:
        alert("Please enter your language")
        location.href = '../';
}