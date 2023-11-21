'use client'
import React from 'react'
import { Editor } from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'

interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  return (
    <Editor
      height="40vh"
      theme="vs-dark"
      language="javascript"
      defaultValue={snippet.code}
      options={{ minimap: { enabled: false } }}
    />
  )
}
