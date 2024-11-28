function calcularDano(poderAtaque, tipo, ambiente) {
    const multiplicadoresTipo = [2, 2, 2, 2, 2];
    const multiplicadoresAmbiente = [1.5, 1.5, 1.5, 1.5, 1.5];
    let dano = poderAtaque * multiplicadoresTipo[tipo - 1];
    dano *= multiplicadoresAmbiente[ambiente - 1];

    if (tipo === 2 && ambiente === 1) {
        dano /= 2;
    } else if (tipo === 1 && ambiente === 2) {
        dano /= 2;
    } else if (tipo === 3 && ambiente === 4) {
        dano /= 2;
    } else if (tipo === 5 && ambiente === 2) {
        dano /= 2;
    } else if (tipo === 4 && ambiente === 2) {
        dano /= 2;
    }

    if (dano > 100) {
        if (tipo === 1) {
            dano = dano * 1.5;
            alert("Poder especial: Tsunami ativado! O dano foi aumentado em 50%.");
        } else if (tipo === 2) {
            dano = dano * 1.5;
            alert("Poder especial: Lâminas de Fogo ativado! O dano foi aumentado em 50%.");
        } else if (tipo === 3) {
            dano = dano * 1.5;
            alert("Poder especial: Relâmpago Roxo ativado! O dano foi aumentado em 50%.");
        } else if (tipo === 4) {
            dano = dano * 1.5;
            alert("Poder especial: Avalanche ativado! O dano foi aumentado em 50%.");
        } else if (tipo === 5) {
            dano = dano * 1.5;
            alert("Poder especial: Vinhedo ativado! O dano foi aumentado em 50%.");
        }
    }

    return dano;
}


function obterDadosPersonagem(nome) {
    let nomePersonagem = prompt(`Qual o nome de ${nome}?`);
    let poderAtaque = Math.floor(Math.random() * 50) + 1;
    let tipo = Math.floor(Math.random() * 5) + 1;
    let ambiente = Math.floor(Math.random() * 5) + 1;
    const tipos = ['Água', 'Fogo', 'Elétrico', 'Gelo', 'Planta'];
    const ambientes = ['Praia', 'Vulcão', 'Usina hidrelétrica', 'Montanhas nevadas', 'Floresta',];
    alert(`${nomePersonagem}, seu poder de ataque é ${poderAtaque}, tipo de ataque é ${tipos[tipo - 1]} e o ambiente é ${ambientes[ambiente - 1]}`);
    return {
        nome: nomePersonagem,
        poderAtaque: poderAtaque,
        tipo: tipo,
        ambiente: ambiente
    };
}

function compararResultados(danoPersonagem1, danoPersonagem2, nome1, nome2) {
    if (danoPersonagem1 > danoPersonagem2) {
        alert(`${nome1} venceu a batalha!`);
    } else if (danoPersonagem1 < danoPersonagem2) {
        alert(`${nome2} venceu a batalha!`);
    } else {
        alert("A batalha terminou em empate!");
    }
}

let personagem1 = obterDadosPersonagem("Jogador 1");
let personagem2 = obterDadosPersonagem("Jogador 2");

let danoPersonagem1 = calcularDano(personagem1.poderAtaque, personagem1.tipo, personagem1.ambiente);
let danoPersonagem2 = calcularDano(personagem2.poderAtaque, personagem2.tipo, personagem2.ambiente);

alert(`${personagem1.nome} tem um poder de ataque final de ${danoPersonagem1}`);
alert(`${personagem2.nome} tem um poder de ataque final de ${danoPersonagem2}`);

compararResultados(danoPersonagem1, danoPersonagem2, personagem1.nome, personagem2.nome);
