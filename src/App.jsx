//import { Github, Twitter } from "./assets/svg/logos";
import { Menu } from "./components/Menu/Menu";
import { useTheme } from "./hooks/useTheme";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Blog } from "./pages/Blog";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Article } from "./components/Blog/Article";

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      {theme && <main className={`${theme} main`}>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/contacto" element={<Contact/>} />
          <Route  path="/portafolio" element={<Projects/>} />
          <Route  path="/blog" element={<Blog/>} />
          <Route path="/blog/:articleId" element={<Article/>} />
        {/* <Route path="/acerca" component={About} />
        <Route path="/servicios" component={Services} /> */}
        {/* Agrega más rutas según tus necesidades */}
        </Routes>
      </main>}      
    </Router>    
  );
}

export default App;
