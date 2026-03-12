import styles from './Footer.module.scss'
import logo from '/src/shared/assets/icons/logo.svg'
import facebook from '/src/shared/assets/icons/Social/Facebook.svg'
import instagram from '/src/shared/assets/icons/Social/Instagram.svg'
import linkedin from '/src/shared/assets/icons/Social/LinkedIn.svg'
import twitter from '/src/shared/assets/icons/Social/Twitter.svg'

export function Footer() {
	return (
		<>
			<footer className={`${styles.footer} mt-150`}>
				<div className={styles['footer__nav']}>
					<div className={styles['footer__title']}>
						<img src={logo} alt='' />
						<h4>DiveSea</h4>
					</div>
					<nav>
						<ul>
							<li>
								<a href='#'>Privacy Policy</a>
							</li>
							<li>
								<a href='#'>Term & Conditions</a>
							</li>
							<li>
								<a href='#'>About Us</a>
							</li>
							<li>
								<a href='#'>Contact</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className='sep-horiz-gray'></div>
				<div className={styles['footer__service']}>
					<p>© 2023 EATLY All Rights Reserved.</p>
					<nav>
						<ul>
							<li>
								<a href='#'>
									<img src={instagram} alt='' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={linkedin} alt='' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={facebook} alt='' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={twitter} alt='' />
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	)
}
