import { browser, element, by, ElementFinder, ExpectedConditions } from 'protractor';

describe('my app', () => {
    beforeEach(() => {
        browser.get('http://localhost:3001/');
    });

    it('should work', () => {
        expect(browser.getTitle()).toBeTruthy();
    });
});
