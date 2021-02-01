
//Desenvolvido por Guilherme.
var convidados = JSON.parse(localStorage.getItem("convidados") || []);

var lista = document.getElementById("lista");
var campo = document.getElementById("campo");
var botao = document.getElementById("botao");
var cpf = document.getElementById("cpf");
var dataAniver = document.getElementById("dataAniver");



botao.onclick = function(it){
        var pessoa = {}
        var nome = campo.value;
        pessoa.nome = nome;
        campo.value = "";
        var ident = cpf.value;
        pessoa.ident = ident;
        cpf.value = "";
        var niver = dataAniver.value;
        pessoa.niver = niver;
        dataAniver.value = "";
        convidados.push(pessoa);

    if(pessoa.niver >= 18){
        alert("liberado");
        
        
    }else {
        alert("barrado");
    }

    salvarConvidados();
    listarConvidados();
};



function salvarConvidados (){
    localStorage.setItem("convidados", JSON.stringify(convidados));
};

function listarConvidados () {
    lista.innerHTML = "";   
    
    for (const convidado of convidados ) {
        

        

        var elConvidado = document.createElement("li");
        var elNome = document.createTextNode(convidado.nome);
        var elCpf = document.createTextNode(convidado.ident);
        var elDate = document.createTextNode(convidado.niver);
        var traco = document.createTextNode(" - ");
        var traco1 = document.createTextNode(" - ");
        var ponto = document.createTextNode(" : ");
      
        
        var excluir = document.createElement("a");
        excluir.setAttribute("href", "#");
        excluir.text = 'Excluir';
        excluir.onclick = function (){
            convidados = convidados.filter(function(item){
                return item.nome !== convidado.nome;
               
               
            })

            salvarConvidados();
            listarConvidados();
        };


        elConvidado.appendChild(elNome);
        elConvidado.appendChild(traco);
        elConvidado.appendChild(elCpf);
        elConvidado.appendChild(traco1);
        elConvidado.appendChild(elDate);
        elConvidado.appendChild(ponto);
        elConvidado.appendChild(excluir);
        lista.appendChild(elConvidado);

        
    }

   
}

listarConvidados();



 
