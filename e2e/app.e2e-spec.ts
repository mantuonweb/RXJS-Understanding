import { RxjsePage } from './app.po';

describe('rxjse App', () => {
  let page: RxjsePage;

  beforeEach(() => {
    page = new RxjsePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
