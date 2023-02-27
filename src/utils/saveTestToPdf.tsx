import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import tests, { Test, testLabelToName } from '../data/tests';

function findTest(test: string): Test | null {
    for (let t of tests) {
        if (test === t.name) {
            return t;
        }
    }
    return null;
}

export default function saveTestToPDF(testName: string, patient: string, results: any, filename: string): string[] | null {
    const test = findTest(testName);
    if (!test) {
        return [`Invalid test ${testName}`];
    }

    const doc = new jsPDF();

    const tableColumn = [testName, 'Resultado', 'Unidades', 'Valores Normales'];
    const tableRows: string[][] = [];

    var errors: string[] = []

    const fields = test.fields;
    fields.map(field => {
        const name = testLabelToName(field.label)
        const result = results[name]

        if (!result) {
            errors.push(`Results for ${testName} didn't contain ${field.label}`)
        }

        const row: string[] = [
            field.label, result, field.units, 'TODO'
        ];

        tableRows.push(row);
    })


    autoTable(doc, {
        styles: { halign: 'center' },
        columnStyles: { 0: { halign: 'left' } },
        head: [tableColumn],
        body: tableRows
    });

    doc.save(filename);

    return errors.length === 0 ? null : errors;
};

