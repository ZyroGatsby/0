(function () {
    "use strict";

    try {
        var preferences = JSON.parse(localStorage.getItem("ok.prefs") || "{}");
        if (
            ["light", "dark", "paper", "midnight-canvas"].indexOf(
                preferences.theme,
            ) > -1
        ) {
            document.documentElement.dataset.theme = preferences.theme;
        }
    } catch (error) {
        // First visit, private mode, or a wiped store: CSS uses system preference.
    }
})();
