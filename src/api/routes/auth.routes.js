const baseAuthPath = 'auth/'
const baseLoginAuthPath = baseAuthPath + 'login/'

export default {
    login: {
        beekeper: baseLoginAuthPath + 'beekeeper',
        client: baseLoginAuthPath + 'client',
        admin: baseLoginAuthPath + 'manager',
    },
    authUser: baseAuthPath + 'is-user-auth'
}