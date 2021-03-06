import { Link, routes } from '@redwoodjs/router'

const NavLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Church of the Ascension</Link>
        </h1>
        <h2>Catholic Parish</h2>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}

export default NavLayout
