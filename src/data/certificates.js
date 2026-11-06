import pythonCert from "../assets/certs/python.webp";
import problemSolvingCert from "../assets/certs/problemSolving.webp";
import devopsCert from "../assets/certs/devops.webp";
import linuxCert from "../assets/certs/linux.webp";
import linuxScore from "../assets/certs/linuxScore.webp";
import delfB2 from "../assets/certs/delfB2.webp";
import delfB2Score from "../assets/certs/delfB2score.webp";
import huaweiCert from "../assets/certs/huawei.png";
import hciaOpenEuler from "../assets/certs/huawei/HCIA-openEuler V1.0 Course.png";
import hciaOpenGauss from "../assets/certs/huawei/HCIA-openGauss V2.0 Course.png";
import hcipOpenGauss from "../assets/certs/huawei/HCIP-openGauss V1.0 Course.png";
import openGaussDatabase from "../assets/certs/huawei/openGauss Database Technology and Applications.png";

const certificates = [
  {
    id: "huawei-ict-academy",
    image: huaweiCert,
    alt: "Certificat de fin de formation Huawei ICT Academy",
    title: "Huawei ICT Academy",
    description:
      "Parcours de formation Huawei ICT Academy autour de openEuler (OS de Huawei) et openGauss (SGBD de Huawei), avec des cours de niveau HCIA (Beginner) et HCIP(Intermediate) validés par un examen.",
    courses: [
      {
        id: "hcia-openeuler",
        title: "HCIA-openEuler V1.0",
        file: hciaOpenEuler,
      },
      {
        id: "hcia-opengauss",
        title: "HCIA-openGauss V2.0",
        file: hciaOpenGauss,
      },
      {
        id: "hcip-opengauss",
        title: "HCIP-openGauss V1.0",
        file: hcipOpenGauss,
      },
      {
        id: "opengauss-database",
        title: "openGauss Database Technology and Applications",
        file: openGaussDatabase,
      },
    ],
  },
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
  {
    id: "delf-b2",
    image: delfB2,
    alt: "DELF B2 - diplôme en cours d'obtention",
    title: "DELF B2",
    description:
      "Diplôme d'études en langue française de niveau B2. Certification attestant d'un niveau intermédiaire avancé en français. Diplôme officiel en attente de délivrance.",
    scoreImage: delfB2Score,
    scoreAlt: "Relevé de score DELF B2",
  },
];

export default certificates;
