import './style.css'; 

const MainPage = () => {
    return (
        <div className="MainPage">
            {/* Simple Navbar */}
            <header className="mainNav">
                <ul>
                    <li><a href="/hafsa/home">Home</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/servic">services</a></li>
                </ul>
            </header>

            {/* Main Content */}
            <div className="MainContent">
                <div className="myIntro">
                    <div className="intro">Welcome to My Website</div>
                   </div>
            </div>
        </div>
    );
};

export default MainPage;

    