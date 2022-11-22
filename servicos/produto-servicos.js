
const listaProdutos = () => fetch("http://localhost:3000/produto").then(resposta => resposta.json())

export const produtoServices = {
    listaProdutos
}