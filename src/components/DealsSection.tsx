import { dealItems } from '../data';

export function DealsSection() {
  return (
    <section className="deals-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <h2>特价机票</h2>
            <span className="section-accent" />
          </div>

          <div className="deal-switches" aria-label="特价分类">
            <button type="button" className="deal-switch is-active">
              国内热门
            </button>
            <button type="button" className="deal-switch">
              国际/港澳台
            </button>
            <button type="button" className="deal-switch">
              更多特价
            </button>
          </div>
        </div>

        <div className="deal-grid">
          {dealItems.map((deal) => (
            <article key={deal.route} className="deal-card">
              <img className="deal-visual" src={deal.image} alt="" />
              <div className="deal-content">
                <div className="deal-route-row">
                  <h3>{deal.route}</h3>
                  <button type="button" className="deal-arrow">
                    →
                  </button>
                </div>
                <p className="deal-date">{deal.date}</p>
                <p className="deal-price">
                  <span>¥ {deal.price}</span> 起
                </p>
                <p className="deal-discount">{deal.discount}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
