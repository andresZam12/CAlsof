import { render, screen } from '@testing-library/react';
import FichaPersonal from './FichaPersonal.js';
describe('Nombre del Componente', () => {
  it('debe mostrar un contenido específico', () => {
    render(<Idioma />); // Aquí el estudiante debe renderizar SU componente
    const title = screen.getByText(/Este es el idioma seleccionado/i); // Aquí deberá buscar el contenido relevante
    expect(title).toBeInTheDocument();
  });
});
