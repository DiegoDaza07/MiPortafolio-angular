export class experiencia{    
    
    constructor(institucion:string, cargo:string, jefe:string, pagina:string, tiempo:string)
    {
        
        this.institucion = institucion;
        this.cargo = cargo;
        this.jefe = jefe;
        this.pagina = pagina;
        this.tiempo = tiempo;
    }

    institucion:string = "";
    cargo:string = "";
    jefe:string = "";
    pagina:string = "";
    tiempo:string = "";



}





export class educacion{

    constructor(institucion:string, nivel:string, titulo:string,  tiempo:string)
    {
        
        this.institucion = institucion;
        this.nivel = nivel;
        this.titulo = titulo;
        this.tiempo = tiempo;
    }

    institucion:string = "";
    nivel:string = "";
    titulo:string = "";
    tiempo:string = "";

}





export class proyecto{

    constructor(nombre:string, acerca:string, link:string)
    {
        
        this.nombre = nombre;
        this.acerca = acerca;
        this.link = link;

    }

    nombre:string = "";
    acerca:string = "";
    link:string = "";

}


