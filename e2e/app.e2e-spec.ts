import { WhatIDoPage } from './app.po';

describe('what-i-do App', function() {
  let page: WhatIDoPage;

  beforeEach(() => {
    page = new WhatIDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
