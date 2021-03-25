import './App.css';

import Greetings from '../src/components/Greetings';
import Counter from './components/Counter';
import Colors from './components/Colors';

function App() {
  
  return (
    <div className="App">
      <Greetings text="This component greets you" />
      <Counter/>
      <Colors/>
    </div>
  );
}

export default App;
