const tarefa = document.getElementById("textTarefas")
const listaCompleta = document.querySelector(".listaDeTarefas")

let listaDeTarefas = []

function addTarefa(){

        listaDeTarefas.push({
            item: tarefa.value,
            concluida: false
        })
        
        renderizarTarefas()

        tarefa.value  = ""

    
}

function renderizarTarefas(){
    let novaLi = ""

    listaDeTarefas.forEach((tarefa, index) => {
        novaLi += `
            <li class="${tarefa.concluida && "done"}"> 
                <img src="/src/img/check_icon.png" title="Clique para concluir a tarefa" onclick="concluirTarefa(${index})">
                <p class="textoTarefa">${tarefa.item}</p>
                <img src="src/img/trash_icon.png" title="Clique para excluir a tarefa" onclick="deletarTarefa(${index})">
            </li>
        `
    })

    listaCompleta.innerHTML = novaLi
}

function concluirTarefa(index) {
    listaDeTarefas[index].concluida = !listaDeTarefas[index].concluida
    renderizarTarefas()
}

function deletarTarefa(index) {
    listaDeTarefas.splice(index, 1)
    renderizarTarefas()
}
