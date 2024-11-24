import HomeBackround from '../../assets/HomePage.svg';
import Background from '../../assets/Backround.svg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageBackround() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundImage = `url(${HomeBackround})`;
    } else {
      document.body.style.backgroundImage = `url(${Background})`;
    }
    document.body.style.backgroundSize = 'cover';

  }, [location]);

  return (null);
}
