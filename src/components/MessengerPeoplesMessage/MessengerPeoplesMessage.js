import { memo } from 'react'
import './MessengerPeoplesMessage.css'

function MessengerPeoplesMessage() {
	const bot = {
		id:'1',
		name:'bot',
		img:'https://cdn-icons-png.flaticon.com/512/4712/4712139.png'
	}
  return (
	 <div className='Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={bot.img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{bot.name}</p>
			<p></p>
		</div>
	 </div>
  )
}

export default memo(MessengerPeoplesMessage)
