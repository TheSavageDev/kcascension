import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <h3 className="text-3xl font-semibold text-center">Live Stream</h3>
      <section
        id="live-stream"
        className="flex flex-col justify-center items-center bg-gray-300 bg-opacity-40"
      >
        <section className="flex justify-between">
          <article className="p-12">
            <p className="font-semibold text-center py-5">
              Watch Mass and special events right here live or find it in{' '}
              <a href="#" className="underline">
                this playlist
              </a>{' '}
              afterwards. Streams usually begin within 5-10 minutes of the start
              time for the event.
            </p>
            <p className="font-semibold text-center py-5">
              We are currently streaming all daily and weekend masses in the
              Church.
              <br />
              For better results, live streams may be viewed directly from out{' '}
              <a href="#" className="underline">
                Live YouTube Channel.
              </a>
            </p>
            <p className="font-semibold text-center py-5">
              <a href="#" className="underline">
                Download a digital copy of the Act of Spiritual Communion.
              </a>
              <br />
              <a href="#" className="underline">
                Download a digital copy of Spiritual Communion for Children.
              </a>
            </p>
          </article>
          <article className="mr-10">
            <iframe
              width="660"
              height="415"
              src="https://www.youtube.com/embed/3fZAwbR6lhk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </article>
        </section>
      </section>
      <section id="weekly-schedule" className="flex flex-col p-12">
        <h3 className="text-3xl text-center mt-5 font-semibold">
          Weekly Mass, Rosary & Sacraments
        </h3>
        <section className="flex flex-row text-white mt-5 justify-between">
          <article
            id="weekend-mass-schedule"
            className="bg-dark-blue font-semibold text-center p-5 w-1/6 rounded-3xl"
          >
            <h4 className="text-2xl">Weekend Mass</h4>
            <ul>
              <li>Saturday 4:30pm</li>
              <li>Parking Lot 4:30pm</li>
              <li>
                Sunday Morning
                <ul>
                  <li>8:15am</li>
                  <li>10:00am</li>
                  <li>11:45am</li>
                </ul>
              </li>
              <li>Sunday Evening 5:00pm</li>
            </ul>
          </article>
          <article
            id="daily-mass-schedule"
            className="bg-dark-blue font-semibold text-center p-5 w-1/6 rounded-3xl"
          >
            <h4 className="text-2xl">Daily Mass</h4>
            <ul>
              <li>
                Monday-Friday
                <ul>
                  <li>7:00am</li>
                  <li>Noon</li>
                </ul>
              </li>
              <li>
                Saturday Morning
                <ul>
                  <li>8:30am</li>
                </ul>
              </li>
            </ul>
          </article>
          <article
            id="reconciliation-schedule"
            className="bg-dark-blue font-semibold text-center p-5 w-1/6 rounded-3xl"
          >
            <h4 className="text-2xl">Reconciliation</h4>
            <ul>
              <li>Thursday 6:30pm</li>
              <li>Saturday 3:00pm</li>
              <li>
                <small>St. Martha & St. Monica Rooms, or by appointment</small>
              </li>
            </ul>
          </article>
          <article
            id="sacraments-schedule"
            className="bg-dark-blue font-semibold text-center p-5 w-1/6 rounded-3xl"
          >
            <h4 className="text-2xl">Sacraments</h4>
            <ul>
              <li>Call Parish Office</li>
              <li>913-681-3348</li>
              <li>or email</li>
              <li>
                <a href="mailto:ascensionchurch@kcascension.org">
                  ascensionchurch@kcascension.org
                </a>
              </li>
            </ul>
          </article>
        </section>
      </section>
      <section className="p-12">
        <h3 className="text-3xl text-center font-semibold">Bookmarks</h3>
        <section id="bookmarks" className="flex justify-between mt-5">
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Live Stream
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Parish Calendar
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Weekly Bulletin
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Volunteer Sign-ups
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Daily Scripture
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Adult Faith Offerings
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Saint of the Day
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Giving
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Pray
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Homilies
          </article>
          <article className="rounded-3xl p-5 bg-dark-blue text-white hover:bg-white hover:text-dark-blue">
            Podcasts
          </article>
        </section>
      </section>
      <section className="bg-dark-blue text-white">
        <h3 className="text-3xl text-center font-semibold">
          Trending at Ascension
        </h3>
        <section className="flex flex-wrap justify-center">
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
          <article className="h-40 w-25 bg-blue-800 text-white p-12 m-10 font-semibold text-xl">
            Test
          </article>
        </section>
      </section>
      <section className="mt-12">
        <h3 className="text-3xl text-center font-semibold">Parish Calendar</h3>
        <section className="flex flex-wrap justify-center"></section>
      </section>
      <section className="mt-12 bg-grey p-12">
        <h3 className="text-3xl text-center font-semibold text-white">
          Recent Homilies & Mass Recordings
        </h3>
        <section className="flex flex-wrap justify-center mt-12">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/3fZAwbR6lhk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>
      </section>
      <section className="mt-12">
        <h3 className="text-3xl text-center font-semibold">New Here?</h3>
        <section className="flex justify-center">
          <article className="text-center">
            <p className="block m-5">
              We hope that you will join us online or in person for Mass! Our
              parish community looks forward to meeting you!
            </p>
            <p className="block m-5">
              Find out more about Church of the Ascension or how to become a
              member by clicking a link below!
            </p>
            <p className="block m-2">
              <a href="#" className="hover:underline block">
                General Parish Information
              </a>
              <a href="#" className="hover:underline block">
                How do I join the Parish?
              </a>
            </p>
          </article>
        </section>
      </section>
    </MainLayout>
  )
}

export default HomePage
