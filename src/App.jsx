import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Layout/ScrollToTop';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';

import About from './pages/About';

import SolutionsHub from './pages/SolutionsHub';
import AcademyLanding from './pages/AcademyLanding';
import ArticleView from './pages/ArticleView';

import ContactPage from './components/ContactPage';



function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage/>}/>
          
          <Route path="/solution" element={<SolutionsHub/>}/>
          <Route path="/education" element={<AcademyLanding/>}/>
          <Route path="education/:slug" element={<ArticleView />} /> {/* <-- Dynamic route matching parameter */}


         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;