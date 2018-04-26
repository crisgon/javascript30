  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const gameTimer = document.querySelector('.timer');
  const name = document.querySelector('.name');
  const scoreList = document.querySelector('.scoreList')
  let lastHole;
  let timeUp = false;
  let count = 10;
  let time;
  let nameScore;
  let score = 0;
  let storage = JSON.parse(localStorage.getItem('Score')) || [];

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
      console.log('Xiiiii');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');

    setTimeout(()=> {
      hole.classList.remove('up');
      if(!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    count = 10;
    nameScore = name.value;
    peep();
    time = setInterval(()=>{
        gameTimer.textContent = count;
        if(count <= 0) {
          timeUp = true;
          clearInterval(time);
          storeScore(score);
          showScore(storage);
        };
        count--;
      }, 1000)
  }

  function bonk(e) {
    if(!e.isTrusted) return //Cheater!!!!!!!!!
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
  }

  function storeScore(score) {
    storage.push({name: nameScore, score});
    localStorage.setItem('Score', JSON.stringify(storage));
    console.log(score);
  }

  function showScore(items) {
    let list = items.map(item => {
      return `<li>${item.name} - ${item.score}</li>`;
    }).join('') || 'No records found =/';
    scoreList.innerHTML = list;
  }

  window.addEventListener('load', ()=> showScore(storage));
  moles.forEach(mole => mole.addEventListener('click', bonk));