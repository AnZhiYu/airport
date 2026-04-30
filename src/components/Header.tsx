import { navItems } from '../data';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand-logo-float">
          <img className="brand-logo" src="/images/logo-yuxing.png" alt="昱行商旅" />
        </div>

        <nav aria-label="主导航" className="main-nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-link${item.active ? ' is-active' : ''}`}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <div className="hotline">400-083-6566</div>
          <button className="ghost-button" type="button">
            登录 / 注册
          </button>
        </div>
      </div>
    </header>
  );
}
