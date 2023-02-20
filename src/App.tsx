import player from './data/player.json'

export function App() {
  return (
    <>
      <h1>CSGO Config</h1>
      <p>{player.name} ({player.nick})</p>
    </>
  )
}
