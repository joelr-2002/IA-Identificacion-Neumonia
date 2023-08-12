function navbar(){
    document.getElementById('nv').innerHTML+=`
    <div class="container-fluid roboto">
                <a class="navbar-brand" href="index.html"><img id="logo"  style="height:70px;" src="img/logo-UNAH.png" ></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="informacion.html" style="color: #27798f">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="deteccion.html" style="color: #27798f">Detección</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="entrenamiento.html" style="color: #27798f">Entrenamiento</a>
                    </li>
                    
                </div>
            </div>
    `;
   }
   navbar();