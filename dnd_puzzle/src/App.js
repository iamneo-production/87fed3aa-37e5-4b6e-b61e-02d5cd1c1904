import './App.css';
import { PuzzleComponent } from './component/PuzzlePage';
import { HTML5Backend } from 'react-dnd-html5-backend'

import { DndProvider } from 'react-dnd'

function App() {
  return (
    <div className="App">
        <DndProvider backend={HTML5Backend}>
        <PuzzleComponent/>
      
        </DndProvider>
      
    </div>
  );
}

export default App;
