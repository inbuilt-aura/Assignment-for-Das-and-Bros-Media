import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/layout/Header';

describe('Header', () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(
      <MemoryRouter>
        {component}
      </MemoryRouter>
    );
  };

  it('renders company logo', () => {
    renderWithRouter(<Header />);
    
    expect(screen.getByRole('img', { name: /das and bros media/i })).toBeInTheDocument();
  });

  it('has main navigation', () => {
    renderWithRouter(<Header />);
    
    // Check for navigation landmark
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Check for navigation items using getAllBy to handle desktop + mobile versions
    const aboutButtons = screen.getAllByText(/about/i);
    expect(aboutButtons.length).toBeGreaterThan(0);
    
    const servicesButtons = screen.getAllByText(/services/i);
    expect(servicesButtons.length).toBeGreaterThan(0);
  });

  it('includes contact button', () => {
    renderWithRouter(<Header />);
    
    // Use getAllBy to handle desktop + mobile versions of Get Started button
    const getStartedButtons = screen.getAllByText(/get started/i);
    expect(getStartedButtons.length).toBeGreaterThan(0);
    expect(getStartedButtons[0]).toBeInTheDocument();
  });
});
