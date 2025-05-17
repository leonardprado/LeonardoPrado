//import { FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa'; // Importa los iconos que necesites
import fotoperfil from "../public/img/foto-perfil.jpg";

export default function Home() {
  return (
    <div className="resume-container">
      <aside className="left-column">
        <div className="profile-pic-container">
          <picture>
            <img
              src="($fotoperfil)"
              alt="Foto de Perfil de Leonardo Prado"
              className="profile-pic"
              width={80}
              height={50}
            />
          </picture>
        </div>

        <section className="contact-info">
          <h2>CONTACTO</h2>
          <p>
            <span className="icon">🏠</span> Maipú 9678
          </p>
          <p>
            <span className="icon">📞</span> +549 223 699-0397
          </p>
          <p>
            <span className="icon">📧</span> estudioprado02@gmail.com
          </p>
          <p>
            <span className="icon">🆔</span> DNI: 31187048
          </p>
          <p>
            <span className="icon">💍</span> Casado
          </p>
        </section>

        <section className="aptitudes">
          <h2>Aptitudes Destacadas:</h2>
          <ul>
            <p>Resolución Efectiva de Problemas:</p>
            <li>Capacidad para identificar y solucionar inconvenientes técnicos y operativos de manera eficiente.</li>
            <p>Alto Sentido de la Responsabilidad:</p>
            <li>
              Compromiso firme con las tareas asignadas, la seguridad y el cumplimiento normativo.
            </li>
            <p>Adhesión Rigurosa a Protocolos de Seguridad:</p>
            <li>Disciplina en el seguimiento estricto de normativas y procedimientos para garantizar operaciones seguras.</li>
            <p>Versatilidad Profesional:</p>
            <li>Habilidad para adaptarse y desempeñarse competentemente en diversos entornos y funciones.
            </li>
            <p>Capacidad de Diagnóstico Técnico:</p>
            <li>Pericia en la identificación precisa de fallas mecánicas y electrónicas en vehículos y maquinaria.</li>
            <p>Proactividad y Aprendizaje Continuo:</p>
            <li>niciativa para la actualización constante de conocimientos y adquisición de nuevas habilidades.</li>
            <p>Adaptabilidad y Flexibilidad:</p>
            <li>Facilidad para ajustarse a diferentes contextos laborales, tipos de carga, vehículos y entornos operativos.</li>
          </ul>
        </section>
      </aside>

      <main className="right-column">
        <header className="header">
          <h1>Leonardo Prado</h1>
          <p className="summary">
            Profesional con una sólida trayectoria de 20 años, destacando por una marcada versatilidad que abarca el transporte especializado, el mantenimiento técnico-mecánico y las operaciones en el sector marítimo-pesquero. Experiencia comprobada en la conducción segura de cargas generales, pasajeros (urbanos y larga distancia) y mercancías peligrosas, complementada por una profunda pericia en el diagnóstico, reparación y mantenimiento preventivo/correctivo de flotas vehiculares (autobuses, camiones). Mi perfil se enriquece con experiencia práctica como Observador Científico de Pesca y formación como Marinero Mercante, además de una continua actualización profesional evidenciada por estudios en Desarrollo Web y titulaciones técnicas en Electrónica y Electromecánica. Reconocido por una notable capacidad para la resolución efectiva de problemas, un alto sentido de la responsabilidad y una adhesión rigurosa a los protocolos de seguridad. Poseo licencias de conducir profesionales D.1, D.3, D.4 y E.1.
          </p>
        </header>

        <section className="education">
          <h2>FORMACIÓN ACADÉMICA Y PROFESIONAL</h2>
          <div className="education-item">
            <div>
              <p className="degree">
              Asistente Nacional de Investigación Pesquera
            </p>
            <p className="institution">
              Instituto Nacional de Investigación y Desarrollo Pesquero (INIDEP)
            </p>
            <p>
              Mar del Plata – 2024 | 2025
            </p>
            </div>
            <div>
              <p className="degree">
                Desarrollador Web
              </p>
              <p className="institution">
                Universidad Santo Domingo
              </p>
              <p>
                Mar del Plata – 2019 | 2023
              </p>
            </div>
            <div>
              <p className="degree">
                Técnico Electromecánico
              </p>
              <p className="institution">
                Escuela de Oficios Don Bosco
              </p>
              <p>
                Mar del Plata – 2010 | 2014
              </p>
            </div>
            <div>
              <p className="degree">
                Marinero de la Marina Mercante Nacional
              </p>
              <p className="institution">
                Prefectura Naval Argentina
              </p>
              <p>
                Mar del Plata – 2008 | 2009
              </p>
            </div>
          </div>
        </section>

        <section className="experience">
          <h2>HISTORIAL LABORAL</h2>
          <article className="job">
            <div className="job-header">
              <p className="dates">12/2024 – Presente</p>
              <p className="job-title">Observador Científico de Pesca a Bordo</p>
              <p className="company-location">
                Empresa Iberconsa, Mar del Plata
              </p>
            </div>
            <ul>
              <li>
                Recolección de datos biológicos y muestreos de especies marinas a bordo de buques pesqueros.
              </li>
              <li>
                Supervisión del cumplimiento de normativas pesqueras y ambientales.  
              </li>
              <li>
                Elaboración de informes técnicos detallados sobre la actividad pesquera y capturas.
              </li>
              <li>  
                Manejo y calibración de equipos de muestreo y medición.
              </li>
              
            </ul>
          </article>

          <article className="job">
            <div className="job-header">
              <p className="dates">04/2020 – 09/2024</p>
              <p className="job-title">Oficial Mecánico y Conductor de Transporte Público</p>
              <p className="company-location">Transporte 25 de Mayo, Mar del Plata</p>
            </div>
            <ul>
              <p>Como Oficial Mecánico:</p>
              <li>
                Diagnóstico, mantenimiento preventivo y correctivo de la flota de autobuses urbanos.
              </li>
              <li>
                Reparación de sistemas mecánicos, eléctricos, hidráulicos y neumáticos.
              </li>
              <li>
                Gestión de inventario de repuestos y herramientas.
              </li>
              <p>Como Conductor de Autobuses Urbanos:</p>
              <li>
                Transporte seguro y eficiente de pasajeros en rutas urbanas asignadas.
              </li>
              <li>
                Cumplimiento de horarios y normativas de tránsito.
              </li>
              <li>
                Atención al cliente y manejo de incidencias durante el servicio.
              </li>
            </ul>
          </article>
          <article className="job">
            <div className="job-header">
              <p className="dates">01/2014 – 08/2019</p>
              <p className="job-title">Mecánico Auxiliar y Conductor de Larga Distancia</p>
              <p className="company-location">
                El Rápido S.A., Mar del Plata
              </p>
            </div>
            <ul>
              <p>Como Mecánico Auxiliar (Medio Oficial):</p>
              <li>
                Asistencia en tareas de mantenimiento y reparación de autobuses de doble piso.
              </li>
              <li>
                Inspecciones técnicas y preparación de unidades para servicio.  
              </li>
              <p>Como Conductor de Autobuses de Larga Distancia (Doble Piso):</p>
              <li>
                Conducción de unidades de doble piso en rutas interurbanas y de larga distancia.
              </li>
              <li>  
                Responsable de la seguridad y confort de los pasajeros.
              </li>
              <li>
                Manejo de documentación de viaje y cumplimiento de itinerarios.
              </li>
            </ul>
          </article>
          <article className="job">
            <div className="job-header">
              <p className="dates">01/2008 – 07/2014</p>
              <p className="job-title">Asistente de Mecánica y Electricidad Automotriz / Conductor de Taller Móvil</p>
              <p className="company-location">
                Taller Mecánico Crossa, Mar del Plata
              </p>
            </div>
            <ul>
              <p>Como Asistente de Mecánica y Electricidad:</p>
              <li>
                Colaboración en la reparación de motores, sistemas de transmisión, frenos y sistemas eléctricos de vehículos livianos y pesados.
              </li>
              <li>
                Mantenimiento general y diagnóstico básico de fallas.
              </li>
              <p>Como Conductor de Taller Móvil:</p>
              <li>
                Desplazamiento a ubicaciones de clientes para realizar asistencias y reparaciones in situ.
              </li>
              <li>  
                Manejo y mantenimiento de la unidad móvil equipada.
              </li>
              
            </ul>
          </article>
          <article className="job">
            <div className="job-header">
              <p className="dates">09/2005 – 12/2008</p>
              <p className="job-title">Conductor Propietario – Transporte de Cargas Generales</p>
              <p className="company-location">Trabajador Autónomo (Vehículo: Camión Mercedes Benz 1114), Carlos Casares</p>
            </div>
            <ul>
              <li>
                Gestión integral de operaciones de transporte de cargas generales a nivel regional y nacional.
              </li>
              <li>
                Planificación de rutas, optimización de tiempos y costos.
              </li>
              <li>
                Mantenimiento preventivo y correctivo del vehículo.
              </li>
              <li>
                Negociación con clientes y gestión administrativa de la actividad.
              </li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
