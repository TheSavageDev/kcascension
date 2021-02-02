import BlogLayout from './BlogLayout'

export const loggedIn = () => {
  mockCurrentUser({ email: 'jason@thesavage.dev' })

  return <BlogLayout />
}

export const loggedOut = () => {
  return <BlogLayout />
}

export default { title: 'Layouts/BlogLayout' }
