function initTheme() {
    let themes = ["red", "blue", "yellow", "green"];
    let randThemeName = themes[(Math.floor(Math.random() * themes.length))];

    document.getElementById("container").className = "theme-" + randThemeName;
}

function i18n(lang) {
    if (lang.indexOf("fr") === 0) {
        document.getElementsByTagName("html")[0].setAttribute("lang", "fr");
        document.getElementById("software-engineer").innerHTML = "Ingénieur logiciel";
        document.getElementById("cofounder-of").innerHTML = "Co-fondateur de";
        document.getElementById("hire-me").innerHTML = "Travaillons ensemble";
    } else {
        document.getElementsByTagName("html")[0].setAttribute("lang", "en");
        document.getElementById("software-engineer").innerHTML = "Software Engineer";
        document.getElementById("cofounder-of").innerHTML = "Co-founder of";
        document.getElementById("hire-me").innerHTML = "Hire me";
    }
}

let lang = navigator.language || navigator.userLanguage;

i18n(lang);
initTheme();