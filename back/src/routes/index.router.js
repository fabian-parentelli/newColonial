import UserRouter from "./users.router.js";
import ConfigRouter from "./config.router.js";
import AvatarRouter from "./avatar.router.js";
import ProductRouter from './products.router.js'
import PublicityRouter from './publicity.router.js'
import OrderRouter from './order.router.js'
import MessageRouter from './message.router.js'
import SessionRouter from './session.router.js'
import TestRouter from './router.test.js'
import CustomerRouter from './customer.router.js'
import NoticeRouter from './notice.router.js';

export const userRouter = new UserRouter().getRouter();
export const configRouter = new ConfigRouter().getRouter();
export const avatarRouter = new AvatarRouter().getRouter();
export const productRouter = new ProductRouter().getRouter();
export const publicityRouter = new PublicityRouter().getRouter();
export const orderRouter = new OrderRouter().getRouter();
export const messageRouter = new MessageRouter().getRouter();
export const sessionRouter = new SessionRouter().getRouter();
export const testRouter = new TestRouter().getRouter();
export const customerRouter = new CustomerRouter().getRouter();
export const noticeRouter = new NoticeRouter().getRouter();