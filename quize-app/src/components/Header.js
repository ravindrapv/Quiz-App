import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="relative">
            < Link to = "/" >
                <h1 className="z-10 absolute left-16 top-12 text-4xl font-bold text-white">Quiz App</h1>
            </Link>
            <div className="flex justify-center">
                <img 
                src="./images/logo.png"
                alt="logo"
                width="300"
                />
                <h1 className=" mt-28 text-4xl  font-bold  text-red-400 mr-24">
                     Quiz App
                </h1>
                
            </div>
        </header>
    )
}


export default Header;