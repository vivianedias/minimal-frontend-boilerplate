import Head from 'next/head'

type CustomHeadProps = {
  title: string;
  description: string;
  icon: string;
  image?: string;
  width?: string;
  height?: string;
}

export default function CustomHead({ title, description, image, width, height, icon }: CustomHeadProps) {
  return (
    <Head>
        <title>{title}</title>
        <link rel="icon" href={icon} />

        <meta name="description" content={description} key="desc" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <meta name="robots" content="all" />

        {image ? (
          <>
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content={width} />
            <meta property="og:image:height" content={height} />
            <meta name="twitter:image" content={image} />
          </>
        ) : null}
      </Head>
  )
}