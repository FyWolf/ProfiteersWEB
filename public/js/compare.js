function compareTables() {
    const file1 = document.getElementById('file1').files[0];
    const file2 = document.getElementById('file2').files[0];

    if (file1 && file2) {
        Promise.all([readFile(file1), readFile(file2)]).then(contents => {
            const table1 = extractTable(contents[0]);
            const table2 = extractTable(contents[1]);
            const comparison = compareTableData(table1, table2);
            displayResults(comparison);
        });
    } else {
        alert('Please select two files.');
    }
}

function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
    });
}

function extractTable(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const table = doc.querySelector('table');
    if (!table) return [];

    const rows = Array.from(table.rows);
    return rows.map(row => Array.from(row.cells).map(cell => cell.textContent.trim()));
}

function compareTableData(table1, table2) {
    const table1Set = new Set(table1.map(row => JSON.stringify(row)));
    const table2Set = new Set(table2.map(row => JSON.stringify(row)));

    const added = [...table2Set].filter(row => !table1Set.has(row)).map(row => JSON.parse(row));
    const removed = [...table1Set].filter(row => !table2Set.has(row)).map(row => JSON.parse(row));

    return { added, removed };
}

function displayResults(comparison) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (comparison.added.length > 0) {
        const addedTable = createTable(comparison.added, 'Added mods');
        resultDiv.appendChild(addedTable);
    } else {
        resultDiv.innerHTML += '<p>No mods added.</p>';
    }

    if (comparison.removed.length > 0) {
        const removedTable = createTable(comparison.removed, 'Removed mods');
        resultDiv.appendChild(removedTable);
    } else {
        resultDiv.innerHTML += '<p>No mods removed.</p>';
    }
}

function createTable(data, captionText) {
    const table = document.createElement('table');
    table.border = '1';

    if (captionText) {
        const caption = table.createCaption();
        caption.textContent = captionText;
    }

    data.forEach(rowData => {
        const row = table.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    return table;
}
