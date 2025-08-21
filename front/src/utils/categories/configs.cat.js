const dyasInSpanish = (dayId) => {

    const category = {
        mo: 'Lunes',
        tu: 'Martes',
        we: 'Miércoles',
        th: 'Jueves',
        fr: 'Viernes',
        sa: 'Sábado',
        su: 'Domingo',
    };

    return category[dayId] || '';
};

const orderDays = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

const fullDays = orderDays.map(code => {
    
    const names = {
        mo: 'Lunes',
        tu: 'Martes',
        we: 'Miércoles',
        th: 'Jueves',
        fr: 'Viernes',
        sa: 'Sábado',
        su: 'Domingo'
    };

    return { name: names[code], _id: code };
});

export { dyasInSpanish, orderDays, fullDays };