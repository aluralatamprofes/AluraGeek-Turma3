import { produtoServices } from "../servicos/produto-servicos.js";

const novoProduto = (name, price, imageUrl) => {

    const card = document.createElement("div");
    const conteudo = `
        <div class="produto">
            <img src="${imageUrl}" alt="img">
            <h1> ${name} </h1>
            <p class="preco">${price}</p>
            <a href="">Ver Produto</a>
        </div>   
    ` 
    card.innerHTML = conteudo
    return card

}

const produtos = document.querySelector("[data-product]")

const render = async () => {
    try{
        const listaProdutos = await produtoServices.listaProdutos()
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl))
            
        });

    }
    catch(erro){
        console.log(erro)
    }

}

render()
