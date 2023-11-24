import { db } from '@/db'

export type PostWithData = Awaited<
  ReturnType<typeof fetchPostByTopicSlug>
>[number]

export function fetchPostBySearchTerm(term: string) {
  return db.post.findMany({
    include: {
      topic: {
        select: {
          slug: true,
        },
      },
      user: {
        select: {
          name: true,
          image: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    where: {
      OR: [
        {
          title: {
            contains: term,
          },
        },
        {
          content: {
            contains: term,
          },
        },
      ],
    },
  })
}

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

export function fetchTopPost(): Promise<PostWithData[]> {
  return db.post.findMany({
    orderBy: {
      comments: {
        _count: 'desc',
      },
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
          image: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    take: 5,
  })
}
