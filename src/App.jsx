//import { Github, Twitter } from "./assets/svg/logos";
import { Menu } from "./components/Menu/Menu";
import { useTheme } from "./hooks/useTheme";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      {theme && <main className={`${theme} main`}>
      <Menu/>
      <Routes>
          <Route exact path="/" element={<Home theme={ theme} />} />
        {/* <Route path="/acerca" component={About} />
        <Route path="/servicios" component={Services} /> */}
        {/* Agrega más rutas según tus necesidades */}
      </Routes>
      </main>}
      
    </Router>
    
  );
}

export default App;
