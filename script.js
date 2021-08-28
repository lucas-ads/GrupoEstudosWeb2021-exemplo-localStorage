var templateProduto = '<div class="produto col-12 col-md-6 col-lg-4 col-xl-3" id="{{id}}">';
templateProduto += '<img src="{{urlImagem}}">';
templateProduto += '<h2>R$ {{preco}}</h2>';
templateProduto += '<button class="btnComprar">Comprar</button>';
templateProduto += '</div>';

function adicionarAoCarrinho(evento){
    let idProduto = evento.target.parentNode.id;
    
    let carrinho = localStorage.getItem("carrinho");

    let vetorCarrinho;

    if(carrinho == null){
        vetorCarrinho = [{
            id: idProduto,
            quant: 1
        }];
    }else{
        vetorCarrinho = JSON.parse( localStorage.getItem("carrinho") );
        vetorCarrinho.push({
            id: idProduto,
            quant: 1
        });
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