import NavigationBar from '@/partials/NavigationBar'
import Footer from '@/partials/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children } : RootLayoutProps) {

  return (
    <>
      <main className="dark:bg-[#0A0A0A] dark:text-white w-full min-h-screen">
        <NavigationBar />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default RootLayout
