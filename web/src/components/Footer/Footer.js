import Cross from 'src/images/Ccross.svg'

const Footer = () => {
  return (
    <footer className="w-full p-2 bg-gray-900 text-white flex flex-col">
      <div className="relative mt-16 bg-green-900">
        <svg className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-green-900" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path fill="currentColor" d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
        </svg>
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                <Cross />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">Parish Office</span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-primary-300">
                  <a
                    href="https://www.google.com/maps/place/9510+W+127th+St,+Overland+Park,+KS+66213/data=!4m2!3m1!1s0x87c0ea9b69b3b4d3:0xff916c67cfdbf7d6?sa=X&ved=2ahUKEwjV5KT-kIPvAhXPc98KHf0QAxoQ8gEwAHoECA0QAQ"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    9510 W 127th St
                    <br />
                    Overland Park, KS 66213
                  </a>
                  <br />
                  <a href="tel:9136813348">p 913.681.3348</a>
                  <br />
                  f 913.681.3517
                  <br />
                  Open M-Th 8:30am-4:00pm
                  <br />
                  Fridays 8:30am-Noon
                </p>
                <p className="mt-4 text-sm text-primary-100">Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-primary-400">School</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Website
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      p 913.851.2531
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      f 913.851.2518
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-primary-400">Youth Faith Formation</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Sacraments
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Summer
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Family Formation
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Volunteer
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-primary-400">Events</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Together
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Adult Faith Registration
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Lent
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Easter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-primary-400">Login</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      My Access ACS (Church Life)
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Ministry Scheduler Pro
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Adoration Scheduler Login
                    </a>
                  </li>
                  <li>
                    <a href="/" className="transition-colors duration-300 text-primary-100 hover:text-primary-400">
                      Formed-On Demand
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-primary-10ccent-200 sm:flex-row">
            <p className="text-sm text-gray-100">Powered with The Holy Spirit | © Copyright 2021 Jason A Savage. All rights reserved.</p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a href="/" className="transition-colors duration-300 text-primary-1000 hover:text-primary-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a href="/" className="transition-colors duration-300 text-primary-1000 hover:text-primary-400">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a href="/" className="transition-colors duration-300 text-primary-1000 hover:text-primary-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
