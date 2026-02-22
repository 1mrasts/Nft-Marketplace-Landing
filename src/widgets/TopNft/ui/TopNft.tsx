import { useState } from 'react'
import { NftCard } from '../../../entities/nfts'
import { nftMockData } from '../../../entities/nfts/model/mockData'
import type { nftType } from '../../../entities/nfts/model/types'
import { nextSlide, previousSlide } from '../../../features'
import { Button } from '../../../shared'
import { Recent } from '../../Recent'
import arrowLeftInactive from '../Arrow-left-inactive.svg'
import arrowLeft from '../Arrow-left.svg'
import arrowRightInactive from '../Arrow-right-inactive.svg'
import arrowRight from '../Arrow-right.svg'
import styles from './TopNft.module.scss'

export function TopNft() {
	const nfts: nftType[] = nftMockData
	const nftsLength = nfts.length - 1
	const [index, setIndex] = useState<number>(0)

	return (
		<section className={`${styles['top-nft']} mt-300`}>
			<h2>Weekly - Top NFT</h2>
			<div className={styles['top-nft__slide']}>
				<ul style={{ transform: `translateX(${index * 323 * -1}px)` }}>
					{nfts.map((item, index) => (
						<NftCard key={index} id={item.id} />
					))}
				</ul>
			</div>
			<div className={styles['top-nft__buttons']}>
				<Button
					type='previous'
					switchFunction={() => previousSlide(nftsLength, setIndex)}
					index={index}
					length={nftsLength}
					arrowActive={arrowLeft}
					arrowInactive={arrowLeftInactive}
				/>
				<div className='sep-vert'></div>
				<Button
					type='next'
					switchFunction={() => nextSlide(nftsLength, setIndex)}
					index={index}
					length={nftsLength}
					arrowActive={arrowRight}
					arrowInactive={arrowRightInactive}
				/>
			</div>
			<Recent count={3} />
		</section>
	)
}
