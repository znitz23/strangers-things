const cohortName = '2303-FTB-ET-WEB-FT'
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export const authenticateUser = async (userobject) => {
  // console.log(userobject);
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userobject)
    });
    
        const {success, error, data} = await response.json();
        console.log(data)
        if(success) {
          const {token, message} = data;
          localStorage.setItem('token', token);
          return {token, message};
        }
        if (!success && !error){
          const {name, message} = data;
          return {name, message};
        }
        return;
    } catch (err) {
        console.error(err);
    }
}

export const authenticateNewUser = async (userobject) => {
   console.log(userobject);
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userobject)
    });
    
        const {success, error, data} = await response.json();
        console.log(data)
        if(success) {
          const {token, message} = data;
          localStorage.setItem('token', token);
          return {token, message};
        }
        if (!success && !error){
          const {name, message} = data;
          return {name, message};
        }
        return;
    } catch (err) {
        console.error(err);
    }
}

export const getMe = async (token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const { success, error, data } = await response.json();

    return { success, error, user: data };
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = async () => {
    try {
      const response = await fetch(`${APIURL}/posts`)
      //console.log(response);
      const {success, error, data: {posts}} = await response.json();
      return posts
    } catch (err) {
      console.error(err);
    }
  }

 export const makePost = async (post, token) => {
    try {
      const response = await fetch(`${APIURL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(
          post)
      });
      const result = await response.json();
      return result
    } catch (err) {
      console.error(err);
    }
  }

 export const deletePost = async (postId, token) => {
    try {
      const response = await fetch(`${APIURL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const postMessage = async (content, postId, token) => {
    try {
     

      const response = await fetch(`${APIURL}/posts/${postId}/messages`, {

        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          message: {
            content
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }