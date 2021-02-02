import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header className="sticky top-0 flex justify-between items-center py-2 px-8 bg-dark-blue text-white">
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
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.blog()}
              >
                Ministries
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.blog()}
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.blog()}
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.blog()}
              >
                COVID-19
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
            <li>
              <a
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                href="#"
              >
                Search
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
      <main className="w-full mx-auto py-5 bg-white shadow rounded">
        {children}
      </main>
      <footer className="w-full p-5 bg-dark-blue text-white px-20 flex flex-col">
        <section className="flex justify-between">
          <section>
            <article>
              <header>
                <h3 className="text-2xl border-b-2">Parish Office</h3>
              </header>
              <p>
                9510 W 127th St
                <br />
                Overland Park, KS 66213
                <br />
                p 913.681.3348
                <br />
                f 913.681.3517
                <br />
                Open M-Th 8:30am-4:00pm
                <br />
                Fridays 8:30am-Noon
              </p>
            </article>
          </section>
          <section>
            <article>
              <header>
                <h3 className="text-2xl border-b-2">Youth Faith Formation</h3>
                <p>
                  p 913.681.7683
                  <br />
                  woleary@kcascension.org
                  <br />
                  tbaldwin@acseagles.org
                  <br />
                  Office Hours: M-Th 9a-4p
                  <br />
                  YFF Webpage
                </p>
              </header>
            </article>
            <article>
              <header>
                <h3 className="text-2xl border-b-2">Login</h3>
              </header>
              <p>
                <a href="#" className="hover:underline block">
                  My Access ACS (Church Life)
                </a>
                <a href="#" className="hover:underline block">
                  My Access User Guide
                </a>
                <a href="#" className="hover:underline block">
                  Ministry Scheduler Pro
                </a>
                <a href="#" className="hover:underline block">
                  Adoration Scheduler Login
                </a>
                <a href="#" className="hover:underline block">
                  Formed-On Demand
                </a>
              </p>
            </article>
          </section>
          <section>
            <article>
              <header>
                <h3 className="text-2xl border-b-2">School</h3>
              </header>
              <p>
                <a href="#" className="hover:underline block">
                  p 913.851.2531
                </a>
                <a href="#" className="hover:underline block">
                  f 913.851.2518
                </a>
                <a href="#" className="hover:underline block">
                  www.acseagles.org
                </a>
              </p>
            </article>
            <article>
              <header>
                <h3 className="text-2xl border-b-2">Events</h3>
              </header>
              <p>
                <a href="#" className="hover:underline block">
                  Together
                </a>
                <a href="#" className="hover:underline block">
                  Church of the Ascension Adult Faith Registration
                </a>
              </p>
            </article>
          </section>
          <section>
            <article>
              <header>
                <h3 className="text-2xl border-b-2">Recent Articles</h3>
              </header>
              <p>
                <a href="#" className="hover:underline block">
                  80th Birthday
                </a>
                <a href="#" className="hover:underline block">
                  You Fall In Love With Christ – Fr. Tom Tank
                </a>
                <a href="#" className="hover:underline block">
                  The Easy Or Hard Way – Fr. Viet Nguyen
                </a>
                <a href="#" className="hover:underline block">
                  Behold The Lamb of God
                </a>
                <a href="#" className="hover:underline block">
                  Lauren Solidum’s Eucharistic Witness
                </a>
                <a href="#" className="hover:underline block">
                  Christ Is Calling You – Fr. Viet Nguyen
                </a>
              </p>
            </article>
          </section>
        </section>
        <small className="text-center mt-5">
          Proudly powered by The Holy Spirit | &copy; 2021 Church of the
          Ascension by Jason A Savage
        </small>
      </footer>
    </>
  )
}

export default BlogLayout
