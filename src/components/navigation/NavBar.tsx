import './NavBar.css';
import image from 'assets/logo.svg';
import { Button } from 'stories/examples/Button';

function NavBar() {
  return (
    <header>
      <nav className="nav collapsible">
        <a className="nav__brand" href="/">
          <img src={image} alt="" />
        </a>
        <svg className="icon icon--white nav__toggler">
          <use href="images/sprite.svg#menu"></use>
        </svg>
        <ul className="list nav__list collapsible__content">
          <li className="nav__item">
            <a href="#">About Bravo</a>
          </li>
          <li className="nav__item">
            <a href="#">Claims and Support</a>
          </li>
          <li className="nav__item">
            <a href="#">Payment Method</a>
          </li>
          <Button size="small" label="Log out" />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
