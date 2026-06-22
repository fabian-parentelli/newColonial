import Router from './routes.js';
import { passportEnum } from '../config/enums.config.js';
import { postSession } from '../services/session.service.js';
import { postCustomer } from '../services/customer.service.js';

export default class TestRouter extends Router {
    init() {
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, async (req, res) => {
            console.log("\x1b[38;5;208m########## Modo Testing ###########\x1b[0m");

            const body = {
                name: 'Cata Web',
                uid: '6a1df33d811ae78299d5377c',
                email: 'cataweb.ar@gmail.com',
                phone: '22239133',
                area: '1a',
                address: 'Don bosco 200',
                observation: 'Cliente de prueba'
            }

            const user = { _id: '68a636c8912c1b44604240e9', active: true, role: 'master' }

            const result = await postCustomer(body, user);

            res.send({ status: 'testing', result: result || 'Not result' });
        });
    };
};