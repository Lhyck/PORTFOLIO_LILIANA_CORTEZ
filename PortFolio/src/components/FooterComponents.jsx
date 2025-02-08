
import { Link } from 'react-router-dom'



function Footer() {
    return (
    <>
      <footer className="bg-dark text-light py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="social-icons">
                        <a href="https://github/" class="text-info me-3"><i class="bi bi-linkedin"></i></a>
                        <a href="https://linkedin/" class="text-info me-3"><i class="bi bi-github"></i></a>
                        <a href="https://instagram/" style={{ color: '#c918ff' }}><i class="bi bi-instagram"></i></a>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 px-3">© Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
    </>
    )
  
}

export default Footer 