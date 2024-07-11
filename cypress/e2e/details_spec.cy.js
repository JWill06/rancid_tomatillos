describe('Movie Details Page' , () => {
  beforeEach(() => { 
    cy.intercept( 'GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: 'movie_details'
    })
    .visit("http://localhost:3000/movies/436270")
  });

  it('should display the movie details', () => {
    cy.get('.movieTitle').should('contain', 'Black Adam');
    cy.get('.childrenText').should('contain', 'Release Date:')
      .and('contain', 'Average Rating:')
      .and('contain', 'Overview:');
    cy.get('.additionalText').should('contain', 'Budget:')
      .and('contain', 'Revenue:')
      .and('contain', 'Runtime:')
      .and('contain', 'Genres:');
  });

  it('should display the movie trailer', () => {
    cy.get('iframe').should('exist').and('have.attr', 'src').and('include', 'youtube.com/embed/');
  });

  it('should toggle read more/less for overview details', () => {
    cy.get('.read-more-link').click()
    cy.get('.read-more-link').should('contain', 'Read Less')
  })

 it('should display the correct details in the proper section', () => {
  cy.get('.childrenText').within(() => {
    cy.get(':nth-child(1)').should('contain', 'Release Date')
    .and('contain', 'Oct 19, 2022')
  })
 })
})


// describe('Movie Detail Failed Page' , () => {
//   beforeEach(() => { 
//     cy.intercept( 'GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
//       statusCode: 500,
//       fixture: 'movie_details'
//     })
//     .visit("http://localhost:3000/movies/999999")
//   });
//   it('should show a loading message', () => {
//     cy.get('p').should('contain', 'Loading...')
//   })
  // it('should display an error message if a bad fetch is thrown', () => {
  //   cy.get('p').should('contain', 'Error: Failed to fetch movie trailer.')
  // })
// })

//  it('should handle a bad network request gracefully')
// })
