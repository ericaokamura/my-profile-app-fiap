export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <header>
        <title>Erica Okamura</title>
      </header>
      <body>{children}</body>
    </html>
  )
}