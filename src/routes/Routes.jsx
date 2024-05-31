import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blog from '../components/Blog/Blogs';
import Contact from '../components/Contact/Contact';
import Courses from '../components/Courses/Courses'

const AppRouter = () => {
    return (
        <Router>
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/courses" component={Courses} />
        </Router>
    );
}

export default AppRouter;
