import { deleteSnippet } from '@/actions'
import { db } from '@/db'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface SnippetDetailPageProps {
  params: {
    id: string
  }
}

export default async function SnippetDetailPage(props: SnippetDetailPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  })

  if (!snippet) {
    return notFound()
  }

  const handleDelete = deleteSnippet.bind(null, snippet.id)

  return (
    <div>
      <div className="flex my-4 justify-between items-center">
        <h1 className="text-3xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={handleDelete}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-400">
        <code>{snippet.code}</code>
      </pre>
    </div>
  )
}
