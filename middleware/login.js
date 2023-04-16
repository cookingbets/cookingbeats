export default function({ app , redirect}) {
    // If the user is not authenticated
    var usuario = app.$cookiz.get('usuario');
    if (!usuario) {
        return redirect('/login');
    }
    console.log(usuario);
    app.$cookiz.set('usuario', usuario);
}