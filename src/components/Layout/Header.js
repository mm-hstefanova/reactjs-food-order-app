import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartIcon from './HeaderCartButton';
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartIcon />
      </header>

      <div className={classes.intro}>
        <img src={mealsImage} alt='table full of delicious food' />
      </div>
    </>
  );
};

export default Header;
