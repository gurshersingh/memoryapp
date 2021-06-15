import React, {useState}from 'react'
import useStyles from './styles.js';
import {Paper, Button, TextField, Typography} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
//import { createPosts } from '../../api/index.js';
import {createPost} from '../../actions/posts'

    
export default function Form() {
    const classes = useStyles();
    const [postData, setPostData]=useState({
        creator :'', title :'', message :'',tags :'',selectedFiles :''
    });
    const handleSubmit= (e)=>{
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clear = ()=>{

    }
    const dispatch = useDispatch();
    return (
        <div>

<Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
                <div> 

                <Typography varient="h6"> Creating a memory

                </Typography>
                </div>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
                <TextField name="tags" variant="outlined" label="Tagss" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
                
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
                        />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={handleSubmit} fullWidth> Submit</Button>
                    <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear</Button>

                </div>
            </form>

        </Paper>
        </div>
    )
}
