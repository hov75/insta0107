import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlice'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChat.css'

function MessengerChat() {
  const { currentUser } = useSelector(selectUsers)

  return (

    <div className='MessengerChat'>

      {
        currentUser?.messages.map(mess => (
          <div key={mess.id} className='messengerMess'>
            <div className='usertxt'>
              <span>{mess.user}</span>
            </div>
            <div>
              <p>{mess.bot}</p>
            </div>
          </div>
        ))
      }


      <MessengerChatForm />
    </div>
  )
}

export default memo(MessengerChat)
