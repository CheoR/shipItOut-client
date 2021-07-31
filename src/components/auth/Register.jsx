import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

export const Register = (props) => {
  const username = React.createRef()
  const firstName = React.createRef()
  const lastName = React.createRef()
  const email = React.createRef()
  const password = React.createRef()
  const verifyPassword = React.createRef()
  const company = React.createRef()
  const role = React.createRef()
  const phone = React.createRef()

  const passwordDialog = React.createRef()
  const invalidDialog = React.createRef()
  const blankFieldsDialog = React.createRef()

  // redundant check if all fields are filled
  const isBlank = (e) => e.length === 0

  const fields = [firstName, lastName]

  const handleRegister = (e) => {
    e.preventDefault()

    if (fields.some(isBlank)) {
      blankFieldsDialog.current.showModal()
    }

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        company: company.current.value,
        role: role.current.value,
        phone: phone.current.value
      }

      return fetch(`${process.env.REACT_APP_API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(newUser)
      })
        .then(res => res.json())
        .then(res => {
          if ('token' in res) {
            localStorage.setItem('user_token', res.token)
            props.history.push('/bookings')
          } else {
            console.log(res)
            console.log(invalidDialog.current)
            invalidDialog.current.showModal()
          }
        })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <main style={{ textAlign: 'center' }}>

      <dialog className='dialog dialog--auth' ref={blankFieldsDialog}>
        <div>Fields Cannot be blank</div>
        <button className='button--close' onClick={e => blankFieldsDialog.current.close()}>Close</button>
      </dialog>

      <dialog className='dialog dialog--auth' ref={invalidDialog}>
        <div>Could Not Register</div>
        <button className='button--close' onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>

      <dialog className='dialog dialog--password' ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button className='button--close' onClick={e => passwordDialog.current.close()}>Close</button>
      </dialog>

      <form className='form--login' onSubmit={handleRegister}>
        <h1 className='h3 mb-3 font-weight-normal'>Register an account</h1>
        <fieldset>
          <label htmlFor='userName'> Username </label>
          <input ref={username} type='text' name='username' className='form-control' placeholder='Username' required autoFocus />
        </fieldset>
        <fieldset>
          <label htmlFor='firstName'> First Name </label>
          <input ref={firstName} type='text' name='firstName' className='form-control' placeholder='First name' required autoFocus />
        </fieldset>
        <fieldset>
          <label htmlFor='lastName'> Last Name </label>
          <input ref={lastName} type='text' name='lastName' className='form-control' placeholder='Last name' required />
        </fieldset>
        <fieldset>
          <label htmlFor='inputEmail'> Email address </label>
          <input ref={email} type='email' name='email' className='form-control' placeholder='Email address' required />
        </fieldset>
        <fieldset>
          <label htmlFor='inputCompnay'> Company </label>
          <input ref={company} type='text' name='company' className='form-control' placeholder='Company' required />
        </fieldset>
        <fieldset>
          <label htmlFor='inputRole'> Role </label>
          <input ref={role} type='text' name='role' className='form-control' placeholder='Role' required />
        </fieldset>
        <fieldset>
          <label htmlFor='inputPhone'> Phone </label>
          <input ref={phone} type='phone' name='phone' className='form-control' placeholder='615-123-4567' required />
        </fieldset>
        <fieldset>
          <label htmlFor='inputPassword'> Password </label>
          <input ref={password} type='password' name='password' className='form-control' placeholder='Password' required />
        </fieldset>
        <fieldset>
          <label htmlFor='verifyPassword'> Verify Password </label>
          <input ref={verifyPassword} type='password' name='verifyPassword' className='form-control' placeholder='Verify password' required />
        </fieldset>

        <fieldset style={{
          textAlign: 'center'
        }}
        >
          <button className='btn btn-1 btn-sep icon-send' type='submit'>Register</button>
        </fieldset>
      </form>
      <section className='link--register'>
        Already registered? <Link to='/login'>Login</Link>
      </section>
    </main>
  )
}
