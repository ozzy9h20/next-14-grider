import type { Post, Topic, User } from '@prisma/client'
import { db } from '@/db'

export type PostWithData = Post & {
  topic: Pick<Topic, 'slug'>
  user: Pick<User, 'name'>
  _count: {
    comments: number
  }
}

export function fetchPostByTopicSlug(slug: string): Promise<PostWithData[]> {
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
