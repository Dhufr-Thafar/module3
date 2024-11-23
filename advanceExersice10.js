async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Fetch error: ${error.message}`);
  }
}

const validURL = "https://jsonplaceholder.typicode.com/posts/1";
const invalidURL = "https://nonexistent.url";

function testOriginal() {
  fetchURLData(validURL)
    .then((data) => console.log("Original (Valid URL):", data))
    .catch((error) =>
      console.error("Original (Valid URL Error):", error.message)
    );

  fetchURLData(invalidURL)
    .then((data) => console.log("Original (Invalid URL):", data))
    .catch((error) =>
      console.error("Original (Invalid URL Error):", error.message)
    );
}


async function testAsyncAwait() {
  try {
    const data = await fetchURLData(validURL);
    console.log("Async/Await (Valid URL):", data);
  } catch (error) {
    console.error("Async/Await (Valid URL Error):", error.message);
  }

  try {
    const data = await fetchURLData(invalidURL);
    console.log("Async/Await (Invalid URL):", data);
  } catch (error) {
    console.error("Async/Await (Invalid URL Error):", error.message);
  }
}

testOriginal();
testAsyncAwait();

async function fetchMultipleURLs(urls) {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        if (response.status === 200) {
          return await response.json();
        } else {
          throw new Error(
            `Request to ${url} failed with status ${response.status}`
          );
        }
      })
    );
    return results;
  } catch (error) {
    throw new Error(`Error fetching multiple URLs: ${error.message}`);
  }
}

async function testMultipleURLs() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
    "https://nonexistent.url", //URL to test error handling
  ];

  try {
    const data = await fetchMultipleURLs(urls);
    console.log("Fetched data for multiple URLs:", data);
  } catch (error) {
    console.error("Error fetching multiple URLs:", error.message);
  }
}
testMultipleURLs();
