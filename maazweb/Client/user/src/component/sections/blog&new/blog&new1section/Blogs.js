import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './blogs.module.css';
import { Link } from 'react-router-dom';

export default function Blogsection1molecule() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/blogs/get-blog")
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return `Posted ${date.toLocaleDateString('en-US', options)}`;
    };
    

    const truncateContent = (content, maxLength) => {
        if (content.length > maxLength) {
            return content.substring(0, maxLength) + '...'; // Append ellipsis for truncated content
        }
        return content;
    };

    return (
        <>
            {product.map((item, index) => (
                <div className={style.cards} key={index}>
                    <div className={style.blogCard}>
                        <div>
                            <img
                                className={style.blogImage}
                                src={item?.image}
                                alt="blogImage"
                            />
                        </div>
                        <div className={style.blog}>
                            <h2>{item.heading}</h2>
                            <p>{truncateContent(item.content, 200)}</p>
                            <div className={style.blogBottom}>
                            <p>{formatDate(item.createdAt)}</p>
                            {item.content.length > 200 && (
                                // <button onClick={() => alert(item.content)}>Read more </button>
                                <button> <Link to={`/blog&news/${item._id}`}>Read more</Link></button>
                            )}
                            </div>
                        </div>
                    </div>

                    <div className={style.border}></div>
                </div>
            ))}
        </>
    );
}
