import React, {ChangeEvent} from "react"
import s from './MyPosts.module.css'

import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {AddMyPostReduxForm} from "./MyPostsForm";


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: (newPostText: string) => void
    onPostChange: (text: string) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement =
        props.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}
    />)
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    // // const addPost = () => {
    // //     props.addPost()
    // // }
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.onPostChange(text)
    // }
    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <AddMyPostReduxForm onSubmit={onAddPost}/>
                {/*<div>*/}
                {/*    /!* Привязываем созданную ссылку *!/*/}
                {/*    <textarea value={props.newPostText}*/}
                {/*              ref={newPostElement}*/}
                {/*              onChange={onPostChange}*/}
                {/*              placeholder='Add your post'/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={addPost}>Add post</button>*/}
                {/*</div>*/}
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
