var templateProduto = '<div class="produto col-4" id="{{id}}">';
templateProduto += '<img src="{{urlImagem}}">';
templateProduto += '<h2>R$ {{preco}}</h2>';
templateProduto += '<button class="btnComprar">Comprar</button>';
templateProduto += '</div>';

function adicionarAoCarrinho(evento){
    let id = evento.target.parentNode.id;
    
    let carrinho = localStorage.getItem("carrinho");

    let vetorCarrinho;

    if(carrinho == null){
        vetorCarrinho = [id];
    }else{
        vetorCarrinho = JSON.parse( localStorage.getItem("carrinho") );
        vetorCarrinho.push(id);
    }

    localStorage.setItem("carrinho", JSON.stringify(vetorCarrinho) );
}

$(document).ready(function(){
    
    var rowProdutos = $("#sectionProdutos > .row");

    for(let i = 0; i<baseProdutos.length; i++){
        let htmlProduto = templateProduto.replace("{{urlImagem}}", baseProdutos[i].urlImagem).replace("{{preco}}", baseProdutos[i].preco).replace("{{id}}",baseProdutos[i].id);

        rowProdutos.append(htmlProduto);
    }

    rowProdutos.on("click",".btnComprar",adicionarAoCarrinho);

});