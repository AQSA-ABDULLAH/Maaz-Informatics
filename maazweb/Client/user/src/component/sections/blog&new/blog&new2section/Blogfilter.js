import React from 'react';
import style from './blogfilter.module.css';
import { Link } from 'react-router-dom';

export default function Blogsection2molecule() {
    return (
        <div className={style.blog_section}>
            <div className={style.search_container}>
            <h2>Discover how to get anywhere...</h2>
            <p>Transport hub searches any city, town or address across the Pakistan with thousands of routes to easily get you from A to B.</p>
            <Link to="/">Try it now</Link>
            </div>

            <div className={style.blog_subscribe}>
                <h2>Join our newsletter</h2>
                <p>Get regular access to our best deals and tips in your inbox.</p>
                <div className={style.subscribe_input}>
                    <input type="text" placeholder="Search..." />
                    <button>Subscribe now</button>
                </div>
            </div>
            <p className={style.after_blog}>Rome2Rio will use the information you provide on this form to provide product 
                    updates and marketing offers. You can change your mind at any time by clicking 
                    the unsubscribe link in the footer of any email you receive from us.</p>

            <div className={style.blog_category}>
                <h2>Categories</h2>
                <p>People & Culture</p>
                <p>Career</p>
                <p>Travel Technology</p>
                <p>Other</p>
            </div>
            {/* <div className={style.latest_tweet}>
                <h2>Latest Tweet</h2>
            </div> */}
        </div>
    );
}

