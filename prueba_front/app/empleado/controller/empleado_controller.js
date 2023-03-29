var switchIcon = function(cell, formatterParams, onRendered){ //plain text value
	if(cell.getValue() == "ACTIVO"){
	    var check = changestatus(true,cell.getData().empleadoId,"empleado",2)
	    return check;
	}else{
	   	var check = changestatus(false,cell.getData().empleadoId,"empleado",1)
	    return check;
	} // End if
};