import './globals.css'

export const metadata = {
  title: 'Тестовое задание o-complex',
  description: 'Created by Nazar Kultayev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
