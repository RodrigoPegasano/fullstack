// Aprendendo sobre o git:

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
//    Criar repositor e ele te dará um link

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