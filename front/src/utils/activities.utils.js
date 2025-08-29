function typeActivity(activity) {

    const category = {
        'register': () => { return { icon: 'clipboard', activity: 'Te registraste en UnderPass' } },
        'login': () => { return { icon: 'success', activity: 'Iniciaste sesión' } },
        'what_email': () => { return { icon: 'padlock', activity: 'Solicitaste un código OTP (De un solo uso) para poder recuperar tu contraseña' } },
        'newPassword': () => { return { icon: 'padlock', activity: 'Cambiaste tu contraseña' } },
        'updconfig': () => { return { icon: 'setting', activity: 'Actualización de la configuración' } },
        'postUser': () => { return { icon: 'user', activity: 'Creación de un usuario' } },

        'newOrder': () => {
            return {
                icon: 'event', activity: '', alert: 'Orden nueva'
            }
        },
        
        'postMessage': () => {
            return {
                icon: 'message', activity: '', alert: 'Nuevo mensaje'
            }
        },

        'default': () => { return { icon: 'carrot', activity: 'Actividad no definida' } },
    };

    return (category[activity] || category['default'])();
};

export { typeActivity };