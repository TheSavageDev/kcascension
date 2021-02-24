import { Link, routes } from '@redwoodjs/router'

const AboutLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul className="flex bg-gray-900 text-white py-2 pl-5 items-center font-semibold text-lg">
          <li>
            <Link className="py-2 px-4 hover:bg-green-900 transition duration-100 rounded-xl" to={routes.about()}>
              Parish Info
            </Link>
          </li>
          <li>
            <Link className="py-2 px-4 hover:bg-green-900 transition duration-100 rounded-xl" to={routes.about()}>
              Ascension Catholic School
            </Link>
          </li>
          <li>
            <Link className="py-2 px-4 hover:bg-green-900 transition duration-100 rounded-xl" to={routes.about()}>
              Facilities Request
            </Link>
          </li>
          <li>
            <Link className="py-2 px-4 hover:bg-green-900 transition duration-100 rounded-xl" to={routes.about()}>
              Request Forms
            </Link>
          </li>
          <li>
            <a className="py-2 px-4 hover:bg-green-900 transition duration-100 rounded-xl" href="#">
              Search
            </a>
          </li>
        </ul>
      </nav>
      <section className="w-full mx-auto bg-gray-900 shadow rounded-xl">{children}</section>
    </>
  )
}

export default AboutLayout
