import businessTravelImage from './assets/business-travel.png';
import dealBeijingImage from './assets/deal-beijing.png';
import dealChengduImage from './assets/deal-chengdu.png';
import dealGuangzhouImage from './assets/deal-guangzhou.png';
import dealHangzhouImage from './assets/deal-hangzhou.png';
import dealShenzhenImage from './assets/deal-shenzhen.png';
import heroAviationImage from './assets/hero-aviation.png';
import logoYuxingImage from './assets/logo-yuxing.png';

export const brandLogoImage = logoYuxingImage;
export const businessBannerImage = businessTravelImage;
export const heroBackgroundImage = heroAviationImage;

export const dealImageMap = {
  beijing: dealBeijingImage,
  chengdu: dealChengduImage,
  guangzhou: dealGuangzhouImage,
  hangzhou: dealHangzhouImage,
  shenzhen: dealShenzhenImage,
} as const;
