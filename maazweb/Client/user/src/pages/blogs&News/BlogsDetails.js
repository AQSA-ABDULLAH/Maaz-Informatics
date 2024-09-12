import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './blogsNews.module.css';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../component/constant/WebsiteConstants'; 

export default function BlogsDetails() {
  const [data, setData] = useState([]);

  const params = useParams();

  const getBlogData = async() =>{
    axios.get(`${API_URL}/api/blogs/get-blog/${params.id}`)
    .then(res => {
        console.log(res.data);
        setData(res.data.data);
    })
    .catch(err => {
        console.log(err);
    });
  }

  useEffect(() => {
    getBlogData();
  }, []);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return `Posted ${date.toLocaleDateString('en-US', options)}`;
};

  return (
    <>
      <div className={style.blog_container}>
        <p>BLOG / {data.category} </p>
        <h2>{data.heading}</h2>
        <div>
          <img
            src={data?.image}
            alt="blogImage"
          />

          <div className={style.blog_description}>
            <div className={style.blog_content}>
              <p>{data.content}</p>
            </div>
            <div>
              <div>
                <p>WRITTEN BY</p>
                <span>{data.writtenby}</span>
                <div></div>
                <p>ORIGINALLY PUBLISHED</p>
                <span>{formatDate(data.createdAt)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
