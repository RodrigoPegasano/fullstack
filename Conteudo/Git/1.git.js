// Aprendendo sobre o git:
// OBS: Em algumas empresas usam outro programa que tem a mesmo funconalidade e funciona exatamente igual. (Bitbucket)

// O git é um software para poder fazer backup e compartilhar pastas ou arquivos de códigos.

// 'git --version' : Mostrará a versão do git instalado





// Como colocar o material em um repositor?
// 1. Achar a pasta onde queremos mexer:
//    get cd desktop (ou o que for)

// 2. Após achar a pasta:
//    get init
//    get config user.name "seu nome"
//    get config user.name (para ver se foi certo)
//    get config user.email "seu email"
//    get config user.email (para ver se foi certo)

// 3. Criando repositor no GitHub:
//    Criar repositorio e ele te dará um link

// 4. No terminal colocar:
//    git remote add origin "link do repositor"
//    git remote -v (para ver se o link foi certo)

// 5. Precisamos adicionar as pastas ou arquivos que quisermos. Para isso:
//    git status (mostra o status atual, o que tem nele e o que não)
//    git add nomePasta (para adicionar a pasta ou arquivo. Sendo nomePasta o nome da pasta)
//    git add . (adicionar tudo de uma vez só)

// 6. Após adicionar cada elemento ou fizermos alguma modificação. Devemos colocar um comentario para 
//    conseguir apagar alguma parte se precisar no futuro
//    git commit -m "comentario"

// 7. Para passar para o repositorio no GitHub:
//    git push origin master
//    git pull (para voltar caso dê erro e depois tentar o git abaixo)
//    git push -f origin master (caso o primeiro dê erro)





// Para baixar arquivos do git
// 1. No GitHub, ir no repositorio desejado e copiar o link

// 2. No terminal primeiro ir na area do computador de facil acesso
//    cd desktop

// 3. Clonar o link:
//    git clone link
//    ls (se quisermos ver o que tem dentro do link clonado)

// 4. Entrar no conteudo dentro do link:
//    cd nomeArquivo
//    ls (para ver se deu certo)





// git pull origin master (usado quando você já tem um clone no seu computador e só quer baixar o que tem de novo)





// Branch
// São uma 'linha' de desenvolvimento diferente da utilizada para testar novas funcionalidades sem interferir na linha principal, chamada de master

// Criando branch
// git branch 'nome da branch'

// Para utilizar uma branch
// git checkout 'nome da branch já existente'

// para criar uma branch e utilizar ela em um só comando
// git checkout -b 'nome da branch'

// Para listar todas as branches do repositorio local
// git branch

// Para listar todas as branches locais e remotas
// git branch -a





// Log
// Com ele podemos listar o historico de commits





// Head
// O head é uma referencia ao estado atual do seu repositorio. É comum que ele esteja apontando para o último commit.

// Para nos movermos em qualquer commit
// git checkout 'os primeiros digitos do hash' (estão do lado de cada commit no github)

// Link para treinamento: https://learngitbranching.js.org/?NODEMO=&locale=pt_BR
// Link explicação do material com gatos: https://girliemac.com/blog/2017/12/26/git-purr/





// Desfazendo mudanças
// Mudanças que não foram adicionadas no stage
// git checkout -- nome do arquivo

// Mudanças no stage, mas não commitadas
// git checkout HEAD -- nome do arquivo





// Revert
// Revertendo uma alteração
// git revert hashDoCommit


// Reset
// Move o apontador da branch para otro commit
// git reset --hard hashDoCommit


// Merge
// Une duas branches em uma nova
// git merge outraBranch


// Rebase
// Emenda a branch atual sobre outra branch
// git rebase outraBranch





// Conflitos
// As operações de união de branches podem provocar conflitos: ocorre quando o mesmo arquivo tem a mesma parte diferente nas duas branches.
// Se fizermos o comando 'git merge nomeDoArquivo' e houver conflito, não unirá as branches

// Soluções para isso:

// Opção 1:
// Manter as linhas da branch atual

// Opção 2:
// Manter as linhas da outra branch

// Opção 3:
// Manter todas as linhas das duas branches

// opção 4:
// Criar alguma condição "if" onde dependendo do que obtiver, queremos que mantenha algumas das opções 1 ou 2

// LEMBRETE:
// Essas mudanças so serão feitas após adicionar no stage
   // git add
   // git commit -m

// Exemplo de conflitos da aula:
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


// Mais info tem o PDF na pasta Digital House sobre os comandos do git
// Ou ver o material do playground
// Mais também em Meu Material Aula > Aula06