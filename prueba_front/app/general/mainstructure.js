const token = "2y7ySxUyVyp8qJ1bmD3ZtZDvbIsgEAcsu8bKnq1w4=";
window.onload = meta()
window.onload = nav_mobile()
window.onload = nav_header()
window.onload = navigation()
window.onload = footer()
function meta(){

    document.head.innerHTML += '<title>Prueba</title>'+
        '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '<meta name="title" content="Prueba">'+
        '<meta name="author" content="Iducron">'+
        '<meta name="description" content="Sistema Academico para la administracion escolar.">'+
        '<meta name="keywords" content="academico,sistema educativo,plataforma educativa, sistema academico,iducron" />'+
        '<link rel="apple-touch-icon" sizes="120x120" href="assets/img/favicon/apple-touch-icon.png">'+
        '<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">'+
        '<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">'+
        '<link rel="mask-icon" href="assets/img/favicon/safari-pinned-tab.svg" color="#ffffff">'+
        '<link type="text/css" href="vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet">'+
        '<link type="text/css" href="vendor/notyf/notyf.min.css" rel="stylesheet">'+
        '<link type="text/css" href="vendor/alertify/alertify.min.css" rel="stylesheet">'+
        '<link type="text/css" href="vendor/tabulator/tabulator.min.css" rel="stylesheet">'

} // End function meta

function nav_header(){

    
}

function nav_mobile(){
    document.querySelector("#nav_mobile").innerHTML = '<a class="navbar-brand mr-lg-5" href="../../index.html">'+
        '<h3>Prueba</h3>'+
        '</a>'+
        '<div class="d-flex align-items-center">'+
            '<button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">'+
                '<span class="navbar-toggler-icon"></span>'+
            '</button>'+
        '</div>'
}

function navigation(){

    document.querySelector("#sidebarMenu").innerHTML = '<div class="sidebar-inner px-4 pt-3">'+
        '<div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">'+
            '<div class="d-flex align-items-center">'+
                '<div class="user-avatar lg-avatar mr-4">'+
                  '<img src="assets/img/team/profile-picture-3.jpg" class="card-img-top rounded-circle border-white" alt="Bonnie Green">'+
                '</div>'+
                '<div class="d-block">'+
                  '<h2 class="h6">Hola, '+sessionStorage.getItem('usuario')+'</h2>'+
                  '<a href="#" onclick="salir()" class="btn btn-secondary text-dark btn-xs"><span class="mr-2"><span class="fas fa-sign-out-alt"></span></span>Sign Out</a>'+
                '</div>'+
              '</div>'+
              '<div class="collapse-close d-md-none">'+
                '<a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation"></a>'+
              '</div>'+
            '</div>'+
            '<div class="mb-4 mb-md-0">'+
                '<h3>Prueba</h3>'+
            '</div><br />'+
            '<ul class="nav flex-column">'+
              '<li class="nav-item">'+
                '<span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-centroeducativo">'+
                  '<span>'+
                    '<span class="sidebar-icon"><span class="fas fa-university"></span></span>'+
                    'Mantenimiento'+
                  '</span>'+
                  '<span class="link-arrow"><span class="fas fa-chevron-right"></span></span>'+ 
                '</span>'+
                '<div class="multi-level collapse " role="list" id="submenu-centroeducativo" aria-expanded="false">'+
                    '<ul class="flex-column nav">'+
                        '<li class="nav-item "><a class="nav-link" href="empleado"><span>Empleado</span></a></li>'+
                    '</ul>'+
                '</div>'+
              '</li>'+
              
            '</ul>'+
          '</div>'
} // End funciont navigation

function footer(){

    document.querySelector('#footer').innerHTML = 
    '<div class="row estilofooter">'+
        '<div class="col-12 col-lg-12 mb-4 mb-lg-0">'+
            '<p>Copyright &copy; 2019 - <span class="current-year"></span> Andrés Vásquez.'+
            'Todos los Derechos Reservados. Desarrollado por '+
            '<a class="text-primary font-weight-normal" style="color:white !important" href="https://redcron.com" target="_blank">Andrés Vásquez</a></p>.'+
        '</div>'+
    '</div>'

} // End function footer

function breadcumb(menu,submenu){
    document.querySelector('#breadcumb').innerHTML =
        '<nav aria-label="breadcrumb" class="d-none d-md-inline-block">'+
            '<ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">'+
                '<li class="breadcrumb-item"><a href="home"><span class="fas fa-home"></span></a></li>'+
                '<li class="breadcrumb-item"><a href="#">'+menu+'</a></li>'+
                '<li class="breadcrumb-item active" aria-current="page">'+submenu+'</li>'+
            '</ol>'+
        '</nav>'
}

function fetchGetPublico(url){
    return new Promise( (resolve, reject) => {
        const backurl = "http://localhost:8000/v1/";
        fetch(backurl+url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type':'application/json',
            },
        })
        .then(response => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

function fetchPostPublico(url,data){
    return new Promise( (resolve, reject) => {
        const backurl = "http://127.0.0.1:8000/v1/";
        fetch(backurl+url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
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

function fetchDeletePublico(url){
    return new Promise( (resolve, reject) => {
        const backurl = "http://localhost:8000/v1/";
        fetch(backurl+url, {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type':'application/json',
            },
        })
        .then(response => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        })
    })
} // End function fetchDeletePublico

function fetchPutPublico(url,data){
    return new Promise( (resolve, reject) => {
        const backurl = "http://localhost:8000/v1/";
        fetch(backurl+url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type':'application/json',
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
} // End function fetchDeletePublico