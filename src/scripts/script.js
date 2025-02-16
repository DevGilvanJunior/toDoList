const tarefa = document.getElementById("textTarefas")
const listaCompleta = document.querySelector(".listaDeTarefas")

//evento abaixo cria o evento para adicionar tarefa com enter
tarefa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTarefa();
    }
});

let listaDeTarefas = []

function addTarefa(){

        if(tarefa.value){

            listaDeTarefas.push({
                item: tarefa.value,
                concluida: false
            })
            
            renderizarTarefas()
    
            tarefa.value  = ""
            tarefa.focus()
        }
        else{
            alert("É preciso digitar uma tarefa, tente novamente!")
        }
        

    
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

    localStorage.setItem('lista', JSON.stringify(listaDeTarefas))

}

function concluirTarefa(index) {
    listaDeTarefas[index].concluida = !listaDeTarefas[index].concluida
    renderizarTarefas()
}

function deletarTarefa(index) {
    listaDeTarefas.splice(index, 1)
    renderizarTarefas()
}

function recarregarTarefas(){
    const tarefasDoLocalStorege = localStorage.getItem('lista')

    if (tarefasDoLocalStorege){
        listaDeTarefas = JSON.parse(tarefasDoLocalStorege)
    }

    renderizarTarefas()
}

function concluirTodasTarefas() {
    const todasConcluidas = listaDeTarefas.every(tarefa => tarefa.concluida);
    listaDeTarefas.forEach(tarefa => tarefa.concluida = !todasConcluidas);
    renderizarTarefas();
}

function excluirTodasTarefas(){
    if (listaDeTarefas.length === 0){
        alert('Não há tarefas para excluir.')
    } else {
        listaDeTarefas = []
    }
    
    renderizarTarefas()
}


recarregarTarefas()
