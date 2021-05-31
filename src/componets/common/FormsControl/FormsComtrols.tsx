import React from "react";
import style from './FormsComtrols.module.css'


// const FormControl = ({input, meta, child, ...props}: any) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
//             <div>
//                 {props.child}
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
export const Textarea = React.memo(({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div>
                <textarea {...input}{...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
})

export const Input = React.memo(({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : "")}>
            <div>
                <input {...input}{...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
})