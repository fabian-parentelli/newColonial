import './icons.css';
import AppIcon from './Paths/AppIcon';
import ArrowsIcon from './Paths/ArrowsIcon';
import BellIcon from './Paths/BellIcon';
import CalendarIcon from './Paths/CalendarIcon';
import CarrotIcon from './Paths/CarrotIcon';
import CartIcon from './Paths/CartIcon';
import ClipboardIcon from './Paths/ClipboardIcon';
import ComputerIcon from './Paths/ComputerIcon';
import CopyIcons from './Paths/CopyIcons';
import Crediticon from './Paths/CreditIcon';
import CrossIcon from './Paths/CrossIcon';
import DashboardIcon from './Paths/DashboardIcon';
import DeleteIcon from './Paths/DeleteIcon';
import DoorIcon from './Paths/DoorIcon';
import DownIcon from './Paths/DownIcon';
import EventIcon from './Paths/EventIcon';
import FacebookIcon from './Paths/FacebookIcon';
import ImageIcon from './Paths/ImageIcon';
import InfoIcon from './Paths/InfoIcon';
import InstagramIcon from './Paths/Instagram';
import MapIcon from './Paths/MapIcon';
import MessageIcon from './Paths/MessageIcon';
import NotCreditIcon from './Paths/NotCreditIcon';
import NotImageIcon from './Paths/NotImage';
import PadLockIcon from './Paths/PadlockIcon';
import PdfIcon from './Paths/PdfIcon';
import PrintIcon from './Paths/PrintIcon';
import QrIcon from './Paths/QrIcon';
import ReportIcon from './Paths/ReportIcon';
import RunIcon from './Paths/RunIcon';
import ScanIcon from './Paths/ScanIcon';
import ShirtIcon from './Paths/ShirtIcon';
import SquareIcon from './Paths/SquareIcon';
import StarIcon from './Paths/StarIcon';
import SuccessIcon from './Paths/SuccessIcon';
import TicketsIcon from './Paths/TicketIcon';
import TicketIcon from './Paths/TicketIcons';
import TvIcon from './Paths/TvIcon';
import UsercircleIcon from './Paths/UsercircleIcon';
import UserIcon from './Paths/UserIcon';
import VideoIcon from './Paths/VideoIcon';
import WarningIcon from './Paths/WarningIcon';
import XIcon from './Paths/XIcon';
import YoutubeIcon from './Paths/YoutubeIcon';
import SettingIcon from './Paths/SettingIcon';
import GitHubIcons from './Paths/GitHubIcons';
import ActivityIcon from './Paths/ActivityIcon';
import MenuIcon from './Paths/MenuIcon';
import BookUserIcon from './Paths/BookUserIcon';
import BookIcon from './Paths/BookIcon';
import CssIcon from './Paths/CssIcons';
import HtmlIcons from './Paths/HtmlIcons';
import JsIcons from './Paths/JsIcons';
import NodeIcon from './Paths/NodeIcon';
import ReactIcons from './Paths/ReactIcons';
import MongoIcon from './Paths/MongoIcon';
import NpmIcon from './Paths/NpmIcon';
import SpotifyIcon from './Paths/SpotyfyIcon';
import WhatsAppIcon from './Paths/WhatsAppIcon';
import StoreIcon from './Paths/StoreIcon';
import CameraIcon from './Paths/CameraIcon';
import CashIcon from './Paths/CashIcon';
import ChartIcon from './Paths/ChartIcon';
import CheckIcon from './Paths/CheckIcon';
import ClockIcon from './Paths/ClockIcon';
import CloudIcon from './Paths/CloudIcon';
import DataBase from './Paths/DataBase';
import AnalyticIcon from './Paths/AnalyticIcon';
import DirectionIcon from './Paths/DirectionIcon';
import SendFileIcon from './Paths/SendFileIcon';
import HouseIcon from './Paths/HouseIcon';
import IdIcon from './Paths/IdIcon';
import Lockicon from './Paths/LockIcon';
import EmailIcon from './Paths/EmailIcon';
import BikeIcon from './Paths/BikeIcon';
import ClipIcon from './Paths/ClipIcon';
import PhoneIcon from './Paths/PhoneIcon';
import LikeIcon from './Paths/LikeIcon';
import TrukIcon from './Paths/TruckIcon';
import SearchIcon from './Paths/SearchIcon';
import ArrowRightIcon from './Paths/ArrowRightIcon';
import ArrowLeftIcon from './Paths/ArrowLeftIcon';
import IcoIcons from './Paths/IcoIcons';
import ChefIcon from './Paths/ChefIcon';

