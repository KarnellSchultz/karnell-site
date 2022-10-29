export default function Head({
  params,
}: {
  params: { post: string }
}) {
  const title = params.post
    .replaceAll('-', ' ')
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <title>{`${title} - Karnell `}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </>
  )
}
