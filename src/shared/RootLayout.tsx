import NavigationBar from '@/partials/NavigationBar'

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children } : RootLayoutProps) {

  return (
    <>
      <main className="dark:bg-[#0f0f0f] dark:text-white w-full min-h-screen">
        <NavigationBar />
        <div>{children}</div>
      </main>
    </>
  )
}

export default RootLayout
