import './App.css'
import { Loyaut } from './Components/Loyaut/Loyaut'
import { Main } from './Components/Main/Main'
import { CustomizeCharacter } from './Components/CustomizeCharacter/CustomizeCharacter'
import { LatestNews } from './Components/LatestNews/LatestNews'

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Loyaut>
        <Main />
        <CustomizeCharacter />
        <LatestNews />
      </Loyaut>
    </div>
  )
}
