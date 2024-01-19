import SideBar from "@/Components/TaskApp/SideBar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="bg-[#181818] min-h-screen w-full text-white/70 flex">
        <SideBar/>
        <div className="ml-11 px-6 py-3 w-full">
            {children}
        </div>
        
      </section>
    )
  }