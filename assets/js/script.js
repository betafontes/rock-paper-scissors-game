const gameContainer = document.querySelector(".container"),
      userResult = document.querySelector(".user_result img"),
      cpuResult = document.querySelector(".cpu_result img"),
      result = document.querySelector(".result"),
      optionImages = document.querySelectorAll(".option_image");


// Percorra cada elemento de imagem de opção     
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "./assets/img/rock.png";
        result.textContent = "Wait... ⏰";

       // Percorre cada imagem de opção novamente
       optionImages.forEach((image2, index2) => {
       // Se o índice atual não corresponder ao índice clicado
       // remova a classe "ativa" das outras imagens de opção
       index !== index2 && image2.classList.remove("active");
       });

       gameContainer.classList.add("start");

        // Defina um tempo limite para atrasar o cálculo do resultado
       let time = setTimeout(() => {
          gameContainer.classList.remove("start");


          // Obtém a fonte da imagem da opção clicada
       let imageSrc = e.target.querySelector("img").src;
       // Define a imagem do usuário para a imagem da opção clicada
       userResult.src = imageSrc;

       // Gera um número aleatório entre 0 e 2
       let randomNumber = Math.floor(Math.random() * 3);
       // Cria um array de opções de imagem da CPU
       let cpuImages = ["./assets/img/rock.png","./assets/img/paper.png","./assets/img/scissors.png"];
       // define a imagem da cpu para uma opção aleatória do array
       cpuResult.src = cpuImages[randomNumber];

      // Atribui um valor de letra à opção de CPU (R para pedra, P para papel, S para tesoura)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Atribui um valor de letra à opção clicada (com base no índice)
      let userValue = ["R", "P", "S"][index]; 

      // Cria um objeto com todos os resultados possíveis
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // Pesquisa o valor do resultado com base nas opções do usuário e da CPU
      let outComeValue = outcomes[userValue + cpuValue];

      // Exibe o resultado
      result.textContent = userValue === cpuValue ? "Match Draw 🥹" : `${outComeValue} Won!! 🥳`;
       }, 2500);
    });
});