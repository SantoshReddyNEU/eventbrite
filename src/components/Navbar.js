const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <h3>EventBrite</h3>
            </div>
            <div>
               <input type="text" id="searchBar" placeholder="Search events" />
               <button>Search</button>
            </div>
            <div>
                <a href="/createEvent">Create Event</a>
            </div>
            <div>User</div>
        </nav>
     );
}
 
export default Navbar;