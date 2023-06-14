const home = '/'

// Logged in
const baseDashboardPath = 'dashboard'
const dashboard = {
    root: home + baseDashboardPath
}
// Logged out
const baseAuthPath = 'auth'
const auth = {
    login: baseAuthPath + '/login',
    signUp: baseAuthPath + '/signup'
}

const routesName = {
    loggedIn: {
        home,
        dashboard
    },
    loggedOut: {
        home,
        auth
    }
}

export default routesName;