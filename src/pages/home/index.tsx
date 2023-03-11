import './styles.css'

import { DownloadButton, Header } from '../../components'

export function Home() {
  return (
    <div id="home">
      <Header />
      <main>
        <p>Pipeline</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi labore
          cupiditate earum voluptatum nulla iure odit temporibus dolorum dolorem
          maxime, nostrum officiis assumenda voluptatibus fuga blanditiis ullam
          hic praesentium exercitationem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi labore
          cupiditate earum voluptatum nulla iure odit temporibus dolorum dolorem
          maxime, nostrum officiis assumenda voluptatibus fuga blanditiis ullam
          hic praesentium exercitationem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi labore
          cupiditate earum voluptatum nulla iure odit temporibus dolorum dolorem
          maxime, nostrum officiis assumenda voluptatibus fuga blanditiis ullam
          hic praesentium exercitationem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi labore
          cupiditate earum voluptatum nulla iure odit temporibus dolorum dolorem
          maxime, nostrum officiis assumenda voluptatibus fuga blanditiis ullam
          hic praesentium exercitationem.
        </p>
        <div className="download-button-group">
          <DownloadButton fileName="config.cfg" pathToFile="./cfg/config.cfg" />
          <DownloadButton fileName="treino.cfg" pathToFile="./cfg/treino.cfg" />
        </div>
      </main>
      <footer>made by: x0n4d0</footer>
    </div>
  )
}
