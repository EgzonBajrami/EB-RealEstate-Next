import '../globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/assets/fonts/fonts.css'


export const metadata = {
  title: 'EB Patundshmeri',
  description: 'EB Patundshmeri, agjensioni juaj i besuar i patundshmerise!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
