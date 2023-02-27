import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>

      <nav className='navbar'>
        <Link to='/' className='navbar__logo' />
        <ul className='navbar__list'>
          <li className='navbar__link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navbar__link'>
            <Link to='/sign-in'>Sign In</Link>
          </li>
        </ul>
      </nav>

      <form className='searchbar'>
        <input type='text' />
        <button>SEARCH</button>
      </form>

    </div>
  )
}
export default Header
