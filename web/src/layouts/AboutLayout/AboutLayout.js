import { Link, routes } from '@redwoodjs/router'

const AboutLayout = ({ children }) => {
  return (
    <>
      <nav className="sticky top-24">
        <ul className="flex bg-dark-blue text-white py-2 pl-5 items-center font-light">
          <li>
            <Link
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              to={routes.about()}
            >
              Parish Info
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              to={routes.contact()}
            >
              Ascension Catholic School
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              to={routes.blog()}
            >
              Facilities Request
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              to={routes.blog()}
            >
              Request Forms
            </Link>
          </li>
          <li>
            <a
              className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
              href="#"
            >
              Search
            </a>
          </li>
        </ul>
      </nav>
      <section className="w-full mx-auto bg-white shadow rounded">
        {children}
      </section>
    </>
  )
}

export default AboutLayout
