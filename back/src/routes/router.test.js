import Router from './routes.js';
import { passportEnum } from '../config/enums.config.js';
import { postSession } from '../services/session.service.js';

export default class TestRouter extends Router {
    init() {
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, async (req, res) => {
            console.log("\x1b[38;5;208m########## Modo Testing ###########\x1b[0m");

            const body = {
                name: 'Fabian Parentelli',
                email: 'lacolonial.shop.bs@gmail.com',
                phone: '01122239133',
                city: 'Luzuriaga',
                neighborhood: 'Don bosco 200',
                password: '1234',
                location: { city: 'Luzuriaga', address: 'Don bosco 200' },
                type: 'register'
            }
            
            const login = {
                email: 'lacolonial.shop.bs@gmail.com',
                password: '1234',
                type: 'login'
            }

            await postSession(body);

            res.send({ status: 'testing' });
        });
    };
};