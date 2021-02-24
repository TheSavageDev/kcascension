const TrendingCard = ({ card }) => {
  const { text, title, subtitle, image } = card
  return (
    <article className="xl:w-1/4 md:w-1/2 p-4">
      <article className="bg-primary-900 p-6 rounded-xl">
        <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
        <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">{subtitle.toUpperCase()}</h3>
        <h2 className="text-lg text-gray-100 font-medium title-font mb-4">{title}</h2>
        <p className="leading-relaxed text-base">{text}</p>
      </article>
    </article>
  )
}

export default TrendingCard
