import { produtoServices } from "../servicos/produto-servicos.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNome = document.querySelector("[data-nome]");
const inputPreco = document.querySelector("[data-preco]");
const inputDescricao = document.querySelector("[data-descricao]");

produtoServices.listaUmProduto(id).then((dados) => {
  inputImageUrl.setAttribute("src", dados.imageUrl);
  inputNome.value = dados.name;
  inputPreco.value = dados.price;
  inputDescricao.value = dados.description;
});

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  produtoServices
    .alteraProduto(id, inputNome.value, inputPreco.value, inputDescricao.value)
    .then(() => {
      window.location.href = "../views/produto.html";
    });
});
