import { useAuth } from '@redwoodjs/auth'

const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  const { hasRole } = useAuth()

  const moderate = () => {
    if (confirm('Are you sure?')) {
      // TODO: delete comment
    }
  }

  return (
    <div className="relative text-white bg-grey p-8 rounded-lg">
      <header className="flex justify-between">
        <h2 className="font-semibold text-blue-200">{comment.name}</h2>
        <time className="text-xs" dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p className="text-sm mt-2">{comment.body}</p>
      {hasRole('moderator') && (
        <button
          type="button"
          onClick={moderate}
          className="absolute bottom-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default Comment
