
export class Cita {
    sintomas!: string
    fecha!: any
    nombre!: string
    hora!: any

    constructor(nombre: string, fecha: any, hora: any, sintomas: string) {
        this.sintomas = sintomas
        this.nombre = nombre
        this.fecha = fecha
        this.hora = hora
    }

}
