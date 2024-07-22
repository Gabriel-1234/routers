
import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

const Email = () => {

  const data = useActionData()

  return (
    <div className='contact'>
      <h3>Contact us</h3>
      <Form method='post' action='/help/email'>
        <label>
            <span>Your Email</span>
            <input type="email" name='email' required/>
        </label>

        <label>
            <span>Your question</span>
            <input name="message" required/>
        </label>

        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}

      </Form>
    </div>
  )
}

export default Email

export const emailAction = async({request}) => {

  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  if (submission.message.length < 10) {
    return { error: 'message should be greater 10 chars'}
  }

  return redirect('/')

}
