import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile from '../../assets/myPhoto.jpeg';

const Hero = () => {
	return (
		<div id='home' className='hero'>
			<img className='profile' src={profile} alt='' />
			<h1>
				<span>I'm Haider Hausawi,</span> fullstack developer based in Sudan.
			</h1>
			<p>
				I am a fullstack developer with backend focus from Khartoum, Sudan with
				4 years of experience as Freelancer
			</p>
			<div className='hero-action'>
				<div className='hero-connect'>
					<AnchorLink className='anchor-link' href='#contact'>
						Connect with me
					</AnchorLink>
				</div>
				<div className='hero-resume'>My resume</div>
			</div>
		</div>
	);
};

export default Hero;
