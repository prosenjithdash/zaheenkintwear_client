import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div >
            <h1>OOPS Sir!</h1>
            <br />
            
            <h2 className="bg-red-700 text-8xl text-center">404</h2>
            <br />
            <h3>Please try again or back Home</h3>
            <br />
            <Link to='/'>
                <button>
                    Home
                </button>
            </Link>
          
        </div>
    );
};

export default ErrorPage;