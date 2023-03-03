export interface TestField {
    label: string,
    units: string,
    normalValue?: {
        dog: string | number,
        cat: string | number
    }
}

export interface TestResult {
    label: string,
    value: string,
    units: string,
    ref: string
}

type RelativeFunction = (results: any, patientType: string) => TestResult[]

export class Test {
    name: string
    fields: TestField[]
    calculateRelativeFields?: RelativeFunction

    constructor(name: string, fields: TestField[], relativeFields?: RelativeFunction) {
        this.name = name;
        this.fields = fields
        this.calculateRelativeFields = relativeFields;
    }

    formatResults(results: any, patientType: string): [TestResult[], string[]] {
        const errors: string[] = [];
        const testResults: TestResult[] = [];
        this.fields.forEach(field => {
            const name = Test.LabelToName(field.label)
            const result = results[name]

            if (!result) {
                errors.push(`Results for ${this.name} didn't contain ${field.label}`)
            }

            const res: TestResult = {
                label: field.label, value: result, units: field.units, ref: 'TODO'
            }

            testResults.push(res);
        })

        if (this.calculateRelativeFields !== undefined) {
            const relatives = this.calculateRelativeFields(results, patientType);
            testResults.push(...relatives);
        }

        return [testResults, errors];
    }

    static LabelToName(label: string): string {
        const nameSplit = label.toLowerCase().split(' ');
        const name = nameSplit.join('-');
        return name;
    }
}

const quimica = new Test('Quimica', [
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
])

const hematologia = new Test('Hematología', [
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
]);


const tests: Test[] = [
    quimica, hematologia
]

export default tests;
