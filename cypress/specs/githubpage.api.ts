describe('GitHub Public API Test', () => {
    const publicRepositoryName = 'Spoon-Knife'
    const username = 'octocat';
    it(`Fetch GitHub user profile of user ${username}`, () => {
        cy.request('GET', 'https://api.github.com/users/octocat').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('login', username);
        });
    })

    it(`Fetch public repositories of a user ${username} and validate if ${publicRepositoryName} repository exists`, () => {
        cy.request({
            method: 'GET',
            url: `https://api.github.com/users/${username}/repos`,
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[6].name).to.eq(publicRepositoryName)
        })
    });

});
