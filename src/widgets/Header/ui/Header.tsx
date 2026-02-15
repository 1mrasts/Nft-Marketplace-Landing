import { Link } from 'react-router'
import Logo from '../Logo.svg'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles['header__nav']}>
				<Link to='/'>
					<img src={Logo} alt='Логотип' />
				</Link>
				<nav>
					<ul>
						<li>
							<Link to='discover'>DISCOVER</Link>
						</li>
						<li>
							<Link to='creators'>CREATORS</Link>
						</li>
						<li>
							<Link to='sell'>SELL</Link>
						</li>
						<li>
							<Link to='stats'>STATS</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={`${styles['header__login']} button`}>
				<input type='search' placeholder='Search Art Work / Creator' />
				<button>CONNECT WALLET</button>
			</div>
		</header>
	)
}
