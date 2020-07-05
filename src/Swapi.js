function consultar () {
    var cep = prompt ("insira seu cep");
    fetch ('https://viacep.com.br/ws/' + cep +'/json/')
    .then (resposta => resposta.json())
    .then (data => {
        console.log(data);
    });
}