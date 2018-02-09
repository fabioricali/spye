const Spye = require('../');

function createElement(id) {
    let element = document.createElement('div');
    element.setAttribute('id', id);
    document.body.appendChild(element);
}

function removeElement(id) {
    let element = document.querySelector('#' + id);
    document.body.removeChild(element);
}

describe('Spye', function () {
    this.timeout(5000);

    before(function () {
        this.jsdom = require('jsdom-global')();
    });

    after(function () {
        this.jsdom();
    });

    it('should be ok', function (done) {
        let created = 0;
        let removed = 0;
        new Spye('#e1')
            .onCreate(() => {
                created++;
                console.log('created', created);
            })
            .onRemove(() => {
                removed++;
                console.log('removed', removed);
                if (created === 2 && removed === 2)
                    done();
            });
        setTimeout(() => {
            createElement('e1');
        }, 500);
        setTimeout(() => {
            removeElement('e1');
        }, 1000);
        setTimeout(() => {
            createElement('e1');
        }, 1100);
        setTimeout(() => {
            removeElement('e1');
        }, 1600);
    });

});

