export const fetchToken = async () => {
  try {
    const response = await fetch(
      'https://frontend-test-assignment-api.abz.agency/api/v1/token'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

export const fetchUsers = async ({ count = 6, offset = 0, page = 1 } = {}) => {
  offset = (page - 1) * count;
  try {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${count}&offset=${offset}&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};

function fetchPositions() {
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

fetchPositions();
