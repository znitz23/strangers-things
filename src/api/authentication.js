const cohortName = '2303-FTB-ET-WEB-FT'
const APIURL = `https://strangers-things.herokuapp.com/api${cohortName}/`;

export const authenticate = async (username, password) => {
  console.log(username, password);
    try {
      const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({user: { username:username, password:password }})
      });
       console.log(response)
        const result = await response.json();
        console.log(result);
        return;
    } catch (err) {
        console.error(err);
    }
}