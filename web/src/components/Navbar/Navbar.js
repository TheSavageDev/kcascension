import { Link, routes } from '@redwoodjs/router'

const Navbar = () => {
  return (
    <header className="dark text-center py-2 bg-primary-900 text-white w-full">
      <nav className="nav flex flex-wrap items-center justify-between px-4">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <h1 className="text-2xl text-white hover:text-green-700 transition duration-100">Church of the Ascension</h1>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link to={routes.home()} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
              Home
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link to={routes.about()} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
              About
            </Link>
          </li>

          <li className="border-t md:border-none">
            <a href="#" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
