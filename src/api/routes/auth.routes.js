const baseAuthPath = 'auth/'
const baseLoginAuthPath = baseAuthPath + 'login/'
const baseSignUpAuthPath = baseAuthPath + 'register/'

export default {
    login: {
        beekeper: baseLoginAuthPath + 'beekeeper',
        client: baseLoginAuthPath + 'client',
        admin: baseLoginAuthPath + 'manager',
    },
    signUp:{
        beekeper: baseSignUpAuthPath + 'beekeeper',
        client: baseSignUpAuthPath + 'client',
    },
    authUser: baseAuthPath + 'is-user-auth'
}