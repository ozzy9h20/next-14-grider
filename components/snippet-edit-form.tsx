'use client'
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code)

  const handleEditorChange = (value: string = '') => {
    setCode(value)
  }

  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={code}
      options={{ minimap: { enabled: false } }}
      onChange={handleEditorChange}
    />
  )
}
