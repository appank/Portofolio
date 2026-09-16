import DashboardLayout from "../components/DashboardLayout";
import { SiTailwindcss } from "react-icons/si";

const iconBase = "https://raw.githubusercontent.com/dheereshagrwal/coloured-icons";
const technologies = [
  ["React", "ef59ea8e2bba5848a8f471f94b24f55289c86476", "react/react"],
  ["JavaScript", "ef59ea8e2bba5848a8f471f94b24f55289c86476", "javascript/javascript"],
  ["Firebase", "ef59ea8e2bba5848a8f471f94b24f55289c86476", "firebase/firebase"],
  ["Dart", "ef59ea8e2bba5848a8f471f94b24f55289c86476", "dart/dart"],
  ["Flutter", "ef59ea8e2bba5848a8f471f94b24f55289c86476", "flutter/flutter"],
  ["Mysql", "ef59ea8e2bba5848a8f471f94b24f55289c86476", "mysql/mysql-vertical"],
  ["Supabase", "bc82276a7ea47630ae52edd6137e58da18cfedce", "supabase/supabase"],
  ["Tailwind CSS"],
  ["Laravel", "3a0c2f14d5a956433d3a8f129507cd98f816e241", "laravel/laravel"],
];

export default function About() {
  return (
    <DashboardLayout>
      <h1 className="animate__animated animate__fadeIn mb-4 text-4xl font-bold md:text-5xl">
        &quot; <span className="text-accent-orange">About Me</span>
      </h1>
      <p className="animate__animated animate__fadeIn text-lg leading-relaxed">
        I graduated from Universitas Dipa Makassar with a degree in Informatics Engineering in 2021. After graduation, I began my career as an Android application developer and successfully published several personal applications on the Google Play Store, generating revenue through Google AdMob. I actively developed and maintained these applications until 2024, when my developer account was eventually closed by Google.
      </p>
      <p className="animate__animated animate__fadeIn mt-4 text-lg leading-relaxed">
        Currently, I work as a full-time trader and investor. In addition, I occasionally take on freelance web development projects, allowing me to continue applying and improving my skills in technology and software development.
      </p>
      <h2 className="animate__animated animate__fadeIn mb-4 mt-8 text-2xl font-bold">
        &quot; <span className="text-accent-orange">Tech Stack</span>
      </h2>
      <div className="animate__animated animate__fadeInUp mx-auto grid max-w-[800px] grid-cols-5 gap-4 md:grid-cols-9">
        {technologies.map(([name, revision, path]) => (
          <div key={name} className="text-center">
            {name === "Tailwind CSS" ? (
              <SiTailwindcss role="img" aria-label={name} className="mx-auto h-10 w-10 text-cyan-400" />
            ) : (
              <img src={iconBase + "/" + revision + "/public/logos/technology/" + path + ".svg"} alt={name} className="mx-auto h-10 w-10 object-contain" />
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
