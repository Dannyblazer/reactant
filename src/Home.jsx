import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setblogs ] = useState([
        { title: 'My new website', body: 'lorem ipsum ...', author: 'mario', id:1},
        { title: 'Welcome party', body: 'lorem ipsum ...', author: 'yoshi', id:2},
        { title: 'Web dev top tips', body: 'lorem ipsum ...', author: 'luigi', id:3},
    ]);

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
