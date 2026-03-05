export type ExperienceItem = {
  title: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Pipeline DevOps para app Flask + React",
    highlights: [
      "Dockerización de backend (Flask) y frontend (React).",
      "Orquestación con Docker Compose.",
      "CI/CD con GitHub Actions.",
      "Build automático de imágenes y push a Docker Hub.",
      "Despliegue automatizado en servidor Linux (VPS).",
      "Manejo de variables de entorno y secrets.",
    ],
  },
  {
    title: "Provisionamiento automático con Terraform",
    highlights: [
      "Infraestructura como código (DigitalOcean/AWS).",
      "Automatización de creación de VM, firewall y red.",
      "Configuración automatizada con Ansible.",
      "Instalación automática de Docker y despliegue.",
    ],
  },
  {
    title: "Monitoreo para microservicios",
    highlights: [
      "Integración de Prometheus y Grafana.",
      "Monitoreo de CPU, memoria y métricas personalizadas.",
      "Configuración de alertas básicas.",
    ],
  },
  {
    title: "Arquitectura multi-tenant para Odoo en Docker",
    highlights: [
      "Contenerización de múltiples instancias Odoo.",
      "Base de datos PostgreSQL separada por cliente.",
      "Reverse proxy con Traefik o Nginx.",
      "Backups automáticos programados.",
      "Estrategia de actualización sin downtime (básico).",
    ],
  },
  {
    title: "Escaneo de seguridad en pipeline",
    highlights: [
      "Análisis estático de código.",
      "Escaneo de vulnerabilidades en imágenes Docker.",
      "Hooks pre-commit.",
      "Gestión de secretos con variables protegidas.",
    ],
  },
];