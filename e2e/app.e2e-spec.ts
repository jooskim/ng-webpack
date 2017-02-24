import { browser, element, by, ElementFinder, ExpectedConditions } from 'protractor';

describe('my app', () => {
    beforeEach(() => {
        browser.get('http://localhost:3001/');
    });

    it('should work', () => {
        expect(browser.getTitle()).toBeTruthy();
    });

    it('should find joosung kim', () => {
        let js = element(by.css('ul'))
            .all(by.css('li'))
            .filter((li) => {
                return li.getText().then((val) => {
                    return val.indexOf('Joosung') > -1;
                });
            });

        js.count().then((num) => {
            expect(num).toBeGreaterThan(0);
        });
    })
});
