import React from "react";

const Header = () => {
return (
    <section className="headerElem">
    <div>Strangers Things</div>
    <form>
        <input type="text" placeholder="Search"/>
        <button type="submit">Search</button>
    </form>
    </section>
)
}

export default Header