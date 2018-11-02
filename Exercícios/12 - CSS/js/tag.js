const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    // tagName - nome da tag
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)

    // Se a tag nolabel não existir, então adiciona o label dentro do elemento
    if(!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        // insere dentro do label o nome da tag
        label.innerHTML = tagName
        // insere o label dentro do elemento, antes do primeiro elemento filho (childNodes[0])
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})