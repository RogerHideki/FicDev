async function buscaEndereco(cep) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

buscaEndereco('01310100')