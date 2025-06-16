import './App.css'
import { useAppContext } from './components/appProvider/appContext';
import Keypad from './components/keypad'
import Screen from './components/screen'

function App() {

  const { state } = useAppContext();

  const { operand1, operand2 } = state;
  
  const screenValue = operand2
    ? operand2
    : operand1
      ? operand1
      : 0

  return (
    <>
      <Screen value={screenValue}/>
      <Keypad />
    </>
)
}

export default App
