import { Link } from 'react-router-dom'



function Project () {
    return(
   <>
      <div>
      <div className="pt-lg-5">
                <div className="row d-flex justify-content-center">
                
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card rounded-4 shadow">
                      <div className="d-flex justify-content-center p-3">
                        <img src={`http://localhost:5173/src/assets/Images/Portal2.png`} class="card-img-top w-15 rounded-4"
                          alt="Imagen del proyecto" />
                      </div>
                     
                      <div className="card-body">
                        <h3 id="titleForm" class="satisfy-regular">Portafolio Básico</h3>
                        <p className="card-text text-center px-4 py-2">HTML - CSS - BOOTSTRAP  </p>
                        <div className="btn-field">
                          <a href="https://lhyck.github.io/TicmasProyectoCV_CortezLG/">
                            <button type="button">Ver el proyecto</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card rounded-4 shadow">
                      <div className="d-flex justify-content-center p-3">
                        <img src={`http://localhost:5173/src/assets/Images/boostrapPortal.png`} class="card-img-top w-15 rounded-4"
                          alt="Imagen del proyecto" />
                      </div>
                     
                      <div className="card-body">
                        <h3 id="titleForm" class="satisfy-regular">Portal Diario</h3>
                        <p className="card-text text-center px-4 py-2">HTML - CSS - JAVASCRIPT - BOOTSTRAP </p>
                        <div className="btn-field">
                          <a href="https://lhyck.github.io/Portal-de-noticias/">
                            <button type="button">Ver el proyecto</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
      </div>
      <div className="pt-lg-5">
                <div className="row d-flex justify-content-center">
                
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card rounded-4 shadow">
                      <div className="d-flex justify-content-center p-3">
                        <img src={`http://localhost:5173/src/assets/Images/Portal3.png`} class="card-img-top w-15 rounded-4"
                          alt="Imagen del proyecto" />
                      </div>
                     
                      <div className="card-body">
                        <h3 id="titleForm" class="satisfy-regular">DevTech</h3>
                        <p className="card-text text-center px-4 py-2">HTML - CSS - JAVASCRIPT - BOOTSTRAP  </p>
                        <div className="btn-field">
                          <a href="https://lhyck.github.io/devtech-podcast-web/">
                            <button type="button">Ver el proyecto</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card rounded-4 shadow">
                      <div className="d-flex justify-content-center p-3">
                        <img src={`http://localhost:5173/src/assets/Images/Portal5.png`} class="card-img-top w-15 rounded-4"
                          alt="Imagen del proyecto" />
                      </div>
                     
                      <div className="card-body">
                        <h3 id="titleForm" class="satisfy-regular">Feria de las Plantas</h3>
                        <p className="card-text text-center px-4 py-2">HTML - CSS - BOOTSTRAP - JAVASCRIPT - API REST - </p>
                        <div className="btn-field">
                          <a href="https://lhyck.github.io/Proyecto-6/">
                            <button type="button">Ver el proyecto</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>
      </div>

      </div>
   </>
    )
}

export default Project