function getById(id) {
  return document.getElementById(id);
}

// Q1
getById("btnEntradaEvento").addEventListener("click", function () {
  let textoIdade = getById("idadeEvento").value.trim();
  let ingresso = getById("possuiIngresso").value.trim().toLowerCase();
  let convite = getById("possuiConvite").value.trim().toLowerCase();
  let bloqueada = getById("estaBloqueada").value.trim().toLowerCase();
  let saida = getById("saidaEntradaEvento");

  saida.innerText = "";

  if (textoIdade === "") {
    saida.innerText = "Informe a idade.";
    return;
  }

  let idade = Number(textoIdade);
  if (isNaN(idade) || !Number.isInteger(idade) || idade < 0) {
    saida.innerText = "A idade deve ser um número inteiro não negativo.";
    return;
  }

  if (
    (ingresso !== "sim" && ingresso !== "nao") ||
    (convite !== "sim" && convite !== "nao") ||
    (bloqueada !== "sim" && bloqueada !== "nao")
  ) {
    saida.innerText = "Preencha ingresso, convite e bloqueio apenas com sim ou nao.";
    return;
  }

  let temIngresso = ingresso === "sim";
  let temConvite = convite === "sim";
  let estaBloqueado = bloqueada === "sim";

  if (idade >= 16 && (temIngresso || temConvite) && !estaBloqueado) {
    saida.innerText = "Entrada permitida.";
  } else {
    saida.innerText = "Entrada não permitida.";
  }
});

// Q2
getById("btnCalcular").addEventListener("click", function () {
  let textoNum1 = getById("calcNum1").value.trim();
  let textoNum2 = getById("calcNum2").value.trim();
  let operacao = getById("calcOperacao").value.trim();
  let saida = getById("saidaCalculadora");

  saida.innerText = "";

  if (textoNum1 === "" || textoNum2 === "") {
    saida.innerText = "Preencha os dois números.";
    return;
  }

  let num1 = Number(textoNum1);
  let num2 = Number(textoNum2);

  if (isNaN(num1) || isNaN(num2)) {
    saida.innerText = "Informe valores numéricos válidos.";
    return;
  }

  switch (operacao) {
    case "+":
      saida.innerText = "Resultado: " + (num1 + num2);
      break;
    case "-":
      saida.innerText = "Resultado: " + (num1 - num2);
      break;
    case "*":
      saida.innerText = "Resultado: " + (num1 * num2);
      break;
    case "/":
      if (num2 === 0) {
        saida.innerText = "Erro: divisão por zero não é permitida.";
        return;
      }
      saida.innerText = "Resultado: " + (num1 / num2);
      break;
    default:
      saida.innerText = "Operação desconhecida. Utilize +, -, * ou /.";
  }
});

// Q3
getById("btnPares").addEventListener("click", function () {
  let textoN = getById("numeroLimiteN").value.trim();
  let saida = getById("saidaPares");

  saida.innerText = "";

  if (textoN === "") {
    saida.innerText = "Informe um número inteiro N de 1 a 100.";
    return;
  }

  let n = Number(textoN);
  if (!Number.isInteger(n) || n < 1 || n > 100) {
    saida.innerText = "Digite um número inteiro N entre 1 e 100.";
    return;
  }

  let pares = [];
  let quantidade = 0;
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      pares.push(i);
      quantidade++;
      soma += i;
    }
  }

  if (quantidade === 0) {
    saida.innerText =
      "Não há números pares no intervalo.\n" +
      "Quantidade: 0\n" +
      "Soma: 0";
  } else {
    saida.innerText =
      "Números pares: " + pares.join(", ") + "\n" +
      "Quantidade: " + quantidade + "\n" +
      "Soma: " + soma;
  }
});

// Q4
getById("btnSimularEconomia").addEventListener("click", function () {
  let textoMeta = getById("metaEconomia").value.trim();
  let textoDeposito = getById("depositoMensal").value.trim();
  let saida = getById("saidaEconomia");

  saida.innerText = "";

  if (textoMeta === "" || textoDeposito === "") {
    saida.innerText = "Preencha a meta e o valor do depósito mensal.";
    return;
  }

  let meta = Number(textoMeta);
  let deposito = Number(textoDeposito);

  if (
    !Number.isInteger(meta) || meta < 1 || meta > 10000 ||
    !Number.isInteger(deposito) || deposito < 1 || deposito > 10000
  ) {
    saida.innerText = "Informe valores inteiros de 1 a 10.000 reais nos dois campos.";
    return;
  }

  let saldo = 0;
  let meses = 0;
  let linhas = "";

  while (saldo < meta) {
    meses++;
    saldo += deposito;
    linhas += "Depósito " + meses + ": R$ " + saldo + "\n";
  }

  linhas += "Depósitos necessários: " + meses + "\n";
  linhas += "Saldo final: R$ " + saldo;

  saida.innerText = linhas;
});
