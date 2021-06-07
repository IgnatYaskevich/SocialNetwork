import React from "react"
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/Validator";
import {Textarea} from "../../common/FormsControl/FormsComtrols";

type AddNewPostFormPropsType = {
    newPostText: string
}

let maxLength10 = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormPropsType>> = (props) => {
    return (
        <Form name={'new text'} onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Post message'} name={'newPostText'} component={Textarea}
                       validate={[required, maxLength10]}/>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </Form>
    )
}
export const AddMyPostReduxForm = reduxForm<AddNewPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)