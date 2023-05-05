import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setblogs ] = useState(null);

    const deleteblog = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }

    useEffect(() => {
        console.log("useEffect Ran!");
    }, []);

    return (
       <div className="home">
        < BlogList blogs={blogs} title='All Blogs' deleteblog={deleteblog} />
       </div>
    );
}
export default Home;
