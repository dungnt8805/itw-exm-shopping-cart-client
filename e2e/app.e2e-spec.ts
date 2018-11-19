import { ShoppingCartClientPage } from './app.po';

describe('shopping-cart-client App', () => {
  let page: ShoppingCartClientPage;

  beforeEach(() => {
    page = new ShoppingCartClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
