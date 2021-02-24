import AboutLayout from 'src/layouts/AboutLayout/AboutLayout'
import MainLayout from 'src/layouts/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutLayout>
        <main className="py-5 w-2/3 mx-auto text-lg text-gray-100">
          <h2 className="text-4xl">Parish Info</h2>
          <p className="px-5 py-2">Find out how you can get involved with us by watching the following introduction videos:</p>
          <button>How do I join the Parish?</button>
          <h2 className="text-4xl">Directions</h2>
          <p className="px-5 py-2">Ascension Catholic Church and School are located between Switzer and Antioch on 127th Street in Overland Park, KS. (click for map)</p>
          <h3 className="text-3xl px-5">Boundaries</h3>
          <ul className="px-10 py-2 list-inside list-disc">
            <li>N-119th St & Pflumm Rd, east on 119th St. to Blue Valley Pkwy </li>
            <li>E-119th St & Blue Valley Pkwy, south on Blue Valley Pkwy to US 69 Hwy, south on US 69 Hwy to 167th St. </li>
            <li>S- US 69 Hwy and 167th St, west on 167th St to Quivira</li>
            <li>W-167th St and Quivira, north on Quivira to 135th St., west on 135th St to Pflumm, north on Pflumm Rd to 119th St. </li>
          </ul>
          <h2 className="text-4xl">Mission</h2>
          <p className="px-5 py-2">We joyfully proclaim, celebrate, witness and serve Jesus Christ.</p>
          <h2 className="text-4xl">Vision</h2>
          <p className="px-5 py-2">To be a Catholic community actively engaged with Jesus Christ through sacramental life, faith formation and service.</p>

          <h2 className="text-4xl">Values</h2>

          <p className="px-5 py-2">As parishioners of the Church of the Ascension we embrace the following values:</p>
          <ul className="px-5 py-2 list-inside list-disc">
            <li>
              <strong>Spirituality</strong> – We will actively seek Jesus Christ and experience His grace through the celebration of the Mass, Sacraments and personal prayer.
            </li>
            <li>
              <strong>Formation</strong> – We will develop, nurture, and deepen our relationship with Jesus Christ through His Word and through knowledge of our Catholic faith.{' '}
            </li>
            <li>
              <strong>Compassion</strong> – We will humbly serve each other and those in need through the spiritual and corporal works of mercy.
            </li>
            <li>
              <strong>Stewardship</strong> – We will be good stewards of the gifts that God has given us and joyfully give of our time, talent, and treasure.{' '}
            </li>
            <li>
              <strong>Human Dignity</strong> – We will be public witnesses of Jesus Christ and advocate for the dignity of each human person as created in the image and likeness of God.{' '}
            </li>
            <li>
              <strong>Hospitality</strong> – We will invite and welcome others through our words, actions and deeds to join us in our pilgrimage of faith.{' '}
            </li>
          </ul>

          <h2 className="text-4xl">What We Believe</h2>

          <p className="px-5 py-2 italic">We believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.</p>

          <p className="px-5 py-2 italic">
            We believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made,
            consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and
            became man.
          </p>

          <p className="px-5 py-2 italic">For our sake he was crucified under Pontius Pilate, he He will come again in glory to judge the living and the dead and his kingdom will have no end.</p>

          <p className="px-5 py-2 italic">
            We believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the
            prophets.
          </p>
          <p className="px-5 py-2 italic">
            We believe in one, holy, catholic and apostolic Church. We confess one Baptism for the forgiveness of sins and look forward to the resurrection of the dead and the life of the world to
            come. Amen.
          </p>

          <h2 className="text-4xl">Parish History</h2>

          <p className="px-5 py-2">Click Here for a brochure on the history of our parish and information about our art on campus.</p>
        </main>
      </AboutLayout>
    </MainLayout>
  )
}

export default AboutPage
