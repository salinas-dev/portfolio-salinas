---
title: "Arquitectura multi-tenant para Odoo en Docker"
description: "Múltiples instancias Odoo con DB separada por cliente, reverse proxy y backups programados."
year: 2025
tags: ["Docker", "Odoo", "Multi-tenant", "PostgreSQL", "Traefik"]
stack: ["Docker", "Docker Compose", "Odoo", "PostgreSQL", "Traefik/Nginx"]
cover: "/images/projects/odoo.png"
repo: "N/A"
demo: "N/A"
highlights:
  - "Contenerización de múltiples instancias Odoo."
  - "Base de datos PostgreSQL separada por cliente."
  - "Reverse proxy con Traefik o Nginx."
  - "Backups automáticos programados."
  - "Estrategia de actualización sin downtime (básico)."
---

## Qué hice

Diseñé una arquitectura para operar múltiples clientes aislados por instancia.

## Resultado

Aislamiento por cliente, operación más ordenada y backups recurrentes.
