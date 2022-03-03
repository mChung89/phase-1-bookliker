const ul = document.getElementById(`list`);
const div = document.getElementById(`show-panel`);


function renderBook(book) {
    const li = document.createElement(`li`);
    li.textContent = book.title
    li.addEventListener('click', () => {
        const li2 = document.createElement(`li`)
        const btn = document.createElement(`button`)
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const p = document.createElement(`p`);
        const img = document.createElement(`img`);
        const ul2 = document.createElement(`li`)
        div.innerHTML = ''

        img.src = book.img_url
        h2.textContent = book.title;
        h3.textContent = book.subtitle;
        h4.textContent = book.author
        p.textContent = book.description
        btn.textContent = 'LIKE'
        div.append(img, h2, h3, h4, p, btn)
        ul2.id = 'user-list'
        book.users.forEach(userObj => {
            li2.textContent = userObj["username"]
            ul2.append(li2)
            console.log(userObj['username'])
        })
        div.append(ul2)
    })
    ul.appendChild(li)
}

document.addEventListener("DOMContentLoaded", () => {
    return fetch("http://localhost:3000/books")
        .then(resp => resp.json())
        .then(books => {
            books.forEach(book => {
                renderBook(book)
            })
        })
})