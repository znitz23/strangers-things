import React from "react";

const Welcome = ({user, isLoggedIn}) => {
return (
    (isLoggedIn ?
        (<div>Welcome to Craigslist {user}.</div>)
        :
        (<div>Please Log In</div>)
        )
    )
}

export default Welcome