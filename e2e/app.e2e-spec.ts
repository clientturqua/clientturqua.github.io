import { LitumTodoAppPage } from './app.po';

describe('litum-todo-app App', () => {
  let page: LitumTodoAppPage;

  beforeEach(() => {
    page = new LitumTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
