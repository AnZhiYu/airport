import type { CityOption, DealItem, FooterGroup, NavItem, ServiceItem } from './types';
import { dealImageMap } from './assets';

export const navItems: NavItem[] = [
  { label: '首页', active: true },
  { label: '机票预订' },
  { label: '航班动态' },
  { label: '特价机票' },
  { label: '旅游度假' },
  { label: '商旅服务' },
  { label: '关于我们' },
];

export const cities: CityOption[] = [
  { code: 'SHA', name: '上海' },
  { code: 'BJS', name: '北京' },
  { code: 'CAN', name: '广州' },
  { code: 'SZX', name: '深圳' },
  { code: 'CTU', name: '成都' },
  { code: 'HGH', name: '杭州' },
  { code: 'XMN', name: '厦门' },
  { code: 'CSX', name: '长沙' },
];

export const serviceItems: ServiceItem[] = [
  { title: '价格保障', description: '买贵即差价保障', icon: '盾' },
  { title: '24小时客服', description: '专业顾问随时响应', icon: '服' },
  { title: '退改无忧', description: '灵活退改更安心', icon: '改' },
  { title: '安全支付', description: '多重安全防护', icon: '安' },
  { title: '随时随地', description: '手机端轻松预订', icon: '行' },
];

export const dealItems: DealItem[] = [
  { route: '上海 → 北京', date: '06-01 周一', price: 520, discount: '经济舱2.4折', image: dealImageMap.beijing },
  { route: '上海 → 广州', date: '06-02 周二', price: 580, discount: '经济舱2.8折', image: dealImageMap.guangzhou },
  { route: '上海 → 深圳', date: '06-03 周三', price: 610, discount: '经济舱3.1折', image: dealImageMap.shenzhen },
  { route: '上海 → 成都', date: '06-04 周四', price: 660, discount: '经济舱3.3折', image: dealImageMap.chengdu },
  { route: '上海 → 杭州', date: '06-05 周五', price: 430, discount: '经济舱2.1折', image: dealImageMap.hangzhou },
];

export const footerGroups: FooterGroup[] = [
  {
    title: '新手帮助',
    links: ['预订流程', '支付方式', '常见问题', '退改签说明'],
  },
  {
    title: '出行服务',
    links: ['航班动态', '值机选座', '行李规范', '机场服务'],
  },
  {
    title: '会员服务',
    links: ['会员权益', '积分兑换', '会员等级', '专属优惠'],
  },
  {
    title: '关于我们',
    links: ['公司简介', '联系我们', '加入我们', '网站公告'],
  },
];

export const hotRoutes = ['上海 - 北京', '上海 - 广州', '上海 - 深圳', '上海 - 成都', '上海 - 杭州'];
