

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-screen flex items-center justify-center gradientBgColor">
        {children}
      </section>
    )
  }