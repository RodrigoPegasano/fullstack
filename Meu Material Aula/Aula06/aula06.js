// Exemplo de duas pessoas trabalhando no mesmo repositorio


// Caso 1:
// Matias mexeu e adicionou algo na linha 11
// Rodrigo mexeu na linha 15 mas não conseguiu adicionar pois deu erro
   // Como arrumar?
     // Rodrigo precisa colocar 'git pull origin master' e não haverá conflito entre o que adicionaram os dois pois são linhas diferentes


// Caso 2:
// Matias mexeu na linha 11 e adicionou no git
// Rodrigo mexeu na linha 11 e tentou adicionar
   // Deu erro no do Rodrigo e mostra o 'Current Change' (o que eu fiz) e o 'Incoming Change' (O que o Matias fez)
   // Precisamos escolher o que fazer:
      // 'Accept Current Change': Mantem o que o Rodrigo editou e descarta o que o Matias fez
      // 'Accept Incoming Change': Mantem o que o Matias fez e descarta o que o Rodrigo fez
      // 'Accept Both Changes': Aceita os dois. Deixa o current encima e logo na sequencia o Incoming
      // 'Compare Changes': Te mostra os dois lado a lado para poder comparar as duas mudanças