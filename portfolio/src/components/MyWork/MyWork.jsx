import { mywork_data } from '../../assets/services-data';
import wave from '../../assets/wave.png';
import arrow from '../../assets/arrow.png';
import './MyWork.css';

const MyWork = () => {
	return (
		<div className='mywork'>
			<div className='mywork-title'>
				<h1>My latest work</h1>
				<img src={wave} alt='' />
			</div>
			<div className='mywork-container'>
				{mywork_data.map((work, index) => {
					return <img key={index} src={work.w_img} alt='' />;
				})}
			</div>
			<div className="mywork-showmore">
				<p>Show More</p>
				<img src={arrow} alt="" />
			</div>
		</div>
	);
};

export default MyWork;
