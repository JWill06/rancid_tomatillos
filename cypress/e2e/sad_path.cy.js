describe('Movie Detail Failed Page' , () => {
  beforeEach(() => { 
    cy.intercept( 'GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 404,
      fixture: 'movie_details'
    })
    .visit('http://localhost:3000/999999')
  });
  it('should load an empty page if a movie is unavailable' , () => {
    cy.get('body').should('contain', '')
  }) 
  it('should load an empty page if an unavailable movie id is in the url', () => {
    cy.get('body').should('not.contain', '.App-header'); 
  });
  it('should not show any movies if the id is wrong', () => {
    cy.get('body').should('not.contain', '.cardContainer')
  })
})
