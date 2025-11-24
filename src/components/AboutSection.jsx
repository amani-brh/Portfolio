import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À propos <span className="text-primary"> de moi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Étudiante en Génie Civil – ENIT
            </h3>

            <p className="text-muted-foreground">
              Étudiante en troisième année de Génie Civil à l’École Nationale d’Ingénieurs de Tunis (ENIT),
              passionnée par le génie structurel, la construction métallique et industrielle ainsi que les technologies modernes de construction.
            </p>

            <p className="text-muted-foreground">
              Je développe mes compétences à travers des projets académiques, des stages et une participation active à des clubs.
              Je maîtrise AutoCAD, RSA, QGIS, IDEA StatiCa, ainsi que plusieurs outils d’analyse structurelle et de modélisation.
              Rigoureuse, organisée et dotée d'un fort esprit analytique, je suis motivée par la recherche de solutions techniques efficaces et innovantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Me Contacter
              </a>

              <a
                href="/CV_Amani_Barhoumi.pdf" // Updated to point to the CV in the public folder
                target="_blank" // Opens the CV in a new tab
                rel="noopener noreferrer" // Security best practice for external links
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger CV
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN – SKILLS CARDS */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Structural Engineering */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Génie Structurel</h4>
                  <p className="text-muted-foreground">
                    Modélisation, analyse et dimensionnement de structures en béton et métallique  
                    (RSA, SAP2000, RDM6, IDEA StatiCa).
                  </p>
                </div>
              </div>
            </div>

            {/* Civil Engineering & Tools */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Outils & Logiciels</h4>
                  <p className="text-muted-foreground">
                    AutoCAD, Revit, QGIS, EPANET, SWMM, GeoStudio — outils essentiels pour la conception,
                    l’analyse hydraulique et la modélisation géotechnique.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Expérience Professionnelle</h4>
                  <p className="text-muted-foreground">
                    Stage ingénieur chez TECI : conception et calcul d’un bâtiment métallique selon les Eurocodes.
                    Stage ouvrier au projet de rénovation de la piscine municipale du Belvédère.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
