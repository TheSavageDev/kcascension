import Footer from 'src/components/Footer/Footer'
import Navbar from 'src/components/Navbar/Navbar'

const BlogLayout = ({ children }) => {
  return (
    <div className="dark">
      <Navbar />
      <main className="w-full bg-gray-100 dark:bg-gray-900">{children}</main>
      <Footer />
    </div>
  )
}

export default BlogLayout
