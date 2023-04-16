export const state = () => ({
    usuario: null
});

export const mutations = {
    login(state, user) {
        state.usuario = user;
    },
    logout(state) {
        state.usuario = null;
    },
    token(){
        return state.usuario.token
    },
    nombre(nombre){
        state.usuario.nombreusuario = nombre;
    },
    email(email){
        state.usuario.email = email;
    }
};