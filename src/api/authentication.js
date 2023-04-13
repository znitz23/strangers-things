const cohortName = '2303-FTB-ET-WEB-FT'
const APIURL = `https://strangers-things.herokuapp.com/api/2303-FTB-ET-WEB-FT`;

export const authenticate = async (userobject) => {
  // console.log(userobject);
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userobject})
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