import React from "react"
import {Form, Field, reduxForm, InjectedFormProps} from "redux-form";

type AddNewPostFormPropsType = {
    newPostText: string
}
const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormPropsType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'new post'} name={'newPostText'} component={'textarea'}/>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </Form>
    )
}
export const AddMyPostReduxForm = reduxForm<AddNewPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)