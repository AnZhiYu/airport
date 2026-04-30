import { useState } from 'react';
import { hotRoutes } from '../data';
import type { CityOption } from '../types';

type BookingPanelProps = {
  cities: CityOption[];
};

const defaultDate = '2026-06-01';

export function BookingPanel({ cities }: BookingPanelProps) {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [selectionSummary, setSelectionSummary] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const swapCities = () => {
    setDepartureCity(arrivalCity);
    setArrivalCity(departureCity);
    setSelectionSummary('');
    setValidationMessage('');
  };

  const handleSearch = () => {
    if (!departureCity || !arrivalCity || !departureDate) {
      setValidationMessage('请选择完整的出发城市、到达城市和出发日期。');
      setSelectionSummary('');
      return;
    }

    setValidationMessage('');
    setSelectionSummary(`已选择：${departureCity} → ${arrivalCity}，${departureDate}`);
  };

  return (
    <section className="booking-shell" aria-label="航班预订功能区">
      <div className="booking-tabs" role="tablist" aria-label="预订类型">
        <button className="booking-tab is-active" type="button" role="tab" aria-selected="true">
          机票预订
        </button>
        <button className="booking-tab" type="button" role="tab" aria-selected="false" disabled>
          酒店预订
        </button>
        <button className="booking-tab" type="button" role="tab" aria-selected="false" disabled>
          航班动态
        </button>
      </div>

      <div className="booking-panel">
        <div className="trip-types" aria-label="行程类型">
          <span className="trip-radio is-active">单程</span>
          <span className="trip-radio">往返</span>
          <span className="trip-radio">多程</span>
        </div>

        <div className="booking-grid">
          <label className="field-group" htmlFor="departure-city">
            <span>出发城市</span>
            <select
              id="departure-city"
              aria-label="出发城市"
              value={departureCity}
              onChange={(event) => {
                setDepartureCity(event.target.value);
                setSelectionSummary('');
                setValidationMessage('');
              }}
            >
              <option value="">请选择出发城市</option>
              {cities.map((city) => (
                <option key={city.code} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <button className="swap-button" type="button" aria-label="交换出发和到达城市" onClick={swapCities}>
            ⇄
          </button>

          <label className="field-group" htmlFor="arrival-city">
            <span>到达城市</span>
            <select
              id="arrival-city"
              aria-label="到达城市"
              value={arrivalCity}
              onChange={(event) => {
                setArrivalCity(event.target.value);
                setSelectionSummary('');
                setValidationMessage('');
              }}
            >
              <option value="">请选择到达城市</option>
              {cities.map((city) => (
                <option key={city.code} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </label>

          <label className="field-group" htmlFor="departure-date">
            <span>出发日期</span>
            <input
              id="departure-date"
              aria-label="出发日期"
              type="date"
              min={defaultDate}
              value={departureDate}
              onChange={(event) => {
                setDepartureDate(event.target.value);
                setSelectionSummary('');
                setValidationMessage('');
              }}
            />
          </label>

          <div className="field-group field-group--muted" aria-hidden="true">
            <span>返程日期</span>
            <input type="text" value="选择返程日期" readOnly />
          </div>

          <div className="field-group field-group--muted" aria-hidden="true">
            <span>乘客类型</span>
            <input type="text" value="1成人 0儿童 0婴儿" readOnly />
          </div>

          <button className="search-button" type="button" onClick={handleSearch}>
            搜索航班
          </button>
        </div>

        <div className="booking-footer">
          <div className="hot-routes">
            <span className="hot-routes-label">热门航线：</span>
            {hotRoutes.map((route) => (
              <button key={route} type="button" className="hot-route-link">
                {route}
              </button>
            ))}
          </div>
          <button className="advanced-link" type="button">
            高级搜索
          </button>
        </div>

        <div className="booking-feedback" aria-live="polite">
          {validationMessage && <p className="booking-message booking-message--error">{validationMessage}</p>}
          {selectionSummary && <p className="booking-message booking-message--success">{selectionSummary}</p>}
        </div>
      </div>
    </section>
  );
}
