const projects = [
    { name: "Projekt 1-2", color: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))", description: "Értékelő Táblázat, és egy Visszajelző Rendszer, mindkét feladat egy weboldalon található.", link: "https://sites.google.com/view/12projektmunka/f%C5%91oldal" },
    { name: "Projekt 3", color: "linear-gradient(135deg, var(--secondary-color), var(--accent-color))", description: "Eddigi Python munkák, régebbi Python projektek.", link: "https://github.com/jozsef323231/eddigimunka" },
    { name: "Projekt 4", color: "linear-gradient(135deg, var(--accent-color), var(--primary-color))", description: "Saját ötlet, saját magam által készített, teljesen alap Bejelentkezés-Regisztráció grafikus felületen CSharp-ban, ami egy Írás-Beszéd alkalmazásnak, grafikus felületnek egy teljesen jó alap.", link: "https://github.com/jozsef323231/WiscoApplication" },
    { name: "Projekt 5", color: "linear-gradient(135deg, var(--secondary-color), var(--primary-color))", description: "Teljesen alap, viszont jól kinéző Kő-Papír-Olló játék.", link: "https://jozsef323231.github.io/oldal/" }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="project-color-block" style="background: ${project.color}">
            ${project.name}
        </div>
        <div class="card-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn" target="_blank">Megnézem</a>
        </div>
    `;
    container.appendChild(card);
});

const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

closeBtn.onclick = function() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeBtn.onclick();
    }
}

