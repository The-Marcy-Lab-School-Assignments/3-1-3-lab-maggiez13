export const getFirstThreeFantasyBooks = async () => {
  try {
    const response =  await fetch("https://openlibrary.org/subjects/fantasy.json");
    if (!response.ok) {
      throw new Error('Failed to get fantasy books');
    }
    const data = await response.json();
    return data.works.slice(0,3).map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
      },
      coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
      }
    })
  }
  catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const getAuthor = async (urlKey) => { 
  try {
    const baseUrl = "https://openlibrary.org";
    const response = await fetch(`${baseUrl}${urlKey}.json`);
    if (!response.ok) {
      throw new Error('Failed to get author');
    }
    const data = await response.json();
    const author = {
      birthDate: data.birth_date,
      bio: data.bio,
      wikipediaUrl: data.wikipedia,
      name: data.name,
      pictureUrl: `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg` 
    };
    return author; 
  }
  catch (error) {
    console.warn(error.message);
    return null;
  }
};

export const createNewUser = async (userData) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
          'Content-type': 'application/json;'
      },
    });
    if (!response.ok) {
      throw new Error('Failed to create new user');
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.warn(error.message);
    return null;
  }
};