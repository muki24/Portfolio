import React from 'react';
import Header from './components/Header/header';
import Topcontainer from './components/Topcontainer/topcontainer';
import Skillcontainer from './components/skillcontainer/skillcontainer';
import Projectcontainer from './components/projectcontainer/projectcontainer';
import Experiencecontainer from './components/Experiencecontainer/experiencecontainer';
import Contact from './components/contact/contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <Projectcontainer/>
      <Experiencecontainer/>
      <Contact/>
    </div>
  )
}

export default App;

