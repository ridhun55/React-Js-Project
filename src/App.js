import React from 'react';
import Header from './common/Header/Header'
import Home from './common/Home/Home';
import { BrowserRouter, Route } from "react-router-dom";
import Kerala from './common/PscBlogs/Kerala/Kerala';
import ObjectivePage1 from './common/PscKnowledge/Kerala/ObjectivePage1';
import ObjectivePage2 from './common/PscKnowledge/Kerala/ObjectivePage2';
import Footer from './common/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/kerala_blog" component={Kerala} />
      <Route path="/kerala" component={ObjectivePage1} />
      <Route path="/india" component={ObjectivePage2} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
