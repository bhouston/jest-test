function expectedProperties( json, name, requiredProperties ) {
    describe('check listing properties exist', ()=> {
            requiredProperties.forEach(function(property) {
            expect( json[property] ).not.toBeUndefined();
        });
    });
}

function expectListingProperties( json ) {
    return expectedProperties( json, 'listing', ['page', 'perPage', 'count', 'sort', '-createdAt', 'orders'] );
}