/* COMBO PAIS */
function paislistar(){
	document.getElementById("fk_pais").length=1;
	fetchGetPublico('pais').then((result) => {
		let responseJson = result;
		responseJson.forEach(function(pai) {
			var option = document.createElement('option');
			option.value = pai.id;
			option.text = pai.nombre_pais;
			document.getElementById("fk_pais").appendChild(option);
		});
	});
}

/* COMBO PAIS */
function u_paislistar(){
	document.getElementById("upd_fk_pais").length=1;
	fetchGetPublico('pais').then((result) => {
		let responseJson = result;
		responseJson.forEach(function(pai) {
			var option = document.createElement('option');
			option.value = pai.id;
			option.text = pai.nombre_pais;
			document.getElementById("upd_fk_pais").appendChild(option);
		});
	});
}


/* COMBO NACIONALIDAD */
var idpais = document.querySelector("#fk_pais");
if(idpais){
	idpais.addEventListener("change", function(){
	fetchGetPublico('pais/'+idpais.value+'/').then((result) => {
		let responseJson = result;
		var option = document.createElement('option');
		option.value = responseJson.id;
		option.text = responseJson.nacionalidad;
		document.getElementById("fk_nacionalidad").appendChild(option);
	});
})
}

var upd_idpais = document.querySelector("#upd_fk_pais");
if(upd_idpais){
	upd_idpais.addEventListener("change", function(){
	fetchGetPublico('pais/'+upd_idpais.value+'/').then((result) => {
		let responseJson = result;
		document.getElementById("upd_fk_nacionalidad").innerHTML="<option>"+responseJson.nacionalidad+"</option>";
	});
})
}

function ecargolistar(cargosel){
	document.getElementById("upd_fk_cargo").length=1;
	fetchGetPublico('general/listarCargo').then((result) => {
		let responseJson = result;
		if(responseJson.estado == 'success'){
			responseJson.Cargos.forEach(function(car) {
			  	var option = document.createElement('option');
			  	option.value = car.cargoId;
			  	option.text = car.descripcionCargo;
			  	document.getElementById("upd_fk_cargo").appendChild(option);
			});
			document.querySelector("#upd_fk_cargo").value = cargosel
		} // End if
	});
} // End Cargo Update Listar

/* COMBO EMPRESA */
function empresalistar(){
	document.getElementById("fk_empresa").length=1;
	fetchGetPublico('general/listarEmpresa').then((result) => {
		let responseJson = result;
		if(responseJson.estado == 'success'){
			responseJson.Empresas.forEach(function(emp) {
			  	var option = document.createElement('option');
			  	option.value = emp.empresaId;
			  	option.text = emp.razonSocial;
			  	document.getElementById("fk_empresa").appendChild(option);
			});
		} // End if
	});
} // End Empresa Listar

function eempresalistar(empresasel){
	document.getElementById("upd_fk_empresa").length=1;
	fetchGetPublico('general/listarEmpresa').then((result) => {
		let responseJson = result;
		if(responseJson.estado == 'success'){
			responseJson.Empresas.forEach(function(emp) {
			  	var option = document.createElement('option');
			  	option.value = emp.empresaId;
			  	option.text = emp.razonSocial;
			  	document.getElementById("upd_fk_empresa").appendChild(option);
			});
			document.querySelector("#upd_fk_empresa").value = empresasel
		} // End if
	});
} // End Empresa Update Listar

/* ESTADOS SISTEMA */
function eestadogen(estadosel){
	document.getElementById("upd_fk_estado").length=1;
	fetchGetPublico('general/listarEstadoGen').then((result) => {
		let responseJson = result;
		if(responseJson.estado == 'success'){
			responseJson.Estados.forEach(function(est) {
			  	var option = document.createElement('option');
			  	option.value = est.estadoId;
			  	option.text = est.descripcionEstado;
			  	document.getElementById("upd_fk_estado").appendChild(option);
			});
			document.querySelector("#upd_fk_estado").value = estadosel
		} // End if
	});
} // End Estado Update Listar

