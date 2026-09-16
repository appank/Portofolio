import Topbar from "./Topbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0E1111] dark:bg-[#0E1111] dark:text-white">
      <Topbar />
      <main className="mx-auto w-full max-w-[800px] flex-1 px-4 py-1 md:px-10 md:py-5">
        {children}
      </main>
      <footer className="py-6 text-center text-sm">
        &copy; 2026 By <span className="font-bold underline">basoarfan.</span>
      </footer>
    </div>
  );
}
