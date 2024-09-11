import React from 'react'
import style from './blogsNews.module.css'
import Blogsection1 from '../../component/sections/blog&new/blog&new1section/Blogs'
import Blogsection2 from '../../component/sections/blog&new/blog&new2section/Blogfilter'

export default function BlogsNews() {
  return (
    <>
      <div className={style.homeContainer}>
        <img className={style.image} src="/assest/images/blogs&News/blogImage2.png"/>
      </div>
      <div className={style.blogSection}>
        <div className={style.blogContainer}>
          <Blogsection1/>
        </div>
        <div className={style.filterContainer}>
          <Blogsection2/>
        </div>
      </div>
    </>
  )
}
