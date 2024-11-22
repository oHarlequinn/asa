import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Layout from './components/Layout';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Resource from './pages/Resource';
import Social from './pages/Social'
import Wuwa from './pages/Wuwa'


function App() {
  return (
    <Router basename='/asa'>
      {/* <Header></Header> */}
      <Layout>

        <Routes>
          {/* Render home as default */}
          <Route path="/" element={<Home />} />
          {/* Secondary pages */}
          <Route path="/about" element={<About />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/social" element={<Social />} />
          <Route path="/wuwa" element={<Wuwa />} />
        </Routes>

      </Layout>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;