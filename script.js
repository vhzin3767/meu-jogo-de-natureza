const questions = [
    {
      q: "1) Quantos mols de H2 são necessários para reagir com 1 mol de O2 na reação 2H2 + O2 → 2H2O?",
      a: "2"
    },
    {
      q: "2) Quantos mols de CO2 são produzidos ao queimar 2 mols de CH4? (CH4 + 2O2 → CO2 + 2H2O)",
      a: "2"
    },
    {
      q: "3) Qual é a massa (g) de 1 mol de H2O? (H=1, O=16)",
      a: "18"
    },
    {
      q: "4) Quantas moléculas há em 1 mol de qualquer substância? (Escreva a notação científica por extenso)",
      a: "seis vezes dez elevado a vinte e três"
    },
    {
      q: "5) Quantos mols de NaCl são formados ao reagir 2 mols de Na com excesso de Cl2? (2Na + Cl2 → 2NaCl)",
      a: "2"
    },
    {
      q: "6) Qual é a massa molar do CO2? (C=12, O=16)",
      a: "44"
    },
    {
      q: "7) Se 4 mols de NH3 reagem, quantos mols de N2 são formados? (2NH3 → N2 + 3H2)",
      a: "2"
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].q;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correct = questions[currentQuestion].a.toLowerCase();
  
    if (userAnswer === correct) {
      document.getElementById('feedback').textContent = "Correto!";
      document.getElementById('feedback').className = "success";
      currentQuestion++;
      if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1000);
      } else {
        document.getElementById('game').classList.add('hidden');
        document.getElementById('endMessage').textContent = "Parabéns! Você escapou com sucesso!";
        document.getElementById('endMessage').classList.remove('hidden');
      }
    } else {
      document.getElementById('feedback').textContent = "Incorreto. Tente novamente.";
      document.getElementById('feedback').className = "fail";
    }
  }
  
  loadQuestion();
  