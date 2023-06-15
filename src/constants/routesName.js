const home = '/'

// Logged in
const baseDashboardPath = 'dashboard'
const dashboard = {
    root: home + baseDashboardPath,
    beekeeper:{
        offers:'products'
    },
    client:{
        products: 'products'
    },
    admin:{
        users:'users',
        requests:'requests'
    },
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