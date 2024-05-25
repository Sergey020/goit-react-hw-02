import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'


function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })
  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1
    })
  };
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
      <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      { totalFeedback > 0 ? <Feedback feedback={feedback}/> : <Notification/> }
      {/* <Options onFeedback={handleFeedback} onReset={resetFeedback} />
      <Feedback feedback={feedback} total={totalFeedback} positive={positiveFeedback} /> */}
    </div>
  )
}

export default App
