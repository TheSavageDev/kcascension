import MainLayout from 'src/layouts/MainLayout/MainLayout'
import Reconciliation from 'src/images/reconciliation.jpg'
import Schedule from 'src/components/Schedule/Schedule'
import Trending from 'src/components/Trending/Trending'

const HomePage = () => {
  return (
    <MainLayout>
      <section>
        <section className="bg-gray-100 dark:bg-primary-900">
          <header className="container mx-auto flex flex-col items-center px-4 py-8 text-center lg:px-16 text-green-900 dark:text-gray-100">
            <h1 className="text-5xl font-bold leading-none sm:dark:text-6xl xl:max-w-3xl">Church of the Ascension</h1>
            <h2 className="text-4xl font-bold leading-none sm:dark:text-5xl xl:max-w-2xl">Catholic Parish</h2>
          </header>
        </section>
        <img id="hero" src={Reconciliation} alt="" className="w-full shadow-md object-cover" />
      </section>
      <Schedule />
      <Trending />
    </MainLayout>
  )
}

export default HomePage
