(function () {
    let themes = ["red", "blue", "yellow", "green"];
    let randThemeName = themes[(Math.floor(Math.random() * themes.length))];

    document.getElementById("container").className = "theme-" + randThemeName;
}());
