import React from 'react'
import {useSelector} from 'react-redux';
import useStyles from './styles.js';

export default function Post() {
    const posts = useSelector((state)=>
         state.getposts
    );
    const classes = useStyles();
    console.log(posts)
    return (
        <div>
            <h2>
            Post

            </h2>
        </div>
    )
}
