const authenticate = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/someEndPoint`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `UserName ${token}`
        },
        body: JSON.stringify({
            
         })
      });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
      console.error(err);
    }
}