import player from '../../data/player.json'
import './styles.css'

export function Header() {
  const [ firstName, lastName ] = player.name.split(' ')

  return (
    <header id='header'>
      <h1>CSGO Config</h1>
      <p>{firstName} <span>"{player.nick}"</span> {lastName}</p>
    </header>
  )
}