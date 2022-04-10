import './App.css';
import { AppProvider } from './hooks/IdContext';
import Roots from './pages/Roots';

function App() {
  return (
    <>
      <AppProvider>
        <Roots />
      </AppProvider>
    </>
  );
}

export default App;
