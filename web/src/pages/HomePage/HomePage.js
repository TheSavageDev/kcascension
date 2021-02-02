import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <main>
        <BlogPostsCell />
      </main>
    </BlogLayout>
  )
}

export default HomePage
