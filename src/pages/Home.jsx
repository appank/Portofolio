import DashboardLayout from "../components/DashboardLayout";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <DashboardLayout>
      <section>
        <h2 className="animate__animated animate__fadeIn mb-2 text-4xl font-bold">Hi!</h2>
        <h1 className="animate__animated animate__fadeIn mb-4 text-[clamp(3rem,15vw,4.5rem)] font-bold leading-[1.1] md:text-5xl">
          <span className="whitespace-nowrap">
            i'm <span className="text-table-heading md:text-6xl">BASO</span>
          </span>{" "}
          <span className="block text-table-heading md:inline md:text-6xl">ARFAN</span>{" "}
          <span className="block text-accent-orange md:inline md:text-6xl">EFENDY</span>
        </h1>
        <p className="animate__animated animate__fadeIn text-lg leading-relaxed">
          Professional Trader & Investor | Software Developer | Building Web Applications through Vibe Coding and Continuous Learning.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="https://github.com/appank"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub @appank"
            className="animate__animated animate__fadeIn inline-flex items-center gap-2 rounded-sm text-lg hover:text-accent-orange"
          >
            <FaGithub aria-hidden="true" className="h-5 w-5" />
            <span>@appank</span>
          </a>
          <a
            href="https://id.linkedin.com/in/baso-arfan-efendy-2570111b3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn @basoarfanefendy"
            className="animate__animated animate__fadeIn inline-flex items-center gap-2 rounded-sm text-lg hover:text-accent-orange"
          >
            <FaLinkedin aria-hidden="true" className="h-5 w-5" />
            <span>@basoarfanefendy</span>
          </a>
        </div>
      </section>
    </DashboardLayout>
  );
}
