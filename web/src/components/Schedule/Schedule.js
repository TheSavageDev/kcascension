const Schedule = () => {
  return (
    <section className="dark:bg-gray-800">
      <section className="flex flex-col justify-evenly flex-wrap md:flex-row max-w-screen-xl mx-auto rounded-xl">
        <section className="bg-mass flex flex-wrap justify-between m-1 my-4 rounded-xl text-gray-100 relative bg-center bg-no-repeat bg-cover lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 transition-colors duration-500 hover:bg-overlay-dark">
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
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 transition-colors duration-500 hover:bg-overlay-dark">
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
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 transition-colors duration-500 hover:bg-overlay-dark">
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
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 transition-colors duration-500 hover:bg-overlay-dark">
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
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-overlay p-5 transition-colors duration-500 hover:bg-overlay-dark">
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
    </section>
  )
}

export default Schedule
