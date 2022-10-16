import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const resetInputs = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    birthday: ''
}

const FormUsers = ({ creatNewUser, updateInfo, updateUserId, setupdateInfo }) => {

    const { handleSubmit, reset, register } = useForm()

    useEffect(() => {
        if (updateInfo) { //¿if?: Porque el primer renderizado es undefined
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = (data) => {
        if (updateInfo) {
            updateUserId(updateInfo.id, data)
            setupdateInfo()
        } else {
            creatNewUser(data)
        }
        reset(resetInputs)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>{updateInfo ? 'Edit User' : 'New User'}</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register('email')} />
            </div>
            <div>
                <label htmlFor="password">PassWord</label>
                <input type="password" id='password' {...register('password')} />
            </div>
            <div>
                <label htmlFor="firstname">FirstName</label>
                <input type="text" id='firstname' {...register('firstname')} />
            </div>
            <div>
                <label htmlFor="lastname">LastName</label>
                <input type="text" id='lastname' {...register('lastname')} />
            </div>
            <div>
                <label htmlFor="birthday">BirthDay</label>
                <input type="date" id='birthday' {...register('birthday')} />
            </div>
            <button>{updateInfo ? 'Update!' : 'Register!'}</button>
        </form>
    )
}

export default FormUsers