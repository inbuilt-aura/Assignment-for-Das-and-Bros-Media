import { render, screen } from '@testing-library/react';
import Hero from '../components/sections/Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    
    expect(screen.getByRole('heading', { name: /premium digital experiences/i })).toBeInTheDocument();
  });

  it('renders the subtitle text', () => {
    render(<Hero />);
    
    expect(screen.getByText(/craft sophisticated web solutions/i)).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByRole('button', { name: /start your project/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view our work/i })).toBeInTheDocument();
  });
});
