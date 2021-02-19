import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <section id="hero">
        <article className="w-full h-screen flex justify-center items-center text-white text-5xl">Christ is King</article>
      </section>
      <section className="flex flex-col md:flex-row">
        <section id="mass-times" className="flex flex-wrap justify-between m-3 rounded-xl text-white lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-dark-blue-translucent">
            <header>
              <h3 className="text-2xl">Mass Times</h3>
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
        <section id="daily-mass-times" className="flex flex-wrap justify-between m-3 rounded-xl text-white lg:w-1/3">
          <article className="w-full flex flex-col justify-center items-center rounded-xl bg-dark-blue-translucent">
            <header>
              <h3 className="text-2xl">Daily Mass Times</h3>
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
              <small>* Parking lot, weather permitted</small>
            </article>
          </article>
        </section>
      </section>
    </MainLayout>
  )
}

export default HomePage
