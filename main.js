var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  }
  
  var rafa = {
    nome:"Rafa",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  
  //CHAMANDO A FUNÇÃO DE CÁLCULO DE PONTOS
  rafa.pontos = calculaPontos(rafa)
  paulo.pontos = calculaPontos(paulo)
  
  //DECLARAÇÃO DA FUNÇÃO DE CÁLCULO DE PONTOS
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
  }
  
  //EXIBIR TABELA NA TELA
  var jogadores = [rafa, paulo]
  
  exibirJogadoresNaTela(jogadores) //CHAMANDO A FUNÇÃO PARA EXIBIR A TABELA NA TELA
  
  //DECLARAÇÃO DA FUNÇÃO PARA EXIBIR A TABELA NA TELA
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>" //html = html + "<tr><td>" + ...
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
    
  function adicionarEmpate(i){
   var jogador = jogadores[i]
   jogador.empates++
   jogador.pontos = calculaPontos(jogador)
   exibirJogadoresNaTela(jogadores)
    }
      
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
   exibirJogadoresNaTela(jogadores)
  }