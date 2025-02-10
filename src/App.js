import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App" style={{backgroundImage: 'url("https://www.fullpath.com/wp-content/uploads/2023/03/Google-Meet.png")',
    backgroundSize: "cover"}}>
      <header className="App-header">
        <p>
          Welcome <code>Fullpather</code> to Voicing the Inventory App.
        </p>
        <img class="App-logo" alt="logo" src="/cardealer.jpg" style={{borderRadius: "100px"}} />
        <elevenlabs-convai agent-id="cdBDi4GVpIayhHGu0bn1"></elevenlabs-convai>
      </header>
    </div>
    <div>
      <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
    </div>
    </>
  );
}

export default App;
