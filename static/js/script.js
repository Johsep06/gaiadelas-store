function render_container(route, containerId) {
    fetch(route)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text(); // Retorna a resposta como texto
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = ''; // Limpa o container
            document.getElementById(containerId).innerHTML = data; // Insere o HTML retornado no container
        })
        .catch(error => {
            console.error('Erro ao carregar conteúdo:', error);
        });
}

function change_page(page) {
    window.location.href = page
}
