import axios from 'axios';
import React, { useState, useEffect } from 'react';


const InfiniteScroll = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoanding, setIsLoading] = useState(false);
    const [hasMoreData, setHasMoreData] = useState(true);

    const fetchPosts = async () => {
        if (isLoanding) return;

        setIsLoading(true);

        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );

            if (response.data.length > 0) {
                setPosts((prevPosts) => [...prevPosts, ...response.data]);
            } else {
                setHasMoreData(false);
            }

        } catch (error) {
            console.log(error)

        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();

    }, [page]);

    //infinit scroll está atrelado a um event scroll
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 100 &&
            !isLoanding &&
            hasMoreData) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll());

    }, [hasMoreData, isLoanding])

    return (
        <div>
            <h1>Infinite Scroll</h1>
            <ul>
                {posts.map((post) => (

                    <li>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            {isLoanding && <p>Carregando mais posts...</p>}

        </div>
    );
};

function throttle(func, delay) {
    let lastCall = 0;

    return function(...args) {
        const now = new Data().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}



export default InfiniteScroll;
