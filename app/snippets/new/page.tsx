import { db } from '@/db'
import { redirect } from 'next/navigation'

export default function SnippetCreatePage() {
  /* ========================================= Functions ======================================== */
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    'use server'

    // Check the user's input and make sure they're valid
    const title = formData.get('title') as string
    const code = formData.get('code') as string

    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    })
    console.log('🚀 ~ file: page.tsx:21 ~ createSnippet ~ snippet:', snippet)

    // Redirect the user back to the root route
    redirect('/')
  }

  /* ========================================== Output ========================================== */
  return (
    <form action={createSnippet}>
      <h3 className="text-3xl text-center font-bold my-5">Create A Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label
            className="w-12"
            htmlFor="title"
          >
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label
            className="w-12"
            htmlFor="code"
          >
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button
          type="submit"
          className="border rounded p-2 bg-blue-200"
        >
          Create
        </button>
      </div>
    </form>
  )
}
