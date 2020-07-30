const search = document.getElementById('search')
const matchList = document.getElementById('match-list')
const searchStates = async searchText => {
    const res = await fetch('../../data.json');
    const states = await res.json();

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    })

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML=''
    }
    outputHtml(matches);
}

const outputHtml = matches => {
    if (matches.length > 0) {
        
        const html = matches.map(
            matc => `
        <div class=' d-flex justify-content-between m-1 k' style='background-color: #fff;padding: 1rem 2rem;' >
            <h4>${matc.name}  <em>(${matc.abbr})  </em> </h4>
            
        </div>
        `).join('');

        matchList.innerHTML=html

    }

}





search.addEventListener('input', () => searchStates(search.value));

matchList.addEventListener('click', e => {
    e.stopPropagation();
    search.value = e.target.innerText;
    matchList.innerHTML=''
    });
