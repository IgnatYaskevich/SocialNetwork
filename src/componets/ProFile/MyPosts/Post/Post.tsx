import React from "react"
import s from './Post.module.css'

const Post = (props: any) => {

    return (
        <div>
            <div className={s.item}>

                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmu47Tzi-9snKDIgESxyXseGsGpnzPnssk5g&usqp=CAU' alt={'s'}/>
                {props.message}
                <div>
                    <span>like </span>
                    {props.likeCounts}
                </div>
            </div>
        </div>
    )
};
export default Post;