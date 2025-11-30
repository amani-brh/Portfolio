import { GraduationCap } from "lucide-react";

const academicProjects = [
  {
    id: 5,
    title: "Conception et Dimensionnement d'un Bâtiment Métallique – Halle",
    description:
      "Étude complète d'un bâtiment métallique de type halle : modélisation, descentes de charges, dimensionnement et vérification selon l'Eurocode 3.",
    tags: ["Eurocode 3", "Structure métallique", "Modélisation"],
  },
  {
    id: 6,
    title: "Development and Study of the Zaghouan Interchange – Tunis–Jelma Highway",
    description:
      "Analyse géométrique, modélisation et étude technique d'un échangeur autoroutier dans le cadre du projet Tunis–Jelma.",
    tags: ["Infrastructure", "Autoroutes", "Géotechnique"],
  },
  {
    id: 7,
    title: "Élaboration d'une Base de Données – Matériaux de Construction Tunisiens",
    description:
      "Conception d'une base de données dédiée aux caractéristiques environnementales des matériaux de construction tunisiens et importés.",
    tags: ["Base de données", "Matériaux", "Environnement"],
  },
  {
    id: 8,
    title: "Auscultation Ultrasonique",
    description:
      "Application des techniques d'auscultation ultrasonique pour l'évaluation non destructive des matériaux, détection des fissures et caractérisation mécanique.",
    tags: ["Auscultation", "NDT", "Matériaux"],
  },
  {
    id: 9,
    title: "Non Linear Programming",
    description:
      "Implémentation et résolution de modèles d'optimisation non linéaire appliqués aux structures et systèmes complexes.",
    tags: ["Optimisation", "Mathématiques", "Programmation"],
  },
  {
    id: 10,
    title: "Projet de Rénovation de la Piscine Municipale du Belvédère",
    description:
      "Participation au suivi technique et aux étapes de rénovation de la piscine municipale du Belvédère.",
    tags: ["Chantier", "Rénovation", "Génie civil"],
  },
  {
    id: 11,
    title: "Répartition par Micropieux",
    description:
      "Calcul et conception d'une fondation profonde basée sur des micropieux, incluant le dimensionnement et la répartition des charges.",
    tags: ["Géotechnique", "Micropieux", "Fondations"],
  },
  {
    id: 12,
    title: "Stage Ingénieur – TECI",
    description:
      "Conception et calcul d'un bâtiment métallique selon les Eurocodes dans le cadre du stage ingénieur.",
    tags: ["Stage", "Eurocodes", "Structure métallique"],
  },
];

export const AcademicProjectsSection = () => {
  return (
    <section id="academic-projects" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Academic <span className="text-primary">Projects</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of academic projects completed during my engineering studies, 
          showcasing research, analysis, and technical expertise across various civil engineering domains.
        </p>

        <div className="space-y-6">
          {academicProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-lg p-6 shadow-xs card-hover border-l-4 border-primary/50 hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
};