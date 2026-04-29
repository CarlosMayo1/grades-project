import { useState } from 'react';
import { Link } from 'react-router';
import { IconMenu2 } from '@tabler/icons-react';

const Navbar = () => {
  const [showHiddenMenu, setShowHiddenMenu] = useState(false);

  const onShowHiddenMenuHandler = () => {
    setShowHiddenMenu((prevState) => !prevState);
  };

  return (
    <div className="nav-wrapper">
      <div className="hidden-menu-wrapper">
        <div className="burger-menu-wrapper">
          <IconMenu2 onClick={onShowHiddenMenuHandler} />
        </div>
        {showHiddenMenu ? (
          <ul className="hidden-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="general-grades">General grades</Link>
            </li>
            <li>
              <Link to="adult-grades">Adult grades</Link>
            </li>
            <li>
              <Link to="about-me">About me</Link>
            </li>
          </ul>
        ) : null}
      </div>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="general-grades">General grades</Link>
        </li>
        <li>
          <Link to="adult-grades">Adult grades</Link>
        </li>
        <li>
          <Link to="about-me">About me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
