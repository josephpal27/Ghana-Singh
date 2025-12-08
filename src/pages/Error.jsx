import { Link } from 'react-router-dom';
import '../css/Error.css';

const Error = () => {
    return (
        <>
            <section className="error" data-aos="fade">
                <h1>PAGE NOT FOUND</h1>
                <Link to="/"><button>GO TO HOME</button></Link>
            </section>
        </>
    )
}

export default Error
