import MainLayout from 'src/layouts/MainLayout/MainLayout'
import Reconciliation from 'src/images/reconciliation.jpg'

const HomePage = () => {
  return (
    <MainLayout>
      <section>
        <div className="bg-gray-100 dark:bg-primary-900">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 pb-24 text-center md:pb-56 md:py-15 md:px-10 lg:px-32 text-green-900 dark:text-gray-100">
            <h1 className="text-5xl font-bold leading-none sm:dark:text-6xl xl:max-w-3xl text-green-900 dark:text-gray-100">Church of the Ascension</h1>
            <h2 className="text-4xl font-bold leading-none sm:dark:text-6xl xl:max-w-3xl text-green-900 dark:text-gray-100">Catholic Parish</h2>
          </div>
        </div>
        <img src={Reconciliation} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-xl shadow-md md:-mt-40" />
      </section>
      <section className="flex flex-col justify-evenly flex-wrap md:flex-row">
        <section className="bg-mass flex flex-wrap justify-between m-3 rounded-xl text-gray-100 relative bg-center bg-no-repeat bg-cover lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 hover:bg-overlay-dark">
            <header>
              <h3 className="text-3xl underline text-green-600">
                <span className="text-gray-100">Mass Times</span>
              </h3>
            </header>
            <article className="text-xl">
              <ul>
                <li>
                  <span className="font-extrabold">Saturday: </span>4:30pm*
                </li>
                <li>
                  <span className="font-extrabold">Sunday</span>
                  <ul className="pl-3">
                    <li>
                      <span className="font-bold">Morning: </span>8:15am, 10:00am, 11:45am
                    </li>
                  </ul>
                  <ul className="pl-3">
                    <li>
                      <span className="font-bold">Evening: </span>5:00pm
                    </li>
                  </ul>
                </li>
              </ul>
              <small>* Parking lot, weather permitted</small>
            </article>
          </article>
        </section>
        <section className="bg-daily flex flex-wrap justify-between m-3 rounded-xl relative bg-center bg-no-repeat bg-cover text-gray-100 lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 hover:bg-overlay-dark">
            <header>
              <h3 className="text-3xl underline text-green-600">
                <span className="text-gray-100">Daily Mass Times</span>
              </h3>
            </header>
            <article className="text-xl">
              <ul>
                <li>
                  <span className="font-extrabold">Monday-Friday: </span>7:00am & 12:00pm
                </li>
                <li>
                  <span className="font-extrabold">Saturday: </span>8:30am
                </li>
              </ul>
            </article>
          </article>
        </section>
        <section className="bg-join flex flex-wrap justify-between m-3 rounded-xl relative bg-center bg-no-repeat bg-cover text-gray-100 lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 hover:bg-overlay-dark">
            <header>
              <h3 className="text-3xl underline text-green-600">
                <span className="text-gray-100">Reconciliation</span>
              </h3>
            </header>
            <article className="text-xl">
              <ul>
                <li>
                  <span className="font-extrabold">Thursday: </span>6:30pm
                </li>
                <li>
                  <span className="font-extrabold">Saturday: </span>3:00pm
                </li>
              </ul>
              <small>St. Martha & St. Monica Rooms</small>
              <br />
              <small>Or by appointment</small>
            </article>
          </article>
        </section>
        <section className="bg-sacraments flex flex-wrap justify-between m-3 rounded-xl text-gray-100 relative bg-center bg-no-repeat bg-cover lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 hover:bg-overlay-dark">
            <header>
              <h3 className="text-3xl underline text-green-600">
                <span className="text-gray-100">Sacraments</span>
              </h3>
            </header>
            <article className="text-xl">
              <p>Call Parish Office</p>
              <p>
                <a href="tel:9136813348">913-681-3348</a>
              </p>
              <p>
                <small>
                  or email <a href="mailto:ascensionchurch@kcascension.org">ascensionchurch@kcascension.org</a>
                </small>
              </p>
            </article>
          </article>
        </section>
        <section className="bg-hero flex flex-wrap justify-between m-3 rounded-xl relative bg-center bg-no-repeat bg-cover text-gray-100">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 hover:bg-overlay-dark">
            <header>
              <h3 className="text-3xl underline text-green-600">
                <span className="text-gray-100">Join Our Parish</span>
              </h3>
            </header>
            <article className="text-lg p-2">
              <p>We hope that you will join us online or in person for Mass! Our parish community looks forward to meeting you!</p>
              <p>Find out more about Church of the Ascension or how to become a member by clicking a link below!</p>
              <p className="text-center py-4">
                <a href="#">General Parish Information</a>
                <br />
                <a href="#">How do I join the Parish?</a>
              </p>
            </article>
          </article>
        </section>
      </section>
      <section className="text-gray-100 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Trending at Ascension</h2>
              <div className="h-1 w-20 bg-green-600 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Here is what is happening at Ascension! Click on the boxes to check out what everyone else is looking at.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-primary-900 p-6 rounded-xl">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-gray-100 font-medium title-font mb-4">Something Here</h2>
                <p className="leading-relaxed text-base">
                  Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations of the cross College of Cardinals confiteor ecumenical
                  council Padre Pio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default HomePage
