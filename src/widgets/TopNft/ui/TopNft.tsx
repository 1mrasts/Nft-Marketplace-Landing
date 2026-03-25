import { useEffect, useRef, useState } from 'react'
import { NftCard } from '../../../entities/nfts'
import { useNfts } from '../../../entities/nfts/model/useNfts'
import { Button } from '../../../shared'
import { Recent } from '../../Recent'
import arrowLeft from '../Arrow-left.svg'
import arrowRight from '../Arrow-right.svg'
import styles from './TopNft.module.scss'

export function TopNft() {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [containerWidth, setContainerWidth] = useState(0)

	const { nfts } = useNfts()
	const nftsLength = nfts.length - 1

	// Оставляем начальный индекс 0, но далее установим центр в useEffect
	const [index, setIndex] = useState<number>(0)

	const cardRef = useRef<HTMLLIElement>(null)
	const [cardWidth, setCardWidth] = useState(323)

	const gap = 40

	// Получаем ширину контейнера слайдера (для правильного центрирования)
	useEffect(() => {
		const updateWidth = () => {
			if (sliderRef.current) {
				setContainerWidth(sliderRef.current.offsetWidth)
			}
		}

		updateWidth()
		// При изменении размера окна обновляем ширину контейнера
		window.addEventListener('resize', updateWidth)

		return () => window.removeEventListener('resize', updateWidth)
	}, [])

	// Получаем реальную ширину карточки (учитываем адаптив)
	useEffect(() => {
		if (cardRef.current) {
			setCardWidth(cardRef.current.offsetWidth)
		}
	}, [nfts])

	// Центрируем изначально на средней карточке после загрузки NFT
	useEffect(() => {
		if (nfts.length > 0) {
			const middleIndex = Math.floor((nfts.length - 1) / 2)
			setIndex(middleIndex)
		}
	}, [nfts])

	// Константа — количество "крайних" карточек, на которые нельзя центрироваться (запас с обеих сторон)
	const EDGE_OFFSET = 2

	// Новая версия функции для перехода к следующему слайду с зацикливанием
	function loopNextSlide() {
		const maxIndex = nftsLength - EDGE_OFFSET
		setIndex(prev => {
			if (prev >= maxIndex) {
				// Если дошли до правого края — прыгаем к левому "крайнему" индексу
				return EDGE_OFFSET
			}
			return prev + 1
		})
	}

	// Новая версия функции для перехода к предыдущему слайду с зацикливанием
	function loopPreviousSlide() {
		const minIndex = EDGE_OFFSET
		setIndex(prev => {
			if (prev <= minIndex) {
				// Если дошли до левого края — прыгаем к правому "крайнему" индексу
				return nftsLength - EDGE_OFFSET
			}
			return prev - 1
		})
	}

	return (
		<section className={`${styles['top-nft']} mt-300`}>
			<h2>Weekly - Top NFT</h2>

			<div className={styles['top-nft__slide']} ref={sliderRef}>
				<ul
					style={{
						// Учитываем gap между карточками для точного центрирования
						transform: `translateX(${
							-index * (cardWidth + gap) + containerWidth / 2 - cardWidth / 2
						}px)`,
					}}
				>
					{nfts.map((item, i) => (
						<li key={i} ref={i === 0 ? cardRef : null}>
							<NftCard id={item.id} />
						</li>
					))}
				</ul>
			</div>

			<div className={styles['top-nft__buttons']}>
				{/* Используем новые функции с зацикливанием */}
				<Button switchFunction={loopPreviousSlide} arrowActive={arrowLeft} />
				<div className='sep-vert'></div>
				<Button switchFunction={loopNextSlide} arrowActive={arrowRight} />
			</div>

			<div className={styles.recent}>
				<Recent count={3} />
			</div>
		</section>
	)
}
