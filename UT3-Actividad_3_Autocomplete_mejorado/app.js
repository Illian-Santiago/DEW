/*
1.Que el texto introducido por el usuario aparezca en negrita dentro de las opciones.
2.Ahora mismo busca paises que empiecen por las letras introducidas, consigue que muestre primero los países que comiencen por las letras introducidas y luego los paises que contengan las letras introducidas.
3.Ahora mismo te autocompleta el texto escrito con las opciones disponibles, consigue que deje de hacerlo para que aparezca el texto del usuario y sea el usuario quien elija la opción. Asegúrate de que elige una opción correcta.
*/

var countries = [];
var inputElem = null;
var resultsElem = null;

let index = 0;

function init() {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => (countries = data));

  resultsElem = document.querySelector("ul");
  inputElem = document.querySelector("input");

  resultsElem.addEventListener("click", (event) => {
    handleResultClick(event);
  });
  inputElem.addEventListener("input", (event) => {
    autocomplete(event);
  });
  inputElem.addEventListener("keyup", (event) => {
    handleResultKeyDown(event);
  });
}

function autocomplete(event) {
  const value = inputElem.value;

  if (!value) {
    hideResults();
    inputElem.value = "";
    return;
  }

  const empiezanValorIntroducido = countries.filter((country) => {
    return country.name.common.toLowerCase().startsWith(value.toLowerCase());
  });

  const contienenValorIntroducido = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(value.toLowerCase()) && !country.name.common.toLowerCase().startsWith(value.toLowerCase());
  });

  const results = [...empiezanValorIntroducido, ...contienenValorIntroducido];

  resultsElem.innerHTML = results
    .map((result, index) => {
      const isSelected = index === 0;

      return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? " selected" : ""}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ""}
        >
        ${result.name.common.replace(
        // Se crea una expresión regular para buscar el value en cada país y lo reemplaza con un texto en negrita.
        // g: búsqueda global (busca todas las ocurrencias en el texto).
        // i: búsqueda insensible a mayúsculas y minúsculas.
        new RegExp(value, 'gi'),
        '<strong>$&</strong>')}
        </li>
      `;
    })
    .join("");

  resultsElem.classList.remove("hidden");
}


function handleResultClick(event) {
  if (event.target && event.target.nodeName === "LI") {
    selectItem(event.target);
  }
}

function handleResultKeyDown(event) {
  const { key } = event;
  const elementoSeleccionado = resultsElem.querySelector(".selected");

  switch (key) {
    case "Backspace":
      return;

    case "ArrowUp":
      index--;
      cambiarSeleccionado(index);
      break;

    case "ArrowDown":
      index++;
      cambiarSeleccionado(index);
      break;

    case "ArrowDown":
      index++;
      cambiarSeleccionado(index);
      break;

    case "ArrowRight":
      selectFirstResult();
      break;

    default:
      return;
  }

  function cambiarSeleccionado(index) {
    if (index >= 0 && index < resultsElem.children.length) {
      elementoSeleccionado.classList.remove("selected");
      resultsElem.children[index].classList.add("selected");
    }

    console.log(index);
  }
}

function selectFirstResult() {
  const value = inputElem.value;
  const autocompleteValue = resultsElem.querySelector(".selected");

  if (!value || !autocompleteValue) {
    return;
  }

  if (value !== autocompleteValue.innerText) {
    inputElem.value = autocompleteValue.innerText;
    inputElem.setSelectionRange(
      value.length,
      autocompleteValue.innerText.length
    );
  }
}

function selectItem(node) {
  if (node) {
    inputElem.value = node.innerText;
    hideResults();
  }
}

function hideResults() {
  this.resultsElem.innerHTML = "";
  this.resultsElem.classList.add("hidden");
}

init();