import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"
import { formatDate } from "~/shared/utils"
import { allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"

export default function Blog() {
  const blogs = allBlogs.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  return (
    <>
      <PageSEO title={"Bài viết"} />
      <RootLayout.Container>
        <MetaHeader
          title="Bài viết"
          description="Những bài viết dựa trên kinh nghiệm làm việc của tôi. Hi vọng những kiến thức này sẽ giúp ích cho các bạn ❤️"
        />
        {blogs?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {blogs.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No blogs published.</p>
        )}
      </RootLayout.Container>
    </>
  )
}
