
import './css/Home.css'; // Importez le fichier CSS

import NavBar from '../components/navbar';

const Home = () => {

    return (
        <>
        <NavBar />
            <h1 className="mytrash-logo">My Trash</h1>
        </>
    );
};

export default Home;
