import Head from "next/head"
import { useRouter } from "next/router"
import { siteMetadata } from "~/shared"

interface PageSEOProps {
  title: string
  description?: string
}

const PageSEO = ({ title, description }: PageSEOProps) => {
  const router = useRouter()
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      {description && <meta name="description" content={description} />}
      <meta
        property="og:url"
        content={`${siteMetadata.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={siteMetadata.ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={siteMetadata.siteUrl + siteMetadata.socialBanner}
      />
    </Head>
  )
}

export default PageSEO
