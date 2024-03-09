import Button from "./components/Button.jsx"
import Student from "./components/Students.jsx"
function App() {
  return(
    <>
      <Button/>
      <Student name="Jay" age="7" isStudent={true} />
      <Student name="Drake" age="20" isStudent={false} />
      <Student name="Abdul" age="19" isStudent={true} />
    </>
  )
}

export default App
