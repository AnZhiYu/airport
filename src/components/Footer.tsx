import { footerGroups } from '../data';
import { brandLogoImage } from '../assets';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-links">
          {footerGroups.map((group) => (
            <section key={group.title} className="footer-group">
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <button key={link} type="button" className="footer-link">
                  {link}
                </button>
              ))}
            </section>
          ))}
        </div>

        <aside className="contact-card">
          <p>7×24小时客服热线</p>
          <strong>400-083-6566</strong>
          <button type="button" className="footer-contact-button">
            在线客服
          </button>
          <button type="button" className="footer-contact-button footer-contact-button--light">
            关注我们
          </button>
        </aside>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-branding">
            <img className="brand-logo brand-logo--footer" src={brandLogoImage} alt="昱行商旅" />
            <p>
              昱行商旅专注企业与个人机票出行服务，为用户提供便捷、透明、安心的航班预订体验。
            </p>
            <small>© 2026 昱行商旅 版权所有 | 粤ICP备18088854号</small>
          </div>

          <div className="footer-badges" aria-label="平台资质">
            <span>IATA</span>
            <span>可信网站</span>
            <span>支付安全</span>
            <span>数据保密</span>
          </div>

          <div className="qr-card" aria-label="APP下载二维码">
            <div className="qr-grid" aria-hidden="true">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} className={index % 2 === 0 ? 'is-filled' : ''} />
              ))}
            </div>
            <div>
              <strong>官方APP</strong>
              <p>扫码下载，出行更多选择</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
