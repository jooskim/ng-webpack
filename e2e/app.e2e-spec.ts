import { browser, element, by, ElementFinder, ExpectedConditions } from 'protractor';

describe('my app', () => {
    beforeEach(() => {
        browser.manage().window().setSize(1400, 900);
        browser.manage().window().maximize();
        browser.get('/');
    });

    it('should work', () => {
        expect(browser.getTitle()).toBeTruthy();
    });

    it('should find Name 2', () => {
        let js = element(by.css('ul'))
            .all(by.css('li'))
            .filter((li) => {
                return li.getText().then((val) => {
                    return val.indexOf('Name 2') > -1;
                });
            });

        js.count().then((num) => {
            expect(num).toBeGreaterThan(0);
        });
    })
});
