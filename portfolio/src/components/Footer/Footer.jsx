import './Footer.css';
import person from '../../assets/person.png';
import logo from '../../assets/logo.png';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-top'>
				<div className='footer-top-left'>
					<img src={logo} alt='' />
					<p>
						I am a fullstack developer with backend focus from Khartoum, Sudan
						with over 4 years of experience as Freelancer
					</p>
				</div>
				<div className='footer-top-right'>
					<div className='footer-email-input'>
						<img src={person} alt='' />
						<input type='email' placeholder='Enter ypur Email' />
					</div>
					<div className='footer-subscribe'>Subscribe</div>
				</div>
			</div>
			<hr />
			<div className='social-icons'>
				<a href='https://www.linkedin.com/in/haider-moubarak-7b184a31b'>
					<img src='./linked.png' alt='' />
				</a>
				<a href='https://youtube.com/@hausawi_dev?si=k3TCl5nle80VO9Wh'>
					<img src='./tube.png' alt='' />
				</a>
				<a href='https://github.com/hausawi'>
					<img src='./githubjpg.png' alt='' />
				</a>
			</div>
			<div className='footer-bottom'>
				<p className='footer-bottom-left'>
					{' '}
					© 2025 Haider Hausawi. All rights Reserved
				</p>
				<div className='footer-bottom-right'>
					<p>Term of Services</p>
					<p>Privacy Policy</p>
					<p>Connect with me</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
