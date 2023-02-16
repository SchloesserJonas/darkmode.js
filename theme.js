module.exports = {
    get() {
        if(localStorage.theme == 'dark' || window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute('theme', 'dark')
            return 'dark'
        } else {
            document.documentElement.setAttribute('theme', 'light')
            return 'light'
        }
    },

    toggle() {
        if(localStorage.theme == 'dark') {
            document.documentElement.setAttribute('theme', 'light')
            localStorage.setItem('theme', 'light')
        } else {
            document.documentElement.setAttribute('theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    }
}
