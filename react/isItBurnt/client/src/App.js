import React, { useEffect, useState} from 'react';
import {Router} from '@gatsbyjs/reach-router'
import Main from './views/main';
import LoginUser from "./components/login";
import RegisterUser from "./components/register";
import Header from './views/header';
import Recipies from './components/recipies';
import MealPlan from './views/mealPlan';


function App() {

  const [cuisine, setCuisine] = useState('');
  const [numberOfResults, setNumberOfResults] = useState('');


  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='container' style={{marginTop: 100}}>
      <div>
        <Router>
          <Main path = '/'/>
          <LoginUser path = '/login'/>
          <RegisterUser path = '/register'/>
          <Recipies 
            path = '/recipies'
              // cuisine = {cuisine}
              // setCuisine = {setCuisine}
              // numberOfResults = {numberOfResults}
              // setNumberOfResults = {setNumberOfResults}
          />
          <MealPlan path = '/meal_plan'/>
        </Router>
      </div>
    </div>
    </>

  );
}

export default App;
