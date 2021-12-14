import './App.css';
import { Card } from "./components/Card";


let heroes = [
  {
      name: `Бэтмен`,
      universe: `DC Comics`,
      alter: `Брюс Уэйн`,
      job: `борец с преступностью, филантроп, миллиардер`,
      friends: `Робин, Бэтгерл`,
      powers: `интеллект, обширные познания, знания боевых искусств, ловкость`,
      likes: "no",
      pic: `./pics/batman.jpg`
},

  {
      name: `Супермен`,
      universe: `DC Comics`,
      alter: `Кларк Кент`,
      job: `борец за справедливость`,
      friends: "собака Крипто",
      powers: `непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм`,
      likes: "no",
      pic: `./pics/superman.jpg`
  },

  {
      name: `Железный человек`,
      universe: `Marvel Comics`,
      alter: `Тони Старк`,
      job: `гений, миллиардер, плейбой, филантроп`,
      friends: `мстители`,
      powers: `высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, костюмы`,
      likes: "no",
      pic: `./pics/ironman.jpg`
  },

  {
      name: `Человек-паук`,
      universe: `Marvel Comics`,
      alter: `Питер Паркер`,
      job: `борец за справедливость, студент, фотограф`,
      friends: `Мстители, Фантастическая четверка, Люди Икс`,
      powers: `высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы`,
      likes: "no",
      pic: `./pics/spiderman.jpg`
  },

  {
      name: `Капитан Америка`,
      universe: `Marvel Comics`,
      alter: `Стивен Роджерс`,
      job: `супер-солдат`,
      friends: `Мстители`,
      powers: `сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя`,
      likes: "no",
      pic: `./pics/captain.jpg`
  },

  {
      name: `Тор`,
      universe: `Marvel Comics`,
      alter: `Тор Одинсон`,
      job: `борец за справедливость, скандинавский бог`,
      friends: `Мстители`,
      powers: `все, что может бог, плюс молот Мьелнир`,
      likes: "no",
      pic: `./pics/tor.jpg`
  },

  {
      name: `Чудо-женщина`,
      universe: `DC Comics`,
      alter: "Диана Принс",
      job: `супергероиня, секретарь-референт`,
      friends: `Мстители`,
      powers: `сверхчеловеческая сила искорость, выносливость, полет`,
      likes: "no",
      pic: `./pics/wonder.jpg`
  },

  {
      name: `Черная вдова`,
      universe: `arvel Comics`,
      alter: `Наташа Романофф`,
      job: `супергероиня, шпионка`,
      friends: `Мстители`,
      powers: `пик человеческого физического потенциала, замедленное старение, знание многих языков`,
      likes: "no",
      pic: `./pics/widow.jpg`
  },

  {
      name: `Дэдпул`,
      universe: `Marvel Comics`,
      alter: `Уэйд Уинстон Уилсон`,
      job: `антигерой, наемник`,
      friends: `частично Мстители, Человек-паук, Росомаха`,
      powers: ` высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система`,
      likes: "no",
      pic: `./pics/deadpool.jpg`
  }

]

function App() {
  return (
    <div className="App">
      {
        heroes.map( (elem, index) => {
          return(
            <Card cardInfo={elem} key={index}/>
          )
        } )
      }
    </div>
  );
}

export default App;
