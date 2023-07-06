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
p3 = new Pessoa("Lucas", 27, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Nunc euismod ultrices diam, ac scelerisque leo condimentum vitae.");
p4 = new Pessoa("Alice", 23, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Aenean4 iaculis velit sit amet nunc convallis semper");
p5 = new Pessoa("Sophi", 25, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Donec a nulla vitae tellus faucibus elementum.");
p6 = new Pessoa("Caio", 28, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Vestibulum luctus euismod dolor, vitae posuere tellus eleifend nec.");
p7 = new Pessoa("Pedro", 23, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Sed arcu dolor, lacinia sed neque non, ornare bibendum justo.");
p8 = new Pessoa("Luisa", 28, "https://github.com/DeboraAve/Clone-Tinder/blob/40b85e1cad8835b65df6e6fd76f06a0deab0cbc9/img/homem2.jpg?raw=true", "Nunc fringilla tristique ipsum, a finibus est pellentesque in.");

simulaBanco = [p1,p2,p3,p4,p5,p6,p7,p8];

function preencheDados(){
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let bio = document.getElementById("bio");
    let foto = document.getElementById("foto");

    if(atual == 0){
        nome.innerHTML = simulaBanco[atual].getNome();
        idade.innerHTML = simulaBanco[atual].getIdade();
        bio.innerHTML = simulaBanco[atual].getBio();
        foto.style.setProperty("background-image", `url("${simulaBanco[atual].getLinkImagem()}")`);
        atual++;
        return
    }

    for(let i = 1; i < simulaBanco.length;i++){
        if(i == atual){
            nome.innerHTML = simulaBanco[i].getNome();
            idade.innerHTML = simulaBanco[i].getIdade();
            bio.innerHTML = simulaBanco[i].getBio();
            foto.style.setProperty("background-image", `url("${simulaBanco[i].getLinkImagem()}")`);
        }                    
    }
    atual++;
    if(atual == simulaBanco.length)
        atual = 0
    return
}

function exibirModal(opcao, element){
    cancelaFoco(element);
    document.getElementById("modal").style.display = "flex"
    let mensagem = document.getElementById("mensagem-modal");
    preencheDados();
    if (opcao == 1) {
        mensagem.innerHTML = "PRÓXIMO!!";
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

function cancelaFoco(e){
    e.blur();
}

function naoGostei(e){
    exibirModal(1, e);
}

function amar(e){
    exibirModal(2, e);
}

function gostar(e){
    exibirModal(3, e);
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
}
