import { useState } from 'react'
import './styles/app.css'
import Card from './components/Card'
import Widget from './components/Widget'
import WorkSvg from '../images/icon-work.svg'
import PlaySvg from '../images/icon-play.svg'
import StudySvg from '../images/icon-study.svg'
import SocialSvg from '../images/icon-social.svg'
import SelfcareSvg from '../images/icon-self-care.svg'
import ExerciseSvg from '../images/icon-exercise.svg'
import jsonData from '../data.json'

function App() {


  return (
    <div className="App">
      <div className='wrapper'>
        <div className="profile-item">
          <Card title="John Doe" profilePic="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
        </div>
        <main className="widget-items">
          <Widget title="Work" current="10" previous="5" image={WorkSvg} />
          <Widget title="Play" current="10" previous="5" image={PlaySvg} backgroundColor="var(--softBlue)" />
          <Widget title="Study" current="10" previous="5" image={StudySvg} backgroundColor="var(--lightRedStudy)" />
          <Widget title="Exercise" current="10" previous="5" image={ExerciseSvg} backgroundColor="var(--limeGreen)" />
          <Widget title="Social" current="10" previous="5" image={SocialSvg} backgroundColor="var(--violet)" />
          <Widget title="Selfcare" current="10" previous="5" image={SelfcareSvg} backgroundColor="var(--softOrange)" />
        </main>
      </div>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" >Frontend Mentor </a>
        . Coded by <a href="https://github.com/akinankarali">Saim Akın Ankaralı</a>.
      </footer>

    </div>
  )
}

export default App
