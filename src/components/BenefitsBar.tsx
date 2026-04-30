import { serviceItems } from '../data';

export function BenefitsBar() {
  return (
    <section className="benefits">
      <div className="container benefits-grid">
        {serviceItems.map((item) => (
          <article key={item.title} className="benefit-card">
            <div className="benefit-icon" aria-hidden="true">
              {item.icon}
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
