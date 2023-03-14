function path(root, subLink) {
    return `${root}${subLink}`;
}

const ROOTS_LOCATION = "";

// ----------------------------------------------------------------------

export const APP_ROUTH_PATH = {
    root: path(ROOTS_LOCATION, "/"),
    index: {
        about: path(ROOTS_LOCATION, "about"),
        tictac: path(ROOTS_LOCATION, "about/tictactoe")
    }
}