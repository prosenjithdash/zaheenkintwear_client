import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Home/Banner";
import Products from "../../components/Home/Products";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Products/>
        </div>
    );
};

export default Home;