import NavigationBar from '@/partials/NavigationBar'
import Footer from '@/partials/Footer';
import { FloatingNav } from '@/components/ui/floating-navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children } : RootLayoutProps) {

  return (
    <>
      <main className="dark:text-white w-full min-h-screen">
        <NavigationBar />
        <FloatingNav navItems={[
          {name: 'About', link: '#about'},
          {name: 'Testimonials', link: '#testimonials'},
          {name: 'Projects', link: '#projects'},
          {name: 'Contact', link: '#contact'},
        ]}/>
        <div>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default RootLayout
