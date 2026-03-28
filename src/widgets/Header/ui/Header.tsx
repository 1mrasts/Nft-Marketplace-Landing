import { useState } from 'react'
import { Link } from 'react-router'
import { burgerClickHandle } from '../../../features'
import burger from '../Burger.svg'
import Logo from '../Logo.svg'
import styles from './Header.module.scss'

export function Header() {
	const [hideToggle, setHideToggle] = useState<string>('')

	return (
		<header className={`${styles.header} wrapper`}>
			<div className={styles['header__nav']}>
				<Link to='/'>
					<img src={Logo} alt='Логотип' />
				</Link>
				<nav id='adaptive-hide'>
					<ul>
						<li>
							<Link to='discover'>DISCOVER</Link>
						</li>
						<div className='sep-horiz'></div>
						<li>
							<Link to='creators'>CREATORS</Link>
						</li>
						<div className='sep-horiz'></div>
						<li>
							<Link to='sell'>SELL</Link>
						</li>
						<div className='sep-horiz'></div>
						<li>
							<Link to='stats'>STATS</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id='adaptive-hide' className={`${styles['header__login']} button`}>
				<input type='search' placeholder='Search Art Work / Creator' />
				<button>CONNECT WALLET</button>
			</div>
			<div id='adaptive-show' className={styles['burger__block']}>
				<img
					id={styles['burger']}
					src={burger}
					alt=''
					onClick={() => burgerClickHandle(setHideToggle)}
				/>
				<div
					className={
						hideToggle.length < 1
							? styles['burger__block-menu']
							: `${styles['burger__block-menu']} ${styles.open}`
					}
				>
					<nav>
						<ul>
							<li>
								<Link to='discover'>DISCOVER</Link>
							</li>
							<div className='sep-horiz'></div>
							<li>
								<Link to='creators'>CREATORS</Link>
							</li>
							<div className='sep-horiz'></div>
							<li>
								<Link to='sell'>SELL</Link>
							</li>
							<div className='sep-horiz'></div>
							<li>
								<Link to='stats'>STATS</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
