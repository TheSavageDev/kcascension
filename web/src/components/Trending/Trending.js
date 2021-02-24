import TrendingCard from '../TrendingCard/TrendingCard'

const Trending = () => {
  const dummyText = 'Feast day salve regina Paschal mystery Thomas Merton our Father, who art in Heaven Our Lady of Guadalupe rosary stations.'
  const dummyCard = {
    text: dummyText,
    title: 'Something Here',
    subtitle: 'Subtitle',
    image: 'https://dummyimage.com/720x400',
  }
  const trendingCards = [dummyCard, dummyCard, dummyCard, dummyCard, dummyCard, dummyCard, dummyCard, dummyCard]
  return (
    <section className="text-gray-100 body-font mx-auto max-w-screen-xl">
      <section className="container px-5 py-24 mx-auto">
        <article className="flex flex-wrap w-full mb-20">
          <header className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Trending at Ascension</h2>
            <aside className="h-1 w-20 bg-green-600 rounded"></aside>
          </header>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Here is what is happening at Ascension! Click on the boxes to check out what everyone else is looking at.</p>
        </article>
        <article className="flex flex-wrap -m-4">
          {trendingCards.map((card, i) => (
            <TrendingCard card={card} key={i} />
          ))}
        </article>
      </section>
    </section>
  )
}

export default Trending
