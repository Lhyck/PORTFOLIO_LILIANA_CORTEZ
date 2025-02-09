import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import '../styles/Formacion.css'


function Formacion() {
    return(
   <div>
<Card className="bg-dark text-white">
      <Card.Img src= {`http://localhost:5173/src/assets/Images/unju.jfif`} className='ImagenCard' alt="Card image" />
      <Card.ImgOverlay>
        <Card.Text>    
        <h1 className="clase1">Educación Universitaria</h1>
        <div className="containerFormac">
            <div className="clase2">
                <li><a>.•  Analista Programador Universitario (Facultad de Ingeniería) Finalizado</a></li>
                <li><a>.•  Ingeniería en Informática (Facultad de Ingeniería) En Curso</a></li>
               
            </div>
        </div>
        <h1 className="clase1">Educación Complementaria</h1>
        <div className="containerFormac">


            <div className="clase2">
                <li><a>.•  Curso de Redes y Seguridad Informática (Facultad de Ingeniería)</a></li>
                
                <li><a>.•  Seminario de Robótica y Automatización (Facultad de Ingeniería)</a></li>
                <li><a>.•  Jornada de Seguridad Informática en la Red (Facultad de Ingeniería)</a></li>
                <li><a>.•  Taller de SQL ( Facultad de Ingeniería )</a></li>
                <li><a>.•  Jornada de Big Data ( Infinito X Descubrir )</a></li> 
                <li><a>.•  FullStack Web Developer ( Escuela de Desarrollo Económico y Productivo )</a></li> 
                <li><a>.•  Desarrollo Front End ( Argentina Programa 4.0 )</a></li> 
                <li><a>.•  Desarrollo de Apps Móviles ( Argentina Programa 4.0 )</a></li>
                <li><a>.•  Introducción a la Inteligencia Artificial ( Open Academy )</a></li>   
                <li><a>.•  FullStack developer ( Cilsa - En curso - )</a></li>
            </div>
        </div>

        <h1 className="clase1">Area Informática</h1>
        <div className="containerFormac">

            <div className="clase2">
                <li><a>.•  Ofimática: Microsoft Office (Word, Excel, Visual Basic, Power Point, etc.)</a></li>
                <li><a>.•  Bases de Datos: Access, Oracle, MySQL, Postgres, Mongo, sqlite3 .</a></li>
                <li><a>.•  Sistemas Operativos: MS DOS, Windows, Linux, Android.</a></li>
                <li><a>.•  Comunicación: Router TCP/IP, Redes LAN y WIFI.</a></li>
                <li><a>.•  Lenguajes de Programación: C/C + +, HTML 5, Java, .NET,C #, JavaScript, Python.</a></li>
                <li><a>.•  Herramientas de modelado de software: OpenProj, StarUML, ProjectLibre, Modelio, Bonita Soft, Genexus.</a></li>
                <li><a>.•  Front End : Html 5, Css, JavaScript, Angular, React, Django.</a></li>
                <li><a>.•  Back End : Node JS, Java,JavaScripts.</a></li>
                <li><a>.•  Gestión de Paquetes : Npm, Dpkg.</a></li>
                <li><a>.•  Control de Versiones : Git, GitLab, Github.</a></li>
            </div>
        </div>


        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
   </div>
     
 
              
    ) 
  }
  
  export default Formacion

