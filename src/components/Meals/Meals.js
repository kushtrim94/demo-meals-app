import React from 'react';
import { useNavigate } from 'react-router-dom';
import MealsSummary from './MealsSummary';
import classes from './Meals.module.css';

const Meals = () => {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <div>
      <MealsSummary />
      <div className={classes.buttonContainer}>
        <button className={classes.menuButton} onClick={handleMenuClick}>
          Look our menu
        </button>
      </div>
    </div>
  );
};

export default Meals;
