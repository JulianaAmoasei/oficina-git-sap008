const banana = "banana";
const numero = 55;

function soma(num) {
  return num + num;
}

console.log(banana, numero);
console.log(soma(4)) //8

// primeiros passos

// iniciar um repositório git com o comando `git init`

  // cria uma pasta oculta `.git` no seu LOCAL (no computador)
  // Initialized empty Git repository in /home/juliana/Documents/laboratoria/SAP008/oficina-git-sap008/.git/

// criar no github.com o repositório (https://github.com/seunome/nomedoprojeto.git)
  // nesse momento o local e o remoto AINDA NÃO ESTÃO CONECTADOS

// linkar o local com o remoto 
  //git remote add origin git@github.com:JulianaAmoasei/oficina-git-sap008.git

// sincronizar o local com o remoto
  // TRÊS COMANDOS PRINCIPAIS DO GIT (por enquanto)
  // `git add .`
  // `git commit -m "primeiro commit"`
  // `git push origin master`