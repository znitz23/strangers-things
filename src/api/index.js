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

const registerUser = async (newUsername, newPassword) => {
  try {
    const response = await fetch(
      `${APIURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: {newUsername},
          password: {newPassword}
        } 
      } ) 
    });
    const {success, error, data: {token, message}} = await response.json();
    console.log(success)
    return;
  } catch (err) {
    console.error(err);
  }
}

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
console.log(post, token);
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
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const updatePost = async (postId, post, token) => {
    try {
    
      const response = await fetch(`${APIURL}/posts/${postId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title: "",
            description: "",
            price: "",
            location: "",
            willDeliver: true
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

 export const deletePost = async (postId, token) => {
  console.log(token)
    try {
      const response = await fetch(`${APIURL}/posts/${postId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const postMessage = async (content) => {
    try {
     

      const response = await fetch(`${APIURL}/posts/${postid}/messages`, {

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