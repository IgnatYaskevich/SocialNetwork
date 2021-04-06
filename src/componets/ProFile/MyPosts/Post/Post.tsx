import React from "react"
import s from './Post.module.css'


const Post = (props: any) => {

    return (
        <div>
            <div className={s.item}>

                <img
                    src='https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg' alt={'s'}/>
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