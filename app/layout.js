import './globals.css';
<<<<<<< HEAD
=======
import MainHeader from "@/components/main-header/main-header";
>>>>>>> edfb6ed (Add error.js to archieve filter page and throw error when filter invalid)

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <div id="page">
          <MainHeader />
          {children}
      </div>
      </body>
    </html>
  )
}
