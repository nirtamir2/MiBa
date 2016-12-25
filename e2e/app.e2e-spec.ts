import { MiBaPage } from './app.po';

describe('mi-ba App', function() {
  let page: MiBaPage;

  beforeEach(() => {
    page = new MiBaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
