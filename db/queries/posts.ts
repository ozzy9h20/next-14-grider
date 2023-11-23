import { db } from '@/db'

export type PostWithData = Awaited<
  ReturnType<typeof fetchPostByTopicSlug>
>[number]

export function fetchPostByTopicSlug(slug: string) {
  return db.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
  })
}
