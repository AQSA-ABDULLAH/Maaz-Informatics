// Importing React, hooks, and dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './blogs.module.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../constant/WebsiteConstants'; 

export default function Blogsection1molecule() {
    const [product, setProduct] = useState([]);

    // Fetching the blogs data on component mount
    useEffect(() => {
        axios.get(`${API_URL}/api/blogs/get-blog`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Helper function to format the date
    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return `Posted ${date.toLocaleDateString('en-US', options)}`;
    };

    // Helper function to truncate content if it exceeds a certain length
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


