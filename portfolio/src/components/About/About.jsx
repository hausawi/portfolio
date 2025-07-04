import './About.css';
import wave from '../../assets/wave.png';
import profile from '../../assets/mpic.jpg'

const About = () => {
	return (
		<div className='about'>
			<div className='about-title'>
				<h1>About Me</h1>
				<img src={wave} alt='' />
			</div>
			<div className='about-sections'>
				<div className='about-left'>
					<img src={profile} alt='' />
				</div>
				<div className='about-right'>
					<div className='about-para'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
							magnam illo possimus explicabo esse quo excepturi facere quibusdam
							accusantium repudiandae?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
							magnam illo possimus explicabo esse quo excepturi facere quibusdam
							accusantium repudiandae?
						</p>
					</div>
					<div className='about-skills'>
						<div className='about-skill'>
							<p>HTML & CSS</p>
							<hr style={{ width: '40%' }} />
						</div>
						<div className='about-skill'>
							<p>Tailwincss</p>
							<hr style={{ width: '60%' }} />
						</div>
						<div className='about-skill'>
							<p>React Js</p>
							<hr style={{ width: '70%' }} />
						</div>
						<div className='about-skill'>
							<p>JavaScript</p>
							<hr style={{ width: '60%' }} />
						</div>{' '}
						<div className='about-skill'>
							<p>Python</p>
							<hr style={{ width: '80%' }} />
						</div>
						<div className='about-skill'>
							<p>Node Js</p>
							<hr style={{ width: '70%' }} />
						</div>
					</div>
				</div>
			</div>
			<div className='about-achievements'>
				<div className='about-achievement'>
					<h1>3+</h1>
					<p>YEARS OF EXPERIENCE</p>
				</div><hr/>
				<div className='about-achievement'>
					<h1>20+</h1>
					<p>PROJECTS COMPLETED</p>
				</div><hr/>
				<div className='about-achievement'>
					<h1>10+</h1>
					<p>HAPPY CLIENTS</p>
				</div>
			</div>
		</div>
	);
};

export default About;
