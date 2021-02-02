import BlogPost from '../BlogPost/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <section className="-mt-10">
      {posts.map((post) => (
        <article className="mt-10" key={post.id}>
          <BlogPost post={post} summary={true} />
        </article>
      ))}
    </section>
  )
}
