import { Link, routes } from '@redwoodjs/router'

const truncate = (text, length) => {
  return text.substring(0, length) + ' ... '
}

const BlogPost = ({ post, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <article className="mt-2 text-gray-900 font-light">
        {summary ? truncate(post.body, 100) : post.body}
      </article>
    </article>
  )
}

export default BlogPost
