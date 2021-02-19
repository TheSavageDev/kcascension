import Footer from 'src/components/Footer/Footer'
import Navbar from 'src/components/Navbar/Navbar'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-white">{children}</main>
      <Footer />
    </>
  )
}

export default BlogLayout
