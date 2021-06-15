import React from 'react';
import Post from './Post/Post.js';
import useStyles from './styles.js';

export default function Posts() {
    const classes = useStyles();
    return (
        <h2>
            <Post/>
        </h2>
    )
}
