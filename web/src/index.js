import {createRoot} from 'react-dom/client';

function App () {
  return <h1>I like gazpacho!</h1>
}

createRoot(document.getElementById('app-container')).render(<App/>);
