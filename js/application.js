
const getgit = (url) => {
    return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

const build = (repo) => {
    const el = document.createElement('a');
    let name = repo.name;
    name = name.replace(/-/g, ' ').toUpperCase();
    el.innerHTML = name;
    el.classList.add('m-3', 'btn', 'btn-outline-light', 'btn-lg')
    el.setAttribute('href', repo.homepage);

    return el;
}

const list = async () => {
    let target = document.getElementById('ideaList');
    let data = await getgit('https://api.github.com/users/Action-in-Jackson/repos');
    data = data.filter((repo) => {
        return repo.name !== 'action-in-jackson.github.io';
    });

    let repos = data.filter((repo) => {
        return repo.has_pages == true;
    });

    for (let i = 0; i < repos.length; i++) {
        let el = build(repos[i]);
        target.appendChild(el);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    list();
}, false);