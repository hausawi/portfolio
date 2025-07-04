import wave from '../../assets/wave.png';
import email from '../../assets/email.png';
import call from '../../assets/call.png';
import location from '../../assets/location.png';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-title'>
				<h1>Get in touch</h1>
				<img src={wave} alt='' />
			</div>
			<div className='contact-section'>
				<div className='contact-left'>
					<h1>Let's talk</h1>
					<p>
						I'm currently available to take on new projects, so feel free to
						send me a message about anything that you want me to work on. You
						can contact anytime
					</p>

					<div className='contact-details'>
						<div className='contact-detail'>
							<img src={email} alt='' /> <p>sudastack@gmail.com</p>
						</div>
						<div className='contact-detail'>
							<img src={call} alt='' /> <p>+218 91 2858 198</p>
						</div>
						<div className='contact-detail'>
							<img src={location} alt='' /> <p>Sudan, Khartoum - ST.08</p>
						</div>
					</div>
				</div>

				<form className='contact-right'>
					<label htmlFor=''>Your Name</label>
					<input type='text' placeholder='Enter your name' name='name' />
					<label htmlFor=''>Your Email</label>
					<input type='email' placeholder='Enter your Email' name='email' />
					<label htmlFor=''>Write your message here</label>
					<textarea
						name='message'
						rows='8'
						placeholder='Enter your message'></textarea>
					<button type='submit' className='contact-submit'>
						Submit now
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
