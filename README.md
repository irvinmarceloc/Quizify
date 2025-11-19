# 🧠 Quizify - Plataforma de Evaluación Ágil

> **Simulación de Proyecto de Software (Sprint 2)**
> *Materia: Gestión de Proyectos Ágiles*

Este repositorio documenta la evolución técnica del producto "Quizify" durante su segundo ciclo de desarrollo (Sprint), implementando funcionalidades críticas de colaboración docente y evaluación avanzada.

## 📅 Ficha del Sprint
* **Duración:** 14 días (5 Nov - 19 Nov 2025).
* **Metodología:** Scrum Híbrido.
* **Estado:** `RELEASED v2.0`.

## 👥 Equipo de Desarrollo
| Rol | Desarrollador | Responsabilidades Principales |
| :--- | :--- | :--- |
| **Dev 1 (P1)** | **Analía González** | Backend Logic, Gestión de Usuarios, Corrección y QA. |
| **Dev 2 (P2)** | **Irvin Cardozo** | Frontend UI/UX, Interacciones Alumno, Integración IA y QA. |

## 🚀 Unidades de Trabajo (UT) Entregadas

### 1. Autoría Compartida (UT-1041)
Permite la colaboración síncrona/asíncrona entre docentes.
* **Estado:** ✅ Completado.
* **Tech:** Gestión de permisos en LocalStorage, validación de emails.

### 2. Preguntas Abiertas y Tipadas (UT-1012)
Expansión del motor de preguntas para soportar entradas no booleanas.
* **Estado:** ✅ Completado.
* **Tipos Soportados:**
    * Selección Múltiple (Radio).
    * Texto Libre (`textarea` con contador).
    * Numérico (`input type="number"`).

### 3. Corrección Asistida (UT-1013)
Dashboard para calificación manual de respuestas abiertas.
* **Estado:** ✅ Completado.
* **Features:**
    * Visualización de respuesta del alumno.
    * **Sugerencia IA:** El sistema propone una nota basada en palabras clave.
    * Feedback manual del profesor.

### 4. Variación de Contenido con IA (UT-1010)
Generador de contenido auxiliar para docentes.
* **Estado:** ✅ Completado.
* **Funcionalidad:** Reescribe enunciados para crear variantes (Fila A / Fila B).

### 5. Mantenimiento (Flecos)
* **UT-1087:** Clarificación de flujos de guardado (UX Writing).
* **UT-1088:** Reparación de sidebar en dispositivos móviles (CSS Flexbox).

## 🛠️ Instalación y Despliegue
Este proyecto es **Serverless** (ejecutable en navegador).
1. Clonar el repositorio.
2. Abrir `index.html` para la **Vista Profesor**.
3. Abrir `student.html` para la **Vista Alumno**.
4. Los datos persisten localmente en el navegador.

---
*Generado automáticamente como evidencia de auditoría de código.*
