export default function Head({
  params,
}: {
  params: { post: string }
}) {
  const title = params.post.replaceAll('-', ' ')
  return (
    <>
      <title>{`${title} - Karnell `}</title>
    </>
  )
}
