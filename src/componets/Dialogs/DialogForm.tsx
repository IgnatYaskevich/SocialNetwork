import React from "react";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsComtrols";
import {maxLengthCreator, required} from "../../utils/validators/Validator";

export type DialogFormType = {
    message: string
}
const maxLength50 = maxLengthCreator(50)

const DialogForm: React.FC<InjectedFormProps<DialogFormType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'message'}
                       name={'message'}
                       component={Textarea}
                       validate={[required, maxLength50]}/>

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

