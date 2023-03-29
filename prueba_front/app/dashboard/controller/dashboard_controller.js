window.onload = header()
window.onload = footer()

function header(){
    document.querySelector('#header').innerHTML = '<div class="cd-logo-wrapper">'+
        '<a href="#0" class="cd-logo"><img src="images/icon/logo.png" alt="Logo"></a>'+
        '</div>'+
        '<div class="cd-search js-cd-search">'+
        '<form>'+
            '<input class="reset" type="search" placeholder="Buscar...">'+
        '</form>'+
        '</div>'+
        '<button class="reset cd-nav-trigger js-cd-nav-trigger" aria-label="Toggle menu"><span></span></button>'+
        '<ul class="cd-nav__list js-cd-nav__list">'+
        '<li class="cd-nav__item"><a href="#" title="Alertas"><i class="fas fa-envelope"></i>&nbsp;Notificaciones</a></li>'+
        '<li class="cd-nav__item"><a href="#"><i class="fas fa-cog"></i>&nbsp;Soporte</a></li>'+
        '<li class="cd-nav__item cd-nav__item--has-children cd-nav__item--account js-cd-item--has-children">'+
        '<a href="#0">'+
          '<img src="images/cd-avatar.svg" alt="avatar">'+
          '<span>'+sessionStorage.getItem('email')+'</span>'+
        '</a>'+
        '<ul class="cd-nav__sub-list">'+
          '<li class="cd-nav__sub-item"><a href="perfil">Perfil</a></li>'+
          '<li class="cd-nav__sub-item"><a href="#" onClick="salir()">Salir</a></li>'+
            '</ul>'+
          '</li>'+
        '</ul>';
} // End header

function footer(){
    var fecha = new Date();
    var year = fecha. getFullYear();
    document.querySelector('#footer').innerHTML = '<div class="footer"><p>Copyright &copy;'+year+' Redcron.'
+'Todos los Derechos Reservados. Desarrollado por '+
'<a style="color: white" href="https://redcron.com">Redcron S.A.</a>.</p></div>';
} // End function footer

const token = "2y7ySxUyVyp8qJ1bmD3ZtZDvbIsgEAcsu8bKnq1w4=";
function fetchPostPublico(url,data){
    return new Promise( (resolve, reject) => {
        data["tokenapp"] = token;
        const backurl = "http://127.0.0.1:8000/api/";
        fetch(backurl+url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+sessionStorage.getItem('tokenauth')
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        })
    })
} // End function fetchPostPublico