import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('homepage', () => {
  it('renders the complete homepage shell', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: '全球机票预订' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '搜索航班' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '特价机票' })).toBeInTheDocument();
    expect(screen.getByText('企业商旅解决方案')).toBeInTheDocument();
  });

  it('shows a validation hint when required booking fields are missing', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: '搜索航班' }));

    expect(screen.getByText('请选择完整的出发城市、到达城市和出发日期。')).toBeInTheDocument();
  });

  it('shows the selected route summary after a valid search', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(screen.getByLabelText('出发城市'), '上海');
    await user.selectOptions(screen.getByLabelText('到达城市'), '北京');
    await user.type(screen.getByLabelText('出发日期'), '2026-06-01');
    await user.click(screen.getByRole('button', { name: '搜索航班' }));

    expect(screen.getByText('已选择：上海 → 北京，2026-06-01')).toBeInTheDocument();
  });
});
