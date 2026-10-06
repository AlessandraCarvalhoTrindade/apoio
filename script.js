function gerarApoio() {
    const texto = document.getElementById("problema").value.toLowerCase();
    const respostaDiv = document.getElementById("resposta");

    if (texto.trim() === "") {
        respostaDiv.innerHTML = "Por favor, escreva um pouco sobre o que você está sentindo.";
        respostaDiv.classList.add("mostrar");
        return;
    }

    let mensagem = "";

    if (texto.includes("ansio") || texto.includes("ansiedade") || texto.includes("nervos")) {
        mensagem = "Respire fundo. A ansiedade é difícil, mas ela passa. Tente fazer uma pausa de 5 minutos sem celular e só observe sua respiração. Você não precisa resolver tudo agora.";
    } 
    else if (texto.includes("trist") || texto.includes("deprim") || texto.includes("desanim")) {
        mensagem = "Sinto muito que você esteja se sentindo assim. Seus sentimentos são válidos. Tente fazer uma coisa pequena hoje que te faça bem, mesmo que seja só tomar um banho quente ou ouvir uma música. Você não está sozinha.";
    }
    else if (texto.includes("trabalho") || texto.includes("chefe") || texto.includes("emprego") || texto.includes("tóxic")) {
        mensagem = "Ambientes de trabalho difíceis pesam muito. Lembre-se: você não é o seu emprego. Está tudo bem buscar algo melhor. Enquanto isso, proteja sua energia o máximo que puder.";
    }
    else if (texto.includes("cansad") || texto.includes("exaust") || texto.includes("sono")) {
        mensagem = "Seu corpo e mente estão pedindo descanso. Se possível, permita-se parar um pouco. Descansar também é produtivo. Você merece cuidar de si.";
    }
    else if (texto.includes("sozinh") || texto.includes("solidão") || texto.includes("abandon")) {
        mensagem = "A solidão dói, mas você não precisa carregar tudo sozinha. Conversar com alguém de confiança ou até escrever o que sente já ajuda. Você importa.";
    }
    else if (texto.includes("medo") || texto.includes("insegur")) {
        mensagem = "Ter medo é humano. Você não precisa ser corajosa o tempo todo. Dê um passo de cada vez. Você já superou coisas difíceis antes e vai conseguir de novo.";
    }
    else {
        mensagem = "Obrigada por compartilhar o que está sentindo. Seja o que for, você está fazendo o melhor que pode com o que tem agora. Seja gentil consigo mesma hoje.";
    }

    respostaDiv.innerHTML = mensagem;
    respostaDiv.classList.add("mostrar");
}
