module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb", "airbnb/hooks"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-var": "error",
        "editor.formatOnPaste": false,
        "editor.formatOnSave": true,
        "[javascript]": {
            "editor.formatOnSave": true,
        },
        "[html]": {
            "editor.formatOnSave": false,
        },
        "[json]": {
            "editor.formatOnSave": false,
        },
        "eslint.autoFixOnSave": true,
        "eslint.alwaysShowStatus": true,
    }
}
