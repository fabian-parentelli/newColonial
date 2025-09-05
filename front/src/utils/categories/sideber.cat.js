const navAdmin = [
    { icon: 'user', name: "Usuarios", link: 'users' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'event', name: "Ordenes", link: 'order' },
    { icon: 'message', name: "Mensajes", link: 'message' },
    { icon: 'setting', name: "Opciones", link: 'setting' },
];

const navUser = [
    { icon: 'user', name: "Perfil", link: 'profil' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'event', name: "Ordenes", link: 'order' },
    { icon: 'message', name: "Mensajes", link: 'message' },
    { icon: 'setting', name: "Opciones", link: 'setting' },
];

const navMaster = [
    { icon: 'user', name: "Usuarios", link: 'users' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'carrot', name: "Productos", link: 'products' },
    { icon: 'event', name: "Ordenes", link: 'order' },
    { icon: 'message', name: "Mensajes", link: 'message' },
    { icon: 'cart', name: "Vender", link: 'sale' },
    { icon: 'publicity', name: "Publicidad", link: 'ban' },
    { icon: 'image', name: "Imágenes", link: 'img' },
    { icon: 'setting', name: "Opciones", link: 'setting' },
];

const sideberRole = (role) => {

    const category = {
        'admin': () => { return navAdmin },
        'user': () => { return  navUser },
        'master': () => { return  navMaster }
    };

    return category[role]();
};

export { sideberRole };