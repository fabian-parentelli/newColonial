import './dashImgIcons.css';
import Icons from '../../../../components/Icons/Icons';
import Copy from '../../../../components/tools/Copy/Copy';

const DashImgIcons = () => {

    return (
        <div className='dashImgIcons'>
            {iconTypes.map(ico => (
                <div key={ico} className='dashImgIconsDiv'>
                    <Icons type={ico} color='#2C5469' />
                    <Copy data={ico} />
                </div>
            ))}
        </div>
    );
};

export default DashImgIcons;

const iconTypes = [
    'facebook',
    'x',
    'instagram',
    'youtube',
    'github',
    'user',
    'info',
    'app',
    'error',
    'warning',
    'success',
    'dashboard',
    'star',
    'message',
    'bell',
    'run',
    'door',
    'ticket',
    'shirt',
    'computer',
    'clipboard',
    'report',
    'userCircle',
    'image',
    'delete',
    'square',
    'padlock',
    'carrot',
    'copy',
    'calendar',
    'map',
    'credit',
    'publicity',
    'cart',
    'down',
    'tickets',
    'pdf',
    'notimage',
    'notcredit',
    'event',
    'video',
    'arrows',
    'qr',
    'scan',
    'print',
    'setting',
    'activity',
    'menu',
    'bookUser',
    'book',
    'css',
    'html',
    'js',
    'node',
    'react',
    'mongo',
    'npm',
    'spotify',
    'whatsapp',
    'store',
    'camera',
    'cash',
    'chart',
    'check',
    'clock',
    'cloud',
    'database',
    'analytic',
    'direction',
    'sendfile',
    'house',
    'id',
    'lock',
    'email',
    'bike',
    'clip',
    'phone',
    'like',
    'truk',
    'search',
    'icon',
    'arrowleft',
    'arrowright',
    'chef'
];