const Icons = ({ color = '#2C5469', size = '30px', onClick, backCol = 'none', bold = 2, type = 'app', hover = false }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size} height={size}
            style={{ fill: backCol }}
            onClick={onClick}
            stroke={color}
            strokeWidth={bold}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={hover ? 'iconsHover' : ''}
        >
            {type === 'facebook' && <FacebookIcon />}
            {type === 'x' && <XIcon />}
            {type === 'instagram' && <InstagramIcon />}
            {type === 'youtube' && <YoutubeIcon />}
            {type === 'github' && <GitHubIcons />}

            {type === 'user' && <UserIcon />}
            {type === 'info' && <InfoIcon />}
            {type === 'app' && <AppIcon />}
            {type === 'error' && <CrossIcon />}
            {type === 'warning' && <WarningIcon />}
            {type === 'success' && <SuccessIcon />}
            {type === 'dashboard' && <DashboardIcon />}
            {type === 'star' && <StarIcon />}
            {type === 'message' && <MessageIcon />}
            {type === 'bell' && <BellIcon />}
            {type === 'run' && <RunIcon />}
            {type === 'door' && <DoorIcon />}
            {type === 'ticket' && <TicketIcon />}
            {type === 'shirt' && <ShirtIcon />}
            {type === 'computer' && <ComputerIcon />}
            {type === 'clipboard' && <ClipboardIcon />}
            {type === 'report' && <ReportIcon />}
            {type === 'userCircle' && <UsercircleIcon />}
            {type === 'image' && <ImageIcon />}
            {type === 'delete' && <DeleteIcon />}
            {type === 'square' && <SquareIcon />}
            {type === 'padlock' && <PadLockIcon />}
            {type === 'carrot' && <CarrotIcon />}
            {type === 'copy' && <CopyIcons />}
            {type === 'calendar' && <CalendarIcon />}
            {type === 'map' && <MapIcon />}
            {type === 'credit' && <Crediticon />}
            {type === 'publicity' && <TvIcon />}
            {type === 'cart' && <CartIcon />}
            {type === 'down' && <DownIcon />}
            {type === 'tickets' && <TicketsIcon />}
            {type === 'pdf' && <PdfIcon />}
            {type === 'notimage' && <NotImageIcon />}
            {type === 'notcredit' && <NotCreditIcon />}
            {type === 'event' && <EventIcon />}
            {type === 'video' && <VideoIcon />}
            {type === 'arrows' && <ArrowsIcon />}
            {type === 'qr' && <QrIcon />}
            {type === 'scan' && <ScanIcon />}
            {type === 'print' && <PrintIcon />}
            {type === 'setting' && <SettingIcon />}
            {type === 'activity' && <ActivityIcon />}
            {type === 'menu' && <MenuIcon />}
            {type === 'bookUser' && <BookUserIcon />}
            {type === 'book' && <BookIcon />}
            {type === 'css' && <CssIcon />}
            {type === 'html' && <HtmlIcons />}
            {type === 'js' && <JsIcons />}
            {type === 'node' && <NodeIcon />}
            {type === 'react' && <ReactIcons />}
            {type === 'mongo' && <MongoIcon />}
            {type === 'npm' && <NpmIcon />}
            {type === 'spotify' && <SpotifyIcon />}
            {type === 'whatsapp' && <WhatsAppIcon />}
            {type === 'store' && <StoreIcon />}
            {type === 'camera' && <CameraIcon />}
            {type === 'cash' && <CashIcon />}
            {type === 'chart' && <ChartIcon />}
            {type === 'check' && <CheckIcon />}
            {type === 'clock' && <ClockIcon />}
            {type === 'cloud' && <CloudIcon />}
            {type === 'database' && <DataBase />}
            {type === 'analytic' && <AnalyticIcon />}
            {type === 'direction' && <DirectionIcon />}
            {type === 'sendfile' && <SendFileIcon />}
            {type === 'house' && <HouseIcon />}
            {type === 'id' && <IdIcon />}
            {type === 'lock' && <Lockicon />}
            {type === 'email' && <EmailIcon />}
            {type === 'bike' && <BikeIcon />}
            {type === 'clip' && <ClipIcon />}
            {type === 'phone' && <PhoneIcon />}
            {type === 'like' && <LikeIcon />}
            {type === 'truk' && <TrukIcon />}
            {type === 'search' && <SearchIcon />}
            {type === 'icon' && <IcoIcons />}
            {type === 'arrowright' && <ArrowRightIcon />}
            {type === 'arrowleft' && <ArrowLeftIcon />}
            {type === 'chef' && <ChefIcon />}
        </svg>
    );
};

export default Icons;