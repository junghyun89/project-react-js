import styles from './Navbar.module.css';
import { BsCart4 } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { amount, loading } = useGlobalContext();
  if (loading) {
    return;
  }
  return (
    <nav>
      <div className={styles['nav-center']}>
        <h3>useReducer</h3>
        <div className={styles['nav-container']}>
          <BsCart4 />
          <div className={styles['amount-container']}>
            <p className={styles['total-amount']}>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
