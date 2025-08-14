import { render, screen } from '@testing-library/react';
import Contact from '../components/sections/Contact';

describe('Contact', () => {
  it('renders contact form with required fields', () => {
    render(<Contact />);
    
    // Check that form exists
    expect(screen.getByRole('form')).toBeInTheDocument();
    
    // Check for key form elements
    expect(screen.getByRole('textbox', { name: /full name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('has proper form structure', () => {
    render(<Contact />);
    
    const form = screen.getByRole('form');
    expect(form).toHaveAttribute('aria-label', 'Contact form');
  });
});
