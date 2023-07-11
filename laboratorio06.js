/*Definir Clase Alumno */
class Alumno {

    /* Declarar atributos */
    codigo = "000X";
    nombre = "Default";
    nota1 = null;
    nota2 = null;
    nota3 = null;
    nota4 = null;

    /*Declarar Metodos */
    
    calcularPromedio(){
        let promedio
        promedio = ((this.nota1 * 0.15) + (this.nota2 * 0.20) + (this.nota3 * 0.25) + (this.nota4 * 0.40));
        return promedio
    }

    condición(){
        let condicion
        if(this.calcularPromedio() >= 12){
            condicion = "Aprobado";
        } else {
            condicion = "Desaprobado";
        }
        return condicion
    }

    obsequio(){
        let obsequio
        if (this.calcularPromedio() >= 17 ){
            obsequio = "Por tus buenas notas, te haz ganado una Mochila :D"   
        } else if (this.calcularPromedio() > 12 & this.calcularPromedio() < 16 ) {
            obsequio = "Sigue asi"
        }else {
            obsequio = "Esfuerzate más la proxima vez..."
        }
        return obsequio
    } 

}

/**Añadir la funcion al boton Enviar */
$("document").ready(function (){
    $("#btnEnviar").click(function () {
        let alumno = new Alumno();
        alumno.codigo = $("#txtCodigo")[0].value;
        alumno.nombre = $("#txtNombre")[0].value;
        alumno.nota1 = $("#Nota1")[0].value;
        alumno.nota2 = $("#Nota2")[0].value;
        alumno.nota3 = $("#Nota3")[0].value;
        alumno.nota4 = $("#Nota4")[0].value;
        alert("El alumno " + alumno.nombre + " tiene un promedio de " + alumno.calcularPromedio().toFixed(2) + ". Por lo tanto, su condición es de " + alumno.condición())

        // Mostrar en Pantalla
        document.getElementById("Promedio").innerHTML = "<p>Su promedio es de <b>" + alumno.calcularPromedio().toFixed(2) + "</b><p>"
        document.getElementById("Condicion").innerHTML = "<p>Por lo tanto, su condición es de <b>" + alumno.condición() +"</b><p>"
        document.getElementById("Obsequio").innerHTML = alumno.obsequio()
       
        
        console.log(alumno);
        console.log(alumno.calcularPromedio());
        console.log(alumno.condición());
        console.log(alumno.obsequio());
    })
})
