export interface Patient {
    ID: number,
    Nombre: string,
    Especie: string,
    Raza: string,
    Sexo: string,
    Edad: number
}

export default /* async */ function getPatients(): Patient[] {
    return [
        {
            ID: 0,
            Nombre: 'Olivia',
            Especie: 'Gato',
            Raza: 'Negro',
            Sexo: 'F',
            Edad: 4
        },
        {
            ID: 1,
            Nombre: 'Alica',
            Especie: 'Perro',
            Raza: 'Cavallier Saint-Charles',
            Sexo: 'F',
            Edad: 3
        },
        {
            ID: 2,
            Nombre: 'Romeo',
            Especie: 'Perro',
            Raza: 'Shih Tzu',
            Sexo: 'M',
            Edad: 2
        },
        {
            ID: 3,
            Nombre: 'Poncho',
            Especie: 'Perro',
            Raza: 'Beagle',
            Sexo: 'M',
            Edad: 12
        },

    ]
}
