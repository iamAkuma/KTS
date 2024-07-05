// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blogs';
import Courses from './components/Courses/Courses';
import One from './components/Alumni/one'
import Two from './components/Alumni/two'
import ErrorPage from './components/Error/Error'
import Alumni from './components/Alumni/Alumni';
import Caregiver from './components/Caregiver/Caregiver';
import Certificate from './components/Certificate/Certificate';
import Barista from './components/Barista/Barista';
import Cook from './components/Cook/Cook.jsx';
import Bartender from './components/Bartender/Bartender.jsx';
import Waiter from './components/Waiter/Waiter.jsx';
import Housekeeping from './components/Housekeeping/Housekeeping.jsx';
import News from './components/News/News.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/news" element={<News />} />
        <Route path="/2079-80" element={<One />} />
        <Route path="/2080-81" element={<Two />} />
        <Route path="/caregiver" element={<Caregiver />} />
        <Route path="/individual-support" element={<Certificate />} />
        <Route path="/barista" element={<Barista />} />
        <Route path="/commercial-cook" element={<Cook />} />
        <Route path="/bartender" element={<Bartender />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/housekeeping" element={<Housekeeping />} />


        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
