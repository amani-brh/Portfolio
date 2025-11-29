import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Map, Droplet, Mountain, Wrench, Boxes } from "lucide-react";

// Skill icons mapping
const skillIcons = {
  "AutoCAD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg",
  "Revit": "https://cdn.worldvectorlogo.com/logos/autodesk-revit.svg",
  "Robot Structural Analysis (RSA)": "https://www.autodesk.com/favicon.ico",
  "RDM6": null, // Will use fallback icon
  "SAP2000": null,
  "IDEA Statica": null,
  "QGIS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qgis/qgis-original.svg",
  "EPANET": null,
  "SWMM": null,
  "GeoStudio": null,
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MATLAB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Excel VBA": "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
  "Suite Microsoft Office": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
  "LaTeX": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",
};

// Fallback icons by category
const categoryIcons = {
  conception: Boxes,
  structure: Wrench,
  sig: Map,
  hydraulique: Droplet,
  geotech: Mountain,
  programmation: Code2,
};

const skills = [
  { name: "AutoCAD", level: 95, category: "conception" },
  { name: "Revit", level: 85, category: "conception" },
  { name: "Robot Structural Analysis (RSA)", level: 90, category: "structure" },
  { name: "RDM6", level: 80, category: "structure" },
  { name: "SAP2000", level: 75, category: "structure" },
  { name: "IDEA Statica", level: 85, category: "structure" },
  { name: "QGIS", level: 90, category: "sig" },
  { name: "EPANET", level: 80, category: "hydraulique" },
  { name: "SWMM", level: 75, category: "hydraulique" },
  { name: "GeoStudio", level: 70, category: "geotech" },
  { name: "C", level: 70, category: "programmation" },
  { name: "SQL", level: 75, category: "programmation" },
  { name: "MATLAB", level: 70, category: "programmation" },
  { name: "Python", level: 65, category: "programmation" },
  { name: "Excel VBA", level: 90, category: "programmation" },
  { name: "Suite Microsoft Office", level: 95, category: "programmation" },
  { name: "LaTeX", level: 90, category: "programmation" },
];

const categories = [
  "all",
  "conception",
  "structure",
  "sig",
  "hydraulique",
  "geotech",
  "programmation",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );


  // eslint-disable-next-line react/prop-types
  const SkillIcon = ({ skill }) => {
    // eslint-disable-next-line react/prop-types
    const iconUrl = skillIcons[skill.name];
    // eslint-disable-next-line react/prop-types
    const FallbackIcon = categoryIcons[skill.category];
    const [imageError, setImageError] = useState(false);

    if (iconUrl && !imageError) {
      return (
        <img 
          src={iconUrl} 
          // eslint-disable-next-line react/prop-types
          alt={skill.name}
          className="w-12 h-12 object-contain"
          onError={() => setImageError(true)}
        />
      );
    }

    return (
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <FallbackIcon className="w-6 h-6 text-primary" />
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary"> Compétences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "all"
                ? "Toutes"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <SkillIcon skill={skill} />
                  <div className="w-12 h-12 rounded-lg bg-primary/10 items-center justify-center hidden">
                    {(() => {
                      const FallbackIcon = categoryIcons[skill.category];
                      return <FallbackIcon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg leading-tight">{skill.name}</h3>
                </div>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};