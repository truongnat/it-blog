import { GetStaticProps, Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { allBlogs } from "~/.contentlayer/generated"
import { Icons, MdxComponents } from "~/components"
import { buttonVariants } from "~/components/ui"
import { absoluteUrl, cn, formatDate } from "~/shared/utils"

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

export async function getStaticPaths() {
  const idList = allBlogs.map((elm) => elm.slugAsParams)
  const paths = [] as string[]
  idList.forEach((id) => {
    paths.push(`/blog/${id}`)
  })
  return { paths, fallback: true }
}

async function getBlogFromParams(params) {
  const slug = params?.slug?.join("/")
  const blog = allBlogs.find((b) => b.slugAsParams === slug)

  if (!blog) {
    null
  }

  return blog
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params)

  if (!blog) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", blog.title)
  ogUrl.searchParams.set("type", "My blog")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: absoluteUrl(blog.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticProps & BlogPageProps) => {
  try {
    const slug = params?.slug?.join("/")
    const blog = allBlogs.find((b) => b.slugAsParams === slug)

    return blog ? { props: { blog } } : { notFound: true }
  } catch (error) {
    console.error(error)
    return { notFound: true }
  }
}

export default function Page({ blog }) {
  return (
    <article className="container relative max-w-[calc(100%_-_80px)] md:max-w-3xl md:py-6 lg:py-10">
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        Xem tất cả bài viết
      </Link>
      <div>
        {blog?.date && (
          <time
            dateTime={blog.date}
            className="block text-sm text-muted-foreground"
          >
            Xuất bản {formatDate(blog.date)}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {blog?.title}
        </h1>
      </div>
      {blog?.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      {blog?.body && <MdxComponents code={blog.body.code} />}

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Xem tất cả bài viết
        </Link>
      </div>
    </article>
  )
}
