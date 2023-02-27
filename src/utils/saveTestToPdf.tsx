import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import tests, { Test } from '../data/tests';

import setFont, { fontName } from '../res/fonts/LiberationSans-Regular-normal';

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
    setFont(doc);

    const tableColumn = [testName, 'Resultado', 'Unidades', 'Valores Normales'];

    const [formattedResults, errors] = test.formatResults(results, patient);
    const tableRows = formattedResults.map(r => [r.label, r.value, r.units, r.ref]);

    autoTable(doc, {
        styles: { halign: 'center', font: fontName },
        columnStyles: { 0: { halign: 'left' } },
        head: [tableColumn],
        body: tableRows
    });

    doc.save(filename);

    return errors.length === 0 ? null : errors;
};

