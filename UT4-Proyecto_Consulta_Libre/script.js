const enlace = 'https://narutodb.xyz/api/clan';

fetch(enlace)
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }

        return data.json();
    })
    .then(update => { console.log(update) })
    .catch(error => { console.log(error) })