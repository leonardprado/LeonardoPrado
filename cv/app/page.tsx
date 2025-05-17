//import { FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa'; // Importa los iconos que necesites
import  fotoperfil  from '../public/img/foto-perfil.jpg'


export default function Home() {
  return (
      <div className="resume-container">
        <aside className="left-column">
            <div className="profile-pic-container">
                <picture>
                  <img src={fotoperfil} alt="Foto de Perfil de Leonardo Prado" className="profile-pic" width={800}
                  height={500}/>

                </picture>
            </div>

            <section className="contact-info">
                <h2>CONTACTO</h2>
                <p><span className="icon">📍</span> Maipú 9678</p>
                <p><span className="icon">📞</span> +542236990397</p>
                <p><span className="icon">📧</span> estudioprado02@gmail.com</p>
                <p><span className="icon">🆔</span> DNI: 31187048</p>
                <p><span className="icon">💍</span> Casado</p>
            </section>

            <section className="aptitudes">
                <h2>APTITUDES</h2>
                <ul>
                    <li>Liderazgo ejecutivo</li>
                    <li>Conocimientos de gestión de resultados multimillonarios en la región del Sudeste Asiático</li>
                    <li>Relaciones con clientes y proveedores</li>
                    <li>Desarrollo de líneas de productos y campañas de marketing</li>
                    <li>Desarrollo de políticas de formación y RR. HH.</li>
                    <li>Optimización de procesos</li>
                </ul>
            </section>
        </aside>

        <main className="right-column">
            <header className="header">
                <h1>Leonardo Prado</h1>
                <p className="summary">
                    Directora ejecutiva de operaciones con amplia experiencia en la supervisión de
                    operaciones de marketing, TI, RR. HH., formación y propiedad de ámbito
                    regional en una importante cadena de restaurantes.
                </p>
            </header>

            <section className="education">
                <h2>FORMACIÓN</h2>
                <div className="education-item">
                    <p className="degree">Grado universitario con Tecnicatura en Electromecanica y Desarrollo de Software.</p>
                    <p className="institution">Universidad Tecnologica Mar del Plata</p>
                </div>
            </section>

            <section className="experience">
                <h2>HISTORIAL LABORAL</h2>
                <article className="job">
                    <div className="job-header">
                        <p className="dates">09/2015 - presente</p>
                        <p className="job-title">Vicepresidenta ejecutiva</p>
                        <p className="company-location">Pizza Hut España - Fuenlabrada, Madrid</p>
                    </div>
                    <ul>
                        <li>Dirección de las operaciones relacionadas con la marca (marketing, TI, RR. HH., formación, desarrollo, construcción, propiedad y resultados) de más de 200 establecimientos.</li>
                        <li>Supervisión de las operaciones de la empresa y las franquicias de toda la región.</li>
                        <li>Evaluación de la rentabilidad de los procesos de la empresa a fin de determinar la estructura óptima para maximizar los beneficios.</li>
                    </ul>
                </article>

                <article className="job">
                     <div className="job-header">
                        <p className="dates">08/2007 - 09/2015</p>
                        <p className="job-title">Vicepresidenta sénior</p>
                        <p className="company-location">Café Rouge - Londres</p>
                    </div>
                    <ul>
                        <li>Dirección de la coordinación de estrategias entre departamentos para consolidar las ventas.</li>
                        <li>Desarrollo de relaciones sólidas con los franquiciados para elevar los estándares operativos.</li>
                        <li>Implementación de mejoras en los procesos para incrementar la satisfacción y la fidelidad de los clientes.</li>
                    </ul>
                </article>
            </section>
        </main>
    </div>
  )
}
