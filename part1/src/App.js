import './App.css';
import UseState from './components/Use_state';
import CounterDisplay from './components/UsingRedux';

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1>Counter</h1>
      <p>_________Use-State__________</p>
      <UseState />
      <p>_________With-Redux_________</p>
      <CounterDisplay />
    </div>
  );
}

export default App;