function estadogen(){
	document.getElementById("fk_estado").length=1;
	fetchGetPublico('general/listarEstadoGen').then((result) => {
		let responseJson = result;
		if(responseJson.estado == 'success'){
			responseJson.Estados.forEach(function(est) {
			  	var option = document.createElement('option');
			  	option.value = est.estadoId;
			  	option.text = est.descripcionEstado;
			  	document.getElementById("fk_estado").appendChild(option);
			});
			document.querySelector("#fk_estado").value = estadosel
		} // End if
	});
} // End Estado Listar

/* Salir */
function salir(){
	alertify.confirm("<i class='fas fa-exclamation-triangle' style='color:#dc3545'></i> &iquest;Esta seguro de Salir del Sistema&#63;.",
		function(){
			logout()
	},
	function(){
		alertify.warning('<strong style="color:black;font-size:16px"><i class="fas fa-ban"></i> Cancelado.</strong>');
	}).setHeader('<em> <i class="fas fa-sign-out-alt"></i>&nbsp;Cerrar Sesion </em> ');
}

function logout(){
	sessionStorage.clear();
	location.href = 'login';
}

/* Funcion Validar */
document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementsByTagName("INPUT");
    for (var i = 0; i < element.length; i++) {
        element[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Este campo no puede estar vacio");
            }
        };
        element[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
    var elements = document.getElementsByTagName("SELECT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Debe Seleccionar un elemento");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})
/* Fin Funcion */

/* Filtro Tabulator */
var input = document.querySelector("#filter");
if(input){
	input.addEventListener("keyup", function(){
		var filters = [];
		var columns = table.getColumns();
		var search = input.value;
		columns.forEach(function(column){
			filters.push({
				field:column.getField(),
				type:"like",
				value:search,
			});
		});
		table.setFilter([filters]);
	})
}

const notyf = new Notyf({
        position: {
            x: 'right',
            y: 'bottom',
        },
        types: [
            {
                type: 'info',
                background: '#122A3D',
                icon: {
                    className: 'fas fa-check-circle',
                    tagName: 'span',
                    color: '#fff'
                },
                dismissible: false
            },
            {
                type: 'warning',
                background: '#FF7D32',
                icon: {
                    className: 'fas fa-exclamation-triangle',
                    tagName: 'span',
                    color: '#fff'
                },
                dismissible: false
            }
        ]
    });

/* FIN FUNCIONES */

/* Funciones Modal */
var addmodal   = document.querySelector("#addmodal");
var updmodal   = document.querySelector("#updmodal");
var updmodalqr   = document.querySelector("#updmodalqr");
var modalmostrarqraction   = document.querySelector("#modalmostrarqr");
var closemyModalqrmostrar     = document.querySelector("#closemyModalqrmostrar");
var uclose     = document.querySelector("#uclosemyModal");
var ucloseqr     = document.querySelector("#uclosemyModalqr");
var ucancel    = document.querySelector("#ucancelmyModal");
var aclose     = document.querySelector("#aclosemyModal");
var acancel    = document.querySelector("#acancelmyModal");
var actualizar = document.querySelector("#updform");
var guardar    = document.querySelector("#addform");
var addaction  = document.querySelector("#addaction");
var mostrarqr  = document.querySelector("#mostrarqraction");

if(aclose){
	aclose.addEventListener("click", function(){
		addmodal.style.display = "none";
	}) // End Close
}

if(acancel){
	acancel.addEventListener("click", function(){
    	addmodal.style.display = "none";
	}) // End Cancel
}

if(closemyModalqrmostrar){
	closemyModalqrmostrar.addEventListener("click", function(){
	    modalmostrarqraction.style.display = "none";
	}) // End Close
}

if(uclose){
	uclose.addEventListener("click", function(){
	    updmodal.style.display = "none";
	}) // End Close
}

if(ucloseqr){
	ucloseqr.addEventListener("click", function(){
	    updmodalqr.style.display = "none";
	}) // End Close
}

