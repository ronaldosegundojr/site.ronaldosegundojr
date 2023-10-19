function runMatrixAnimation() {
    const spanText = document.querySelector('.text');
    const cursor = document.querySelector('.cursor');
    const text = [
      'Wake up, Neo.',
      'The Matrix has you...',
      'Follow the white rabbit...',
      'Knock knock, Neo.'
    ];
  
    let activeText = 0;
    let activeLetter = -50;
  
    // Adicione uma classe ao elemento spanText para aumentar o tamanho da fonte
    spanText.classList.add('larger-font');
  
    const addLetter = () => {
      if (activeLetter >= 0) {
        spanText.textContent += text[activeText][activeLetter];
      }
      activeLetter++;
      if (activeLetter === text[activeText].length) {
        activeText++;
        if (activeText === text.length) {
          setTimeout(() => {
            // Exibir o gif após alguns segundos
            showGif();
          }, 2000);
          return;
        }
        return setTimeout(() => {
          activeLetter = 0;
          spanText.textContent = '';
          addLetter();
        }, 3000);
      }
      setTimeout(addLetter, 100);
    };
  
    const cursorAnimation = () => {
      cursor.classList.toggle('active');
    };
  
   
  
    addLetter();
    setInterval(cursorAnimation, 500);
  }

  runMatrixAnimation();