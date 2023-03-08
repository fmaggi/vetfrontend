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
    const lineHeight = doc.getLineHeight();

    // Center text
    function centerText(text:string){
        return (doc.internal.pageSize.width / 2) - (doc.getStringUnitWidth(text) * doc.getFontSize() / 2 / (72/25.6))
    }



    const tableColumn = [testName, 'Resultado', 'Unidades', 'Valores Normales'];

    const [formattedResults, errors] = test.formatResults(results, patient);
    const tableRows = formattedResults.map(r => [r.label, r.value, r.units, r.ref]);

    doc.text("Veterinaria El Libertador SRL", centerText("Veterinaria El Libertador SRL"), lineHeight);
    doc.text("Congreso 5325 B°: Villa El libertador", centerText("Congreso 5325 B°: Villa El libertador"), lineHeight * 1.5)
    doc.text("Tel Fijo: 4933038 | Tel Celular: 3516346800", centerText("Tel Fijo: 4933038 | Tel Celular: 3516346800"), lineHeight * 2)
    doc.text( "-".repeat(100), centerText("-".repeat(100)), lineHeight * 2.5)


    autoTable(doc, {
        styles: { halign: 'center', font: fontName },
        columnStyles: { 0: { halign: 'left' } },
        head: [tableColumn],
        body: tableRows,
        startY: lineHeight * 3
    });

    doc.save(filename);

    return errors.length === 0 ? null : errors;
};

