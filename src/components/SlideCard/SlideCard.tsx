import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IData } from '../../typeInterface/typeInterface';
import Modal from '../Modal/index';
import styles from './SlideCard.module.scss';


interface IDataType {
	data: IData;
}
const SlideCard = ({data}:IDataType) => {
	
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	}
	useEffect(() => {
		const handleKeyDown = ({ key }: any) => {
		  if (key === 'Escape') {
			setClick(false);
		  }
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
		  document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);
	
	const list = data.list.map((item, index) => <li className={styles.listItem} key={index}>{item}</li>)

	const card = (
		<div className={styles.container}>
			<div className={styles.errorMessage}><ToastContainer limit={1} position="top-center" /></div>
			<div className={styles.wrapper}>
				<div className={styles.modal}>
					<Modal stateModal={click}/>
				</div>
				<div className={styles.description}>
					<div className={styles.title}>{data.title}</div>
					<div className={styles.subtitle}>{data.subtitle}</div>
					<ul className={styles.list}>
						{list}
					</ul>
					<div className={styles.price}>Всего {data.price} <span className={styles.oldPrice}>{data.oldPrice}</span></div>
					<div className={styles.buttonBlock}>
						<button onClick={handleClick} className={`${styles.btnEnroll} ${styles.btn}`}>Записаться</button>
						<button className={`${styles.btnMore} ${styles.btn}`}>Подробнее</button>
					</div>
				</div>
				<img className={styles.slideImage} src={data.img} alt="slideImage"/> 
			</div>
		</div>
	)

	return (
		<>
			{card}
		</>
	)
}

export default SlideCard;