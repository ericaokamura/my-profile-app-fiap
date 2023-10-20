import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Erica Okamura</title>
      </head>
      <body>{children}</body>
    </html>
  )
}