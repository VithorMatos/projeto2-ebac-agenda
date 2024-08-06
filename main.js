const form = document.getElementById('form');
const arrayName = []
const arrayTel= [];

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha()
    atualizaTabela()

    
})

function adicionaLinha(){
    const inputName = document.getElementById('name');
    const inpuTel = document.getElementById('tel');

    if(arrayName.includes(inputName.value)){
        alert(`O contato: '${inputName.value}' já foi inserido`)
    } else { 
    
    arrayName.push(inputName.value);
    arrayTel.push(inpuTel.value);

    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inpuTel.value}</td>`
    linha += '</tr>';

    linhas += linha;
}
    inputName.value = ''
    inpuTel.value= ''
}

function atualizaTabela(){
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas; 

}

