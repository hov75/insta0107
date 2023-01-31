import { current } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {


  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<p></p>
			<p>i</p>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
