import pythonCert from "../assets/certs/python.webp";
import problemSolvingCert from "../assets/certs/problemSolving.webp";
import devopsCert from "../assets/certs/devops.webp";
import linuxCert from "../assets/certs/linux.webp";
import linuxScore from "../assets/certs/score.webp";

const certificates = [
  {
    id: "linux-essentials",
    image: linuxCert,
    alt: "Certification Linux Essentials du Linux Professional Institute",
    title: "Fondamentaux Linux",
    description:
      "Certification internationale délivrée par le Linux Professional Institute, qui valide de bonnes bases en systèmes Linux, ligne de commande, gestion de fichiers et sécurité de base.",
    scoreImage: linuxScore,
    scoreAlt: "Relevé de score Linux Essentials",
  },
  {
    id: "devops",
    image: devopsCert,
    alt: "Certificat de formation DevOps et CI/CD",
    title: "Fondamentaux DevOps",
    description:
      "Introduction aux concepts clés du DevOps : pipelines CI/CD, gestion de version avec GitLab et déploiement automatisé d'applications, avec un focus sur la coordination en équipe.",
  },
  {
    id: "problem-solving",
    image: problemSolvingCert,
    alt: "Certificat en résolution de problèmes",
    title: "Résolution de problèmes",
    description:
      "Couvre les bases de la résolution de problèmes : pensée algorithmique, reconnaissance de patterns et modélisation logique. Axé sur des bases analytiques solides grâce à une pratique structurée et des exercices appliqués.",
  },
  {
    id: "python-development",
    image: pythonCert,
    alt: "Certificat en programmation Python",
    title: "Développement Python",
    description:
      "Valide les bases de Python pour le scripting, l'automatisation et le développement backend. Formation structurée autour d'exercices pratiques pour coder de manière fiable et scalable.",
  },
];

export default certificates;
