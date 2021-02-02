import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-dark-blue text-white">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">
            <Link
              className="text-white hover:text-blue-100 transition duration-100"
              to={routes.home()}
            >
              Church of the Ascension
            </Link>
          </h1>
          <h2 className="text-4xl text-center font-semibold text-blue-200">
            Catholic Parish
          </h2>
        </div>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.blog()}
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                href="#"
                onClick={isAuthenticated ? logOut : logIn}
              >
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </a>
            </li>
          </ul>
          {isAuthenticated && (
            <div className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              {currentUser.email}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-5xl my-12 mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
