import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Page2 from './routes/page2';
import Page3 from './routes/page3';
import Home from './routes/home';
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Routes>
    </Layout>
  );
}


export default App;
