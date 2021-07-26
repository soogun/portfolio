function toggleMenu() {
    // On affiche/masque le menu lui même
    document.getElementById('main-menu').classList.toggle('visible');
    // On interdit/autorise le scroll dans la page
    document.body.classList.toggle('fixed');
    // On rend les projets "flous" si le menu est ouvert
    document.getElementById('my-projects').classList.toggle('blurred');
}


function buildProjectsList() {
    const projects = document.querySelectorAll('.project');
    for (let project of projects) {
        const TITLE = project.querySelector('h2').innerText;
        const ID = project.id;
        const LIEN = `<li><a href="#${ID}">${TITLE}</a></li>`;
        document.getElementById('toc').innerHTML += LIEN;
    }
}

buildProjectsList();
