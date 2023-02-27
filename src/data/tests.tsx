export interface TestField {
    label: string,
    units: string,
    normalValue?: {
        dog: string | number,
        cat: string | number
    }
}

export type Test = {
    name: string,
    fields: TestField[]
}

const quimica: Test = {
    name: 'Quimica',
    fields: [
        {
            label: 'Urea',
            units: 'mg/dL'
        },
        {
            label: 'Creatina',
            units: 'mg/dL'
        },
        {
            label: 'Fosfatasa Alcalina',
            units: 'ui/L'
        },
        {
            label: 'GPT',
            units: 'ui/L'
        },
        {
            label: 'Proteinas',
            units: 'g/dL'
        },
        {
            label: 'Albúmina',
            units: 'g/dL'
        },
        {
            label: 'Fosforo',
            units: 'mg/dL'
        }
    ]
}

const hematologia: Test = {
    name: 'Hematología',
    fields: [
        {
            label: 'Hematocrito',
            units: '%'
        },
        {
            label: 'Hemoglobina',
            units: 'g/dL'
        },
        {
            label: 'Eritrocitos',
            units: 'millones/μL'
        },
        {
            label: 'VCM',
            units: 'fL'
        },
        {
            label: 'HCM',
            units: 'pg'
        },
        {
            label: 'CHCM',
            units: 'g/dL'
        }
    ]
}

const tests: Test[] = [
    quimica, hematologia
]

export function testLabelToName(label: string): string {
    const nameSplit = label.toLowerCase().split(' ');
    const name = nameSplit.join('-');
    return name;
}

export default tests;
