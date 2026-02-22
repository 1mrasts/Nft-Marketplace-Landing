import { Link } from 'react-router'
import arrowRightLink from '../../../shared/assets/icons/Arrow-right-link.svg'
import styles from './ExploreAll.module.scss'

export function ExploreAll({ path }: { path: string }) {
	return (
		<div className={styles.more}>
			<Link to={path}>
				Explore All <img src={arrowRightLink} alt='' />
			</Link>
		</div>
	)
}
