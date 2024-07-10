describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the navigation bar', () => {
    cy.get('.navContainer').should('be.visible');
    cy.get('.navContainer .home').should('have.attr', 'alt', 'home icon');
  })
  it('should display the footer', () => {
    cy.get('.footerContainer').should('be.visible');
    cy.get('.footerContainer .tomatillo').should('have.attr', 'alt', 'tomato');
  });
  it('should display a list of movies', () => {
    cy.get('.cardContainer').should('have.length.greaterThan', 0);
  });
  it('should navigate to the movie details page when a movie card is clicked', () => {
    cy.get('.cardContainer').first().click();
    cy.url().should('include', '/movies/');
    cy.get('.detailsContainer').should('be.visible');
  });
})