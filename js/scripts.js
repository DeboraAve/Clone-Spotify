class Pessoa {
    nome;
    idade;
    linkImagem;
    bio;

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getLinkImagem(){
        return this.linkImagem;
    }

    getBio(){
        return this.bio;
    }

    constructor(nome, idade, linkImagem, bio){
        this.nome = nome;
        this.idade = idade;
        this.linkImagem = linkImagem;
        this.bio = bio;
    }
}

let atual = 0;

p1 = new Pessoa("Mark", 25, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem.jpg?raw=true", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
p2 = new Pessoa("João", 35, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Aenean iaculis velit sit amet nunc convallis semper");
simulaBanco = [p1,p2];

function preencheDados(){
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let bio = document.getElementById("bio");
    let foto = document.getElementById("foto");

    for(let i = 0; i < simulaBanco.length;i++){
        if(i != atual){
            nome.innerHTML = simulaBanco[i].getNome();
            idade.innerHTML = simulaBanco[i].getIdade();
            bio.innerHTML = simulaBanco[i].getBio();
            foto.style.setProperty("background-image", `url("${simulaBanco[i].getLinkImagem()}")`);
            if(atual == 0){
                atual = 1;
                return;
            }
            atual = 0;
            return;
        }
    }
}

function exibirModal(opcao){
    document.getElementById("modal").style.display = "flex"
    let mensagem = document.getElementById("mensagem-modal")
    if (opcao == 1) {
        mensagem.innerHTML = "PRÓXIMO!!";
        // document.write("PRÓXIMO!!")
    }else if (opcao == 2) {
        mensagem.innerHTML = "SUPER LIKE ENVIADO!!";
    }else if(opcao == 3) {
        let sorteio = Math.random();
        if (sorteio > 0.5)
            mensagem.innerHTML = "É UM MATCH!!"
        else
            mensagem.innerHTML = "LIKE ENVIADO!"
    }
}

function naoGostei(){
    exibirModal(1);
    preencheDados();
}

function amar(){
    exibirModal(2);
    preencheDados();
}

function gostar(){
    exibirModal(3);
    preencheDados();
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}
