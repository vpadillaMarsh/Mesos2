
const htmlRight = {
    'condominios': `<h4>El seguro para condominios cubre:</h4>
                        <ul>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Incendio</p></li>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Riesgos políticos como consecuencia de huelgas saqueos o actos terroristas</p></li>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Riesgos de la naturaleza</p></li>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Terremotos (opcional)</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('condominios')">Cotizar</button>`,
    'hogar': `<h4>El seguro multirresgo hogar cubre: </h4>
                    <ul>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio + robo</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio + sismo</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio + robo + sismo</p></li>
                    </ul>
                    <button type="button" class="btn btn-danger" onclick="handleClickCotizar('hogar')">Cotizar</button>`,
    'vehiculo': `
                <p>La más amplia oferta de productos para prevenir daños, 
                    robos y pérdida total, con las mejores coberturas.</p>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('vehiculo')">Cotizar</button>`,
    
    'accidentes': `<h4>El seguro de accidentes personales cubre: </h4>
                <ul>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Muerte accidental</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Incapacidad permanente</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Incapacidad temporal</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Reembolso de gastos médicos</p></li>
                </ul>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('accidentes')">Cotizar</button>`,
    'incendios': `<p>El <strong> seguro contra incendios y sismos para empresas</strong>  se  puede  cotizar  como  una  Póliza  Multirriesgo,  incluyendo  coberturas adicionales tales como:</p>
                <ul>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Robo</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Cristales</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Robo de dinero</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Otros</p></li>
                </ul>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('incendios')">Cotizar</button>`,
    'responsabilidad': `<h4>El seguro de responsabilidad social de empresa cubre: </h4>
                <ul>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Daño emergente (fisico, material)</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Lucro cesante</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Daño moral</p></li>
                </ul>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('responsabilidad')">Cotizar</button>`,
    'garantia': `
                <p>El <strong> seguro de garantía</strong> proteje del perjucio patrimonial frente al
                    incumplimiento de las obligaciónes del contratista.</p>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('garantia')">Cotizar</button>`,
    'construccion': `<h4>El seguro todo riesgo de construcción cubre: </h4>
                <ul>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Incendio</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Robo</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Sismo</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Responsablidad civil (daño a terceros)</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Otros</p></li>
                </ul>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('construccion')">Cotizar</button>`,
    'transporte': `<h4>El seguro transporte terrestre resp. máxima cubre: </h4>
                <ul>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Incendio o exposión</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Volcamiento o descarrilamiento</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Choque o colisión</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Rotura de puentes, túneles, u obras de vialidad similares</p></li>
                    <li><img src="./assets/circle-check-solid-white.png"><p>Otros</p></li>
                </ul>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('transporte')">Cotizar</button>`,
    'automotriz': `
                <p>La más amplia oferta de productos para prevenir daños, 
                    robos y pérdida total, con las mejores coberturas.</p>
                <button type="button" class="btn btn-danger" onclick="handleClickCotizar('automotriz')">Cotizar</button>`
}

