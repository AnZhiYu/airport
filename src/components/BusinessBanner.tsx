import { BusinessBannerVisual } from './BusinessBannerVisual';

export function BusinessBanner() {
  return (
    <section className="business-section">
      <div className="container">
        <div className="business-banner">
          <div className="business-copy">
            <h2>企业商旅解决方案</h2>
            <p>为企业提供一站式差旅管理服务，兼顾流程规范与出行效率。</p>
            <div className="business-points">
              <span>差旅管控</span>
              <span>费用节省</span>
              <span>高效便捷</span>
            </div>
            <button type="button" className="light-button">
              了解详情
            </button>
          </div>

          <div className="business-visual" aria-hidden="true">
            <BusinessBannerVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
