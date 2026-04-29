import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/Home/Home';
import AdultGrades from './components/Grades/AdutlGrades/AdultGrades';
import GeneralGrades from './components/Grades/GeneralGrades/GeneralGrades';
import Layout from './Layout/Layout';
import About from './components/About/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="general-grades" element={<GeneralGrades />} />
          <Route path="adult-grades" element={<AdultGrades />} />
          <Route path="about-me" element={<About />} />
          <Route path="contact" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