const htmlBottom = {
        'condominios': `<h5>El <strong>seguro para condominios</strong> está diseñado para cubrir las necesidades de la 
                            administración de edificios de carácter habitacional.</h5>
                            <ul>
                                <li><img src="./assets/circle-check-solid-white.png"><p>Incendio</p> </li>
                                <li><img src="./assets/circle-check-solid-white.png"><p>Riesgos políticos como consecuencia de huelgas saqueos o actos terroristas</p></li>
                                <li><img src="./assets/circle-check-solid-white.png"><p>Riesgos de la naturaleza</p></li>
                                <li><img src="./assets/circle-check-solid-white.png"><p>Terremotos (opcional)</p></li>
                            </ul>
                            <button type="button" class="btn btn-danger" onclick="handleClickCotizar('condominios')">Cotizar</button>`,
        'hogar': `<h5>El <strong>seguro multirriesgo de hogar</strong> protege tu hogar, seas dueño o arrendatario del inmueble, 
                        asegurando así a personas y tu patrimonio.</h5>
                        <ul>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio</p></li>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio + robo</p></li>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio + sismo</p></li>
                            <li><img src="./assets/circle-check-solid-white.png"><p>Seguro hogar incendio + robo + sismo</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('hogar')">Cotizar</button>`,
        'vehiculo': `<h5><strong>Seguro de vehiculos motorizados:</strong> La más amplia oferta de productos para prevenir daños, 
                        robos y pérdida total, con las mejores coberturas.</h5>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('vehiculo')">Cotizar</button>`,
        'accidentes': `<h5>El <strong>seguro de accidentes para trabajadores</strong> 
                        protege económica y financieramente al asegurado o a su familia.</h5>
                        <ul>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Muerte accidental</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Incapacidad permanente</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Incapacidad temporal</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Reembolso de gastos médicos</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('accidentes')">Cotizar</button>`,
        'incendios': `<h5>El <strong>seguro contra incendios y sismos</strong> proteje los activos físicos de tu empresa
                            de daños por incendios y sismos. Puedes cotizarlo como poliza multirresgo
                            incluyendo cobertura adicional para: </h5>
                        <ul>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Robo</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Cristales</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Robo de dinero</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Otros</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('incendios')">Cotizar</button>`,
        'responsabilidad': `<h5>El <strong>seguro de responsabilidad social de empresa</strong> proteje el patrimonio del asegurado
                            frente a demandas de terceros.</h5>
                        <ul>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Daño emergente (fisico, material)</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Lucro cesante</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Daño moral</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('responsabilidad')">Cotizar</button>`,
        'garantia': `<h5>El <strong>seguro de garantía</strong> proteje del perjucio patrimonial frente al
                        incumplimiento de las obligaciónes del contratista.</h5>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('garantia')">Cotizar</button>`,
        'construccion': `<h5>El <strong>seguro todo riesgo de construcción</strong> cubre riesgos asociados a una obra de construcción, 
                            remodelación o montaje.</h5>
                        <ul>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Incendio</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Robo</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Sismo</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Responsablidad civil (daño a terceros)</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Otros</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('construccion')">Cotizar</button>`,
        'transporte': `<h5>El <strong>seguro transporte terrestre resp. máxima</strong> cubre los daños o pérdidas de las mercaderías transportadas.</h5>
                        <ul>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Incendio o exposión</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Volcamiento o descarrilamiento</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Choque o colisión</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Rotura de puentes, túneles, u obras de vialidad similares</p></li>
                        <li><img src="./assets/circle-check-solid-white.png"><p>Otros</p></li>
                        </ul>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('transporte')">Cotizar</button>`,
        'automotriz': `
                        <h5><strong>Seguro automotriz:</strong> La más amplia oferta de productos para prevenir daños, 
                        robos y pérdida total, con las mejores coberturas.</h5>
                        <button type="button" class="btn btn-danger" onclick="handleClickCotizar('automotriz')">Cotizar</button>`
}


function onHover(seguro){
    let extraRight = document.getElementById('extra-content-right')
    
    extraRight.classList.remove('fade-in')
    extraRight.style.display = 'none'

    setTimeout(() => {
        extraRight.classList.add('fade-in')
        extraRight.style.display = 'block'
    }, 100);


    extraRight.innerHTML = htmlRight[seguro]
    
    let extraBottom = document.getElementById('extra-content-bottom')
    extraBottom.classList.remove('fade-in')
    extraBottom.style.display = 'none'

    setTimeout(() => {
        extraBottom.classList.add('fade-in')
        extraBottom.style.display = 'block'
    }, 100);

    extraBottom.innerHTML = htmlBottom[seguro]

    let selectables = document.getElementsByClassName('selectable')
    for(let i=0 ; i<selectables.length ; i++){
        selectables[i].style.color = 'black'
    }
    switch(seguro){
        case 'automotriz':
            document.getElementById('automotriz-texto').style.color = 'gray'
            break
        case 'condominios':
            document.getElementById('condominios-texto').style.color = 'gray'
            break
        case 'hogar':
            document.getElementById('hogar-texto').style.color = 'gray'
            break
        case 'vehiculo':
            document.getElementById('vehiculo-texto').style.color = 'gray'
            break
        case 'accidentes':
            document.getElementById('accidentes-texto').style.color = 'gray'
            break
        case 'incendios':
            document.getElementById('incendios-texto').style.color = 'gray'
            break
        case 'responsabilidad':
            document.getElementById('responsabilidad-texto').style.color = 'gray'
            break
        case 'garantia':
            document.getElementById('garantia-texto').style.color = 'gray'
            break
        case 'construccion':
            document.getElementById('construccion-texto').style.color = 'gray'
            break
        case 'transporte':
            document.getElementById('transporte-texto').style.color = 'gray'
            break
        default: break
    }
}

function handleClickCotizar(tipo){
    switch(tipo){
        case 'automotriz':
            document.getElementById('btn-cotizar-automotriz').click()
            break
        case 'condominios':
            document.getElementById('btn-cotizar-condominios').click()
            break
        case 'hogar':
            document.getElementById('btn-cotizar-hogar').click()
            break
        case 'vehiculo':
            document.getElementById('btn-cotizar-vehiculo').click()
            break
        case 'accidentes':
            document.getElementById('btn-cotizar-accidentes').click()
            break
        case 'incendios':
            document.getElementById('btn-cotizar-incendios').click()
            break
        case 'responsabilidad':
            document.getElementById('btn-cotizar-responsabilidad').click()
            break
        case 'garantia':
            document.getElementById('btn-cotizar-garantia').click()
            break
        case 'construccion':
            document.getElementById('btn-cotizar-construccion').click()
            break
        case 'transporte':
            document.getElementById('btn-cotizar-transporte').click()
            break
        default:
            console.log('error de tipo')
            break
    }
}