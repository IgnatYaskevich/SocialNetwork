import React from "react";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";

export type DialogFormType = {
    message: string
}
const DialogForm: React.FC<InjectedFormProps<DialogFormType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'message'} name={'message'} component={'textarea'}/>

                <button>Send</button>
            </div>
            {/*<Field placeholder={'sentMessage'} name={'sentMessage'} component={'button'} value={'sent'}/>*/}
        </Form>
    )
}

export const AddMessageFormRedux = reduxForm<DialogFormType>({form: 'dialogAddMessage'})(DialogForm)


// export type DialogFormType = {
//     message: string
// }
// const DialogForm = (props: any) => {
//     const { handleSubmit, pristine, reset, submitting } = props
//     return (
//         <Form onSubmit={props.handleSubmit}>
//             {()=>{
//                 <form onSubmit={handleSubmit}>
//                     <Field placeholder={'message'} name={'message'} component={'textarea'}/>
//
//                     <button>Send</button>
//                 </form>
//             }}
//             {/*<Field placeholder={'sentMessage'} name={'sentMessage'} component={'button'} value={'sent'}/>*/}
//         </Form>
//     )
// }
//
// export const AddMessageFormRedux = reduxForm<DialogFormType>({form: 'dialogAddMessage'})(DialogForm)

