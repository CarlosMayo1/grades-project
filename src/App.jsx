import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/Home/Home';
import AdultGrades from './components/Grades/AdutlGrades/AdultGrades';
import GeneralGrades from './components/Grades/GeneralGrades/GeneralGrades';
import TeensGrades from './components/Grades/TeensGrades/TeensGrades';
import Layout from './Layout/Layout';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="general-grades" element={<GeneralGrades />} />
          <Route path="adult-grades" element={<AdultGrades />} />
          <Route path="teens-grades" element={<TeensGrades />} />
          <Route path="about-me" element={<About />} />
          <Route path="contact" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
