import { V2exPage } from './app.po';

describe('v2ex App', () => {
  let page: V2exPage;

  beforeEach(() => {
    page = new V2exPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
