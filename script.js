
document.addEventListener("DOMContentLoaded", function() {

    
    let envio = new FormData;
    //envio.append('user', document.querySelector('#username').value)
    //envio.append('pass', document.querySelector('#password').value)
    
    fetch('https://projetoacessibilidade.pythonanywhere.com/todo/cronograma/', {
    method: 'POST',
    body: envio
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        let infoTable = "";
        json.forEach(e => {
            infoTable += `<tr>
                            <td>${e.data}</td>
                            <td>${e.motivo}</td>
                            <td>${e.local}</td>
                        </tr>`;
        })

        document.querySelector('#infoCronograma').innerHTML = infoTable;
        
    })
});