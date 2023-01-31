import './MessengerChatForm.css'
import IMAGES from '../../images'
import { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewMessage, selectUsers } from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router-dom'

function MessengerChatForm() {
 const {currentUser} = useSelector(selectUsers)
 const navigate = useNavigate()
 const formRef = useRef(null)
 const dispatch = useDispatch()

 useEffect(() => {
	if(!currentUser) {
		navigate('/login')
	}
 }, [currentUser])

 const handleSubmit = (e) => {
	 e.preventDefault()
	 const message = formRef.current[0].value
	dispatch(addNewMessage(message))
	formRef.current.reset()
 }
  return (
	
	
	 
		<form className='Chat-input' ref={formRef} onSubmit={handleSubmit}>
		   <input type='text' placeholder='Message...'/>

		   <label>
			<input type='submit' style={{display: 'none'}}/>
		   <img src={IMAGES.like} alt=''/>
		   </label>
		</form>
	 
	 
  )
}

export default memo(MessengerChatForm)
