const loveMessages = [
    "Você é o amor da minha vida, hoje e sempre.",
    "Cada dia ao seu lado é um presente que agradeço todos os dias.",
    "Meu amor por você cresce mais a cada dia.",
    "Quando penso em felicidade, penso em você.",
    "Nada neste mundo pode mudar o que sinto por você.",
        "Você é o amor da minha vida.",
        "Com você, tudo é melhor.",
        "Meu coração é seu, hoje e sempre.",
        "Você é meu lugar favorito.",
        "Cada segundo com você é precioso.",
        "Você ilumina minha vida.",
        "Te amo mais que tudo.",
        "Obrigado por ser meu amor.",
        "Você é minha paz.",
        "Você é o meu mundo.",
        "Minha vida faz sentido com você.",
        "Te amo mais que ontem e menos que amanhã.",
        "Com você, sou eu mesmo.",
        "Meu coração é mais feliz com você.",
        "Meu amor por você é infinito.",
        "Você me completa.",
        "Você é o sorriso no meu rosto.",
        "Você é meu sonho realizado.",
        "Amo quando você sorri.",
        "Sou grato por cada momento ao seu lado.",
        "Você é minha razão para sorrir.",
        "Você é o amor da minha vida.",
        "Meu amor, você é minha felicidade.",
        "Com você, a vida é colorida.",
        "Você é minha luz na escuridão.",
        "Te amo mais do que palavras podem dizer.",
        "Você é minha inspiração diária.",
        "Não posso imaginar minha vida sem você.",
        "Cada momento com você é mágico.",
        "Com você, a vida é mais doce.",
        "Meu amor, você é tudo para mim.",
        "Você é meu porto seguro.",
        "Te amo como nunca amei ninguém.",
        "Cada beijo seu é inesquecível.",
        "Sou feliz por ter você.",
        "Você é meu tudo.",
        "A vida tem sentido com você.",
        "Cada abraço seu é o melhor do mundo.",
        "Você é a melhor parte de mim.",
        "Você é meu maior presente.",
        "Você é minha alma gêmea.",
        "Meu amor é eterno.",
        "Te amar é fácil e natural.",
        "Com você, tudo é mais bonito.",
        "Você é minha fonte de alegria.",
        "Amo cada pedacinho de você.",
        "Meu amor por você só cresce.",
        "Você é meu lar.",
        "Te amar é a melhor parte do meu dia.",
        "Seu sorriso é meu tesouro.",
        "Cada olhar seu me apaixona.",
        "Sou abençoado por ter você.",
        "Você é meu sol em dias nublados.",
        "Meu coração bate por você.",
        "Com você, sou feliz.",
        "Você é minha melhor escolha.",
        "Te amo, e sempre vou amar.",
        "Não existe amor maior que o meu.",
        "Te amar é meu destino.",
        "Você é meu melhor amigo.",
        "Você é meu anjo.",
        "Sou louco por você.",
        "Cada mensagem sua ilumina meu dia.",
        "Você é meu paraíso.",
        "Te amo com toda minha alma.",
        "A vida é melhor com você.",
        "Te amar é a melhor sensação.",
        "Com você, encontrei minha paz.",
        "Você é a razão do meu sorriso.",
        "Amo você, ontem, hoje e amanhã.",
        "Você é meu tesouro.",
        "Não existe amor como o nosso.",
        "Sou grato por ter você.",
        "Você é meu lugar feliz.",
        "Você é minha eterna paixão.",
        "Amo cada detalhe seu.",
        "Você me faz querer ser melhor.",
        "Com você, sou completo.",
        "Você é a razão do meu coração.",
        "Cada palavra sua me encanta.",
        "Você é minha melodia favorita.",
        "Minha vida é mais brilhante com você.",
        "Te amo mais a cada dia.",
        "Você é minha fonte de alegria.",
        "Você me faz acreditar no amor.",
        "Amo estar ao seu lado.",
        "Seu amor é meu maior presente.",
        "Cada toque seu me derrete.",
        "Te amar é uma bênção.",
        "Você é meu sonho realizado.",
        "Você é minha felicidade.",
        "Não existe amor maior.",
        "Sou feliz por ser seu.",
        "Com você, tenho tudo.",
        "Cada dia ao seu lado é especial.",
        "Você é minha outra metade.",
        "Te amar é meu propósito.",
        "Sou grato por cada segundo.",
        "Meu amor por você é eterno.",
        "Você é minha doce companhia.",
        "Te amo de todo coração.",
        "Cada palavra sua é uma música.",
        "Amo o jeito que você me ama.",
        "Sou sortudo por ter você.",
        "Te amo além das palavras.",
        "Você é meu para sempre.",
        "Sua presença é tudo para mim.",
        "Sou mais feliz com você.",
        "Meu amor é infinito.",
        "Você é minha paz.",
        "Sou melhor ao seu lado.",
        "Amo o jeito que você me olha.",
        "Você é meu único amor.",
        "Te amo até o infinito.",
        "Sou grato por ter você.",
        "Cada momento é especial"
      
  ];

  function showLoveMessage() {
    const messageIndex = Math.floor(Math.random() * loveMessages.length);
    const message = loveMessages[messageIndex];
    document.getElementById("loveMessage").innerText = message;
  }
  