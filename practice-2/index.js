const createTable = (Json) => {
    let table = '';
    let order = []
    table += '<thead><tr>';
        for (key of Object.keys(Json[0])) {
            table += `<th>${key}</th>`;
            order.push(1)
        }
    table += '</tr></thead>'

    for(row of Json) {
        table += '<tr>';
            for(elem of Object.values(row)) {
                table += `<td>${elem}</td>`;
            }
        table += '</tr>';
    }

    return [table, order]
}

const filter = (e) => {
    const val = document.getElementById('search-input').value;

    if(val.length > 3) {
        Array.from(document.querySelectorAll('tr')).slice(1, ).forEach( row => (row.outerHTML.includes(val))? row.style.display='table-row' : row.style.display='none')
    }
    if(val.length == 0) {
        Array.from(document.querySelectorAll('tr')).slice(1, ).forEach( row => row.style.display='table-row')
    }
}

const req = new XMLHttpRequest();

req.onreadystatechange = function() {
    if (this.readyState != 4) return;
    let resp = JSON.parse(this.responseText);
    
    table = createTable(resp)

    document.getElementById('table').innerHTML = table[0]
    order = table[1]

    const sort = (e) => {
        const index = e.target.cellIndex;
        order[index] = -order[index] ;

        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.cells[index].innerHTML,
            b.cells[index].innerHTML
        );

        let arr = Array.from(document.querySelectorAll('tr')).slice(1, ).sort(comparator(index, order[index]))
        Array.from(document.querySelectorAll('tr')).slice(1, ).map( (el, i) => el.outerHTML = arr[i].outerHTML)
    }

    document.querySelectorAll("th").forEach( el => el.addEventListener('click', sort))
    document.getElementById('search-input').addEventListener('change', filter)
    document.getElementById('search-btn').addEventListener('click', filter)
};        

req.open("GET", "https://jsonplaceholder.typicode.com/posts");
req.send();