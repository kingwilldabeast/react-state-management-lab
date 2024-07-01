import { useState } from 'react'
import './App.css'

// src/App.jsx

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
      selected: false
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
      selected: false
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
      selected: false
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
      selected: false
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
      selected: false
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
      selected: false
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
      selected: false
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
      selected: false
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
      selected: false
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
      selected: false
    },
  ])

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      const updatedFighters = zombieFighters.map(member => 
        member == fighter ? { ...member, selected: true } : member
      );
      setZombieFighters(updatedFighters);
      setMoney(money-fighter.price)
      setTotalStrength(totalStrength + fighter.strength)
      setTotalAgility(totalAgility + fighter.agility)
    } else {
      console.log("not enough money")
    }
  }

  const handleRemoveFighter = (fighter) => {
    const newTeam = team.filter((member) => member !== fighter)
    setTeam(newTeam)
    
    const updatedFighters = zombieFighters.map(member => 
      {
        // Debugging logs
        // console.log("Checking member:", member.name);
        // console.log("Fighter to remove:", fighter.name);
        // console.log("Has the same name:", member.name == fighter.name);
    
        return member.name === fighter.name ? { ...member, selected: false } : member;
      }
        );

    setZombieFighters(updatedFighters);

    setMoney(money + fighter.price)
    setTotalStrength(totalStrength - fighter.strength)
    setTotalAgility(totalAgility - fighter.agility)
  }

// console.log(zombieFighters)
  return (
    <div className='main'>
    <div className='team'>
    <h1>My Team</h1>
        <h2>$ {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
    {team.length == 0 ? 
    <h3>Add fighters to team</h3>
    :
    <div >
    {team.map((fighter, index) => (
      <ul key = {index}>
          <img src={fighter.img}/>
          <li>Name: {fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
          <button onClick={() => handleRemoveFighter(fighter)}>Remove fighter</button>
      </ul>
    ))}
    </div>
    }
    </div>

    <div className='choices'>
    <h1>Available Characters</h1>
    <div>
      {zombieFighters.map((fighter, index) => (
        (fighter.selected == false ?
        <ul key = {index}>
          <img src={fighter.img}/>
          <li>Name: {fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
          <button onClick={() => handleAddFighter(fighter)}>Add fighter</button>
        </ul>
        :
        null
        )
      ))}

    </div>

    </div>

      </div>
  );
}

export default App
