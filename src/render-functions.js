export const renderBookList = (bookListEl, books) => {
  bookListEl.innerHTML = ``;

  books.forEach((book) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = book.coverUrl;
    img.alt = `An old cover of ${book.title}`;

    const p = document.createElement("p");
    p.textContent = `Title: ${book.title}`;

    const button = document.createElement("button");
    button.setAttribute("data-author-url-key", book.author.urlKey);
    // button.dataset.authorUrlKey = book.author.urlKey; 
    button.textContent = `View ${book.author.name}`;

    li.append(img, p, button);

    bookListEl.append(li);
  })
}

export const renderAuthorInfo = (authorInfoEl, author) => {
  authorInfoEl.innerHTML = ``;

  const h2 = document.createElement("h2");
  h2.textContent = author.name; 

  const img = document.createElement("img");
  img.src = author.pictureUrl;
  img.alt = `A picture of ${author.name}`;
  
  const p = document.createElement("p");
  p.textContent = `Born: ${author.birthDate}`;

  const p2 = document.createElement("p");
  p2.textContent = author.bio; 

  const a = document.createElement("a");
  a.href = author.wikipediaUrl; 
  a.textContent = "Wikipedia Link"; 
  
  authorInfoEl.append(h2, img, p, p2, a);
}

export const renderNewUserForm = (newUserFormEl) => {
  newUserFormEl.innerHTML = ``;

  const usernameLabel = document.createElement("label");
  usernameLabel.setAttribute("for", "username");
  usernameLabel.textContent = "Username"; 

  const input = document.createElement("input");
  input.setAttribute("id", "username");
  input.setAttribute("name", "username");
  input.setAttribute("type", "text");
  
  const isCoolLabel = document.createElement("label");
  isCoolLabel.textContent = "Is this user cool?";
  isCoolLabel.setAttribute("for", "is-cool");

  const input2 = document.createElement("input");
  input2.setAttribute("id", "is-cool");
  input2.setAttribute("name", "isCool");
  input2.setAttribute("type", "checkbox");

  const favLanguage = document.createElement("label");
  favLanguage.setAttribute("for", "favorite-language");
  favLanguage.textContent = "Favorite Language";

  const select = document.createElement("select");
  select.setAttribute("id", "favorite-language");
  select.setAttribute("name", "favoriteLanguage");

  const options = ["None", "JavaScript", "Python", "Ruby"];
  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    select.appendChild(option);
  });

  const button = document.createElement("button");
  button.textContent = "Create User";

  newUserFormEl.append(usernameLabel, input, isCoolLabel, input2, favLanguage, select, button);
}

export const renderNewUser = (newUserEl, newUser) => {
  newUserEl.innerHTML = ``;

  const h2 = document.createElement('h2');
  h2.textContent = newUser.username;
  h2.dataset.userId = newUser.id;

  const p1 = document.createElement('p');
  p1.textContent = newUser.isCool ? 'The hippest in the house!' : 'A real square.';

  const p2 = document.createElement('p');
  p2.textContent = `Favorite Language: ${newUser.favoriteLanguage}`;

  newUserEl.append(h2, p1, p2);
}