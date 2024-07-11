describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'movies.json'
    })
    .visit('http://localhost:3000/')
  });
  it('should display the title of the application', () => {
    cy.get('.navContainer').should('contain', 'Rancid Tomatillos')
  })
  it('should display a list of movies', () => {
    cy.get('.cardContainer').should('have.length.greaterThan', 0)
  })
  it('should contain a movie title', () => {
    cy.get('.cardContainer').find('h1').should('contain', 'Money Plane')
  })
  it('should contain the proper url', () => {
    cy.url().should('include', '3000/')
  })
})
