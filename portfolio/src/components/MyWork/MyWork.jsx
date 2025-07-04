import { mywork_data } from '../../assets/services-data';
import wave from '../../assets/wave.png';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';
import './MyWork.css';
import { useState } from 'react';


const MyWork = () => {
	return (
		<div id='work' className='mywork'>
			<div className='mywork-title'>
				<h1>My latest work</h1>
				<img src={wave} alt='' />
			</div>
			<div className='mywork-container'>
			
					{mywork_data.map((work, index) => {
						return (
							<a key={index} href={work.w_url}>
								<img src={work.w_img} alt='' />
							</a>
						);
					})}
			
			</div>
			<div className='mywork-showmore'>
				<p>Show More</p>
				<img src={arrow} alt='' />
			</div>
		</div>
	);
};

export default MyWork;
