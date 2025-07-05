import './About.css';
import wave from '../../assets/wave.png';
import profile from '../../assets/mpic.jpg';

const About = () => {
	return (
		<div id='about' className='about'>
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
							As a MERN Full Stack Developer, I have successfully delivered
							numerous projects that have significantly improved user experience
							and streamlined business processes. My expertise lies in
							developing scalable and efficient web applications, utilizing a
							wide range of technologies such as React, Tailwindcss, Nodejs,
							Express, and various frameworks including FastAPI. I have a deep
							understanding of both front-end and back-end development, allowing
							me to seamlessly integrate different components and deliver
							seamless user experiences.
						</p>
						<p>
							I am also well-versed in the latest industry trends and best
							practices, and I am constantly seeking opportunities to enhance my
							skills and stay up-to-date with emerging technologies.
						</p>
					</div>
					<div className='about-skills'>
						<div className='about-skill'>
							<p>Tailwindcss</p>
							<hr style={{ width: '40%' }} />
						</div>
						<div className='about-skill'>
							<p>MERN Stack</p>
							<hr style={{ width: '60%' }} />
						</div>
						<div className='about-skill'>
							<p>FARM Stack</p>
							<hr style={{ width: '50%' }} />
						</div>
						<div className='about-skill'>
							<p>CI/CD Pipeline</p>
							<hr style={{ width: '60%' }} />
						</div>{' '}
						<div className='about-skill'>
							<p>DBMS</p>
							<hr style={{ width: '30%' }} />
						</div>
						<div className='about-skill'>
							<p>Linux</p>
							<hr style={{ width: '70%' }} />
						</div>
					</div>
				</div>
			</div>
			<div className='about-achievements'>
				<div className='about-achievement'>
					<h1>3+</h1>
					<p>YEARS OF EXPERIENCE</p>
				</div>
				<hr />
				<div className='about-achievement'>
					<h1>20+</h1>
					<p>PROJECTS COMPLETED</p>
				</div>
				<hr />
				<div className='about-achievement'>
					<h1>18+</h1>
					<p>HAPPY CLIENTS</p>
				</div>
			</div>
		</div>
	);
};

export default About;
