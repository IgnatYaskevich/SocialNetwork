import React, {ChangeEvent} from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/State";


type MyPostsPropsType = {
    // state: RootStateType
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    onChange: (newText: string) => void

}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likeCounts={p.likesCount}/>)
    /*    создаёт ссылку на элемент (ref={...}). (Отображаем её в месте где необходимо нам) в данном случаи
    отображается в <textarea ref={ сюда передаюм ссылку newPostElement}>     */
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    /// ---------------------------------------------------------

    let addPost = () => {
        /*  let text = newPostElement.current?.value */
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            props.onChange('')

        }
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let text =  props.onChange(e.currentTarget.value)
    }
    return (
        <div>
            <div className={s.postsBlock}>
                <h2>My posts</h2>
                <div>
                    {/* Привязываем ссылку созданную   */}
                    <textarea value={props.profilePage.NewPostText} ref={newPostElement} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;