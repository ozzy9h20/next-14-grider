'use client'
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import * as actions from '@/actions'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code)

  const handleEditorChange = (value: string = '') => {
    setCode(value)
  }

  const handleEditorSubmit = actions.editSnippet.bind(null, snippet.id, code)

  return (
    <div>
      <Editor
        height="50vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={handleEditorSubmit}>
        <button
          className="p-2 my-2 border rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
