import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <a href={`/boards`}>Go to Boards Page</a>
    </div>
  );
}

export default App;
