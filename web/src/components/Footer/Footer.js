const Footer = () => {
  return (
    <footer className="w-full p-2 bg-dark-blue text-white flex flex-col">
      <section className="flex flex-wrap justify-between">
        <section className="mb-1">
          <article>
            <header>
              <h3 className="text-lg">Parish Office</h3>
              <hr className="border-b-2 border-green" />
            </header>
            <p className="pl-4">
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
        <section className="mb-1">
          <article>
            <header>
              <h3 className="text-lg">Youth Faith Formation</h3>
              <hr className="border-b-2 border-green" />
            </header>
            <p className="pl-4">
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
          </article>
          <article>
            <header>
              <h3 className="text-lg">Login</h3>
              <hr className="border-b-2 border-green" />
            </header>
            <p className="pl-4">
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
        <section className="mb-1">
          <article>
            <header>
              <h3 className="text-lg">School</h3>
              <hr className="border-b-2 border-green" />
            </header>
            <p className="pl-4">
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
              <h3 className="text-lg">Events</h3>
              <hr className="border-b-2 border-green" />
            </header>
            <p className="pl-4">
              <a href="#" className="hover:underline block">
                Together
              </a>
              <a href="#" className="hover:underline block">
                Church of the Ascension Adult Faith Registration
              </a>
            </p>
          </article>
        </section>
        <section className="mb-1">
          <article>
            <header>
              <h3 className="text-lg">Recent Articles</h3>
              <hr className="border-b-2 border-green" />
            </header>
            <p className="pl-4">
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
      <small className="">
        Created with The Holy Spirit | &copy; 2021 Church of the Ascension by
        Jason A Savage
      </small>
    </footer>
  )
}

export default Footer