if(ucancel){
	ucancel.addEventListener("click", function(){
	    updmodal.style.display = "none";
	}) // End Cancel
}

if(addaction){
	addaction.addEventListener("click", function(){
	    limpiar()
	    addmodal.style.display = "block";
	})
}


/* Funcion Limpiar Formulario */
function limpiar(){
    document.querySelector("#addform").reset();
}

/* Funcion Impresion de Reportes */
function printreport(nombreReporte,report){
	switch(report){
		case 1:
			table.download("csv", nombreReporte+".csv");
			break;
		case 2:
			table.download("xlsx",nombreReporte+".xlsx", {sheetName:"Lista de "+nombreReporte});
			break;
		case 3:
			table.download("pdf", nombreReporte+".pdf", {
       			orientation:"portrait", //set page orientation to portrait
        		title:"Lista de "+nombreReporte, //add title to report
    		});
	}
}

function changestatus(checked,id,pagina,estado){
	if(checked){
		return '<div align="center" style="display: flex;align-items: center;" class="form-check form-switch">'+
                    '<input id="estadoswitch_'+id+'" class="form-check-input" onclick=estadoverificar('+id+',"'+pagina+'") style="margin:0 auto;" type="checkbox" checked>'+
               '</div>';
	}else{
		return '<div align="center" style="display: flex;align-items: center;" class="form-check form-switch">'+
                    '<input id="estadoswitch_'+id+'" onclick=estadoverificar('+id+',"'+pagina+'") class="form-check-input" style="margin:0 auto;" type="checkbox">'+
                '</div>';
	}
}

function estadoverificar(id,pagina){
	var data;
	if(document.querySelector("#estadoswitch_"+id).checked){
		data = { id:id,pagina:pagina,estado:1 };
	}else{
		data = { id:id,pagina:pagina,estado:2 };
	}
	fetchPostPublico('general/actualizarEstado',data).then((result) => {
		let responseJson = result;
		if(responseJson.estado == 'success'){
			notyf.open({
	    		type: 'info',
	    		message: responseJson.mensaje
			}); 
		}else{
			notyf.open({
	    		type: 'error',
	    		message: responseJson.mensaje
			});
		}
	});
}

/* Cerrar Sesion */
function confirmarCierre() {
    var cerrar = setTimeout(cerrarSesion,20000);//1800000 son 30 minutos
    alertify.confirm(
        '<em> <i class="fas fa-sign-out-alt"></i>&nbsp;Cerrar Sesion </em>',
        '<i class="fas fa-exclamation-triangle" style="color:#dc3545"></i>&nbsp;Su Sesi&oacute;n Expirara, presione OK para prolongar la Sesi&oacute;n 30 Minutos', 
        function(){
            //si presiona OK
            clearTimeout(cerrar); //elimino el tiempo a la funcion cerrarSesion
            clearTimeout(temp); //elimino el tiempo a la funcion confirmarCierre
            temp = setTimeout(confirmarCierre, 1800000); //1800000 son 30 minutos
            notyf.open({
	    		type: 'info',
	    		message: "Su sesi&oacute;n ha sido prolongada 30 minutos"
			}); 
        },
        function(){	
            cerrarSesion(); //si presiono Cancel, pues ejecuta la funcion cerrarSesion y posteriormente la cierra.
        }
    );
}

function cerrarSesion() {
    logout()
}
// se llamará a la función que confirmar Cierre después de 10 segundos
var temp = setTimeout(confirmarCierre, 1800000);
// hacemos que al pulsar en los botones de Alertify no se propaguen los eventos
document.body.addEventListener("click",".ajs-button", function(e){
  	e.stopPropagation();
});
// cuando se detecte actividad en cualquier parte de la app
document.addEventListener('click keyup keypress keydown blur change', function(e) {
    // borrar el temporizador de la funcion confirmarCierre
    clearTimeout(temp);
    // y volver a iniciarlo con 10segs
    temp = setTimeout(confirmarCierre,1800000);
});