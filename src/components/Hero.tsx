export function Hero() {
  return (
    <section className="hero">
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">专业 · 便捷 · 优惠</p>
          <h1>全球机票预订</h1>
          <p className="hero-subtitle">
            海量航班实时展示，页面只保留你当前需要的核心选择能力，适合官网首页演示和后续拓展。
          </p>
          <div className="hero-highlights" aria-label="核心卖点">
            <span>海量航班</span>
            <span>价格透明</span>
            <span>贴心服务</span>
          </div>
        </div>
      </div>
    </section>
  );
}
