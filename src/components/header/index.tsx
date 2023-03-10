import player from '../../data/player.json'
import './styles.css'

export function Header() {
  const [firstName, lastName] = player.name.split(' ')

  return (
    <header id="header">
      <h1>CSGO Config</h1>
      <p>
        {firstName} <span>&lsquo;{player.nick}&lsquo;</span> {lastName}
      </p>
    </header>
  )
}
