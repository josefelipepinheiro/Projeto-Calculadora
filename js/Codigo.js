
    let result = document.getElementById("resultado")

function investir () {

    let AporteMensal = parseInt(document.getElementById("AporteMensal").value);
    let Tempo = parseInt(document.getElementById("Tempo").value);
    let RendimentoMensal = parseInt(document.getElementById("RendimentoMensal").value);

    if (AporteMensal !== '' && Tempo !== '' && RendimentoMensal !== '') {

        const valorTOTAL = AporteMensal * Math.pow(1+RendimentoMensal/100,Tempo);
        resultado.textContent = ("2f", valorTOTAL)
    }
    else {
        resultado.textContet = 'abestado, preencha todos os itens!!';
    }
    
}
calcular.addEventListener('click', investir)

    let result2 = document.getElementById("resultado2")

function investir2 () {

    let ValordoObjetivo = parseInt(document.getElementById("ValordoObjetivo").value);
    let Rendimento = parseInt(document.getElementById("Rendimento").value);
    let Tempo2 = parseInt(document.getElementById("Tempo2").value);

    if (ValordoObjetivo !== '' && Rendimento !== '' && Tempo2 !== '') {
    
    const Aporte = ValordoObjetivo/(Math.pow(1+Rendimento/100,Tempo2)-1);
    resultado2.textContent = ("2f", Aporte)
    }
    else {
    resultado2.textContent = 'wat'
    }    
}

calcular2.addEventListener('click', investir2)