import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);

  // Render the form!
  renderNewUserForm(newUserFormEl);

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks();
  // render out the books
  renderBookList(bookListEl, books);

  bookListEl.addEventListener('click', async (event) => {
    if (event.target.tagName === "BUTTON") {
      const urlKey = event.target.getAttribute("data-author-url-key");
      const author = await getAuthor(urlKey);
      if (author) {
        renderAuthorInfo(authorInfoEl, author);
      } else {
        console.warn("Failed to get author info"); 
      }
      /*
      Great job! And nice job on the error handling 
      */
    }
  });

  newUserFormEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(newUserFormEl);
    const formObject = Object.fromEntries(formData);

    try {
      const newUser = await createNewUser(formObject);
      if (newUser) {
        renderNewUser(newUserEl, newUser);
        newUserFormEl.reset();
      } else {
        console.warm("Failed to create new user");
      }
    }
    catch (error) {
      console.error("Error creating user:", error); 
    }
  })
}
