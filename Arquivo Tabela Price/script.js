// FUNÇÃO QUE CALCULA PRICE E EXIBE OS RESULTADOS NA TABELA
function price() {
    // OBTENDO OS VALORES DIGITADOS PELO USUÁRIO
    let v = parseFloat(document.getElementById('v').value);
    let i = parseFloat(document.getElementById('i').value);
    let n = parseFloat(document.getElementById('n').value);

    // CÁLCULO DO JUROS E DA PRESTAÇÃO
    let juros = v * i;
    let p = (v * Math.pow(1 + i, n) * i) / (Math.pow(1 + i, n) - 1);
    let amor = p - juros;

    // MOSTRA AO CORPO DA TABELA ONDE AS LINHAS SERÃO INSERIDAS
    let corpo = document.querySelector('table tbody');

    // LINHA INICIAL DA TABELA (ANTES DAS PARCELAS)
    let linha1 = `
                <tr>
                    <td>0</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${v.toFixed(2)}</td>
                </tr>
                `;

    // VERIFICAÇÃO DE CAMPOS INVÁLIDOS
    if (isNaN(v) || isNaN(i) || isNaN(n)) {
        alert('Um ou mais campos foram preenchidos incorretamente. Certifique-se de que todas as informações são números válidos.');
    } else {
        // COLOCANDO A LINHA INICIAL NA TABELA
        corpo.innerHTML = linha1;

        // LOOP PARA CALCULAR E INSERIR CADA PARCELA NA TABELA
        for (let par = 1; par <= n; par++) {
            let linha = `
                <tr>
                    <td>${par}</td>
                    <td>${p.toFixed(2)}</td>
                    <td>${juros.toFixed(2)}</td>
                    <td>${amor.toFixed(2)}</td>
                    <td>${(v - amor).toFixed(2)}</td>
                </tr>
                `;

            // ADICIONANDO A NOVA LINHA AO CORPO DA TABELA
            corpo.innerHTML += linha;

            // ATUALIZANDO OS VALORES PARA O PRÓXIMO CALCULO
            v = v - amor;
            juros = v * i;
            amor = p - juros;
        }
    }
}

// FUNÇÃO QUE AVALIA AS RESPOSTAS DO QUESTIONÁRIO
function resposta() {
    // SELECIONANDO AS RESPOSTAS ESCOLHIDAS PELO USUÁRIO
    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');

    // INICIO DO CONTADOR DE RESPOSTAS CORRETAS
    var contador = 0;

    // VERIFICA SE TODAS AS QUESTÕES FORAM RESPONDIDAS
    if (resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8 && resp9 && resp10) {
        // VERIFICA CADA RESPOSTA, INCREMENTA O CONTADOR SE CORRETA, EXIBE MENSAGENS
        if (resp1.value == "correta") {
            document.getElementById("resp_correta_1").innerHTML = "<p>Correta!</p>";
            contador = contador + 1;
        } else {
            document.getElementById("resp_errada_1").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 1200; i = 0,02; n = 12.<br> Resposta correta: 113,47</p>";
        }
        // REPETE A LÓGICA PARA TODAS AS QUESTÕES
        if (resp2.value == "correta") {
            document.getElementById("resp_correta_2").innerHTML = "<p>Correta!</p>";
            contador = contador + 1;
        } else {
            document.getElementById("resp_errada_2").innerHTML = "<p>Incorreta. Resposta correta: 675,06</p>";
        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "<p>Incorreta. Utilize os dados da questão: P = 1035,62; i = 0,01; n = 24.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 22000</p>"
        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 100000; i = 0,0099; n = 240.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 1092,73</p>"
        }
        if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 10000; i = 0,015; n = 12.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 917,00</p>"
        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 15000; i = 0,02; n = 24.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 19046,40</p>"
        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 10000; i = 0,015; n = 18.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 19046,40</p>"
        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 20000; i = 0,018; n = 36.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 27411,68</p>"
        }
        if(resp9.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 18000; i = 0,014; n = 36.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 608,47</p>"
        }
        if(resp10.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "<p>Correta!</p>"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "<p>Incorreta. Utilize os dados da questão: PV = 20000; i = 0,018; n = 36.<br> Substitua os valores na fórmula pelos valores dados.<br><br> Resposta correta: 27411,68</p>"
        }

        // EXIBE O TOTAL DE RESPOSTAS CORRETAS
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    } else {
        // ALERTA O USUÁRIO CASO ALGUMA QUESTÃO NÃO TENHA SIDO RESPONDIDA
        alert("Não deixe questões em branco!");
    }
}
