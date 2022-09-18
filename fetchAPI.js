    var contenido = document.querySelector('#contenido')
        function traer() {
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                console.log(data.results['0'])
                contenido.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="50px" class="img-fluid rounded-circle"> 
                <p>Nombre: ${data.results['0'].name.last}</p>
                <a class="button" href="#https://api.whatsapp.com/send?phone=5492617560935&text=Hola!%20Quiero%20mas%20informacion">¡Hablar por Whatsapp!</a>
                `
            })
        } 
