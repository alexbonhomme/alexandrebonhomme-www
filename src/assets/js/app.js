(function () {
    var themes = ["red", "blue", "yellow", "green"];
    var randThemeName = themes[(Math.floor(Math.random() * themes.length))];

    document.getElementById("container").className += " theme-" + randThemeName;
}());
