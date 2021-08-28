var templateItemCarrinho = "<div class='produto col-12'><img src='{{urlImagem}}'>";
templateItemCarrinho += "<p class='descricao'>Descrição</p>";
templateItemCarrinho += "<p class='preco'>{{preco}}</p>";
templateItemCarrinho += "<button class='btnRemover'>Remover</button>";
templateItemCarrinho += "</div>";

$(document).ready(function(){
    var rowProdutos = $("#sectionProdutos > .row");

    var carrinho = localStorage.getItem("carrinho");

    if(carrinho == null){
        rowProdutos.html("<div class='produto col-12'>Carrinho vazio... <a href='index.html'>Vamos às compras?!</a></div>");
    }else{
        vetorCarrinho = JSON.parse(carrinho);

        for(let i = 0; i < vetorCarrinho.length; i++){
            for(let j = 0; j < baseProdutos.length; j++){
                if(vetorCarrinho[i].id == baseProdutos[j].id){
                    let itemCarrinho = templateItemCarrinho.replace("{{urlImagem}}", baseProdutos[j].urlImagem).replace("{{preco}}",baseProdutos[j].preco);
                    rowProdutos.append(itemCarrinho);
                }
            }
        }
    }
});