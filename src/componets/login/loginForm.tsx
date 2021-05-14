import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsComtrols";
import {maxLengthCreator, required} from "../../utils/validators/Validator";


export  type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLength20 = maxLengthCreator(40)
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  validate={[required, maxLength20]}
                        placeholder={'Login'} name={'email'}
                        component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength20]}
                       placeholder={'password'}
                       name={'password'}
                       type={'password'}
                       component={Input}/>
            </div>
            <div>
                <Field component={'input'}
                       name={'rememberMe'}
                       type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)



