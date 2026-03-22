import React, { useRef, useState } from 'react'
import { useNfts } from '../../../entities/nfts/model/useNfts'
import upload from '../upload.svg'
import styles from './CreateNft.module.scss'

export function CreateNft() {
	const { nfts, addNft } = useNfts()
	const [name, setName] = useState<string>('')
	const [price, setPrice] = useState<number>(0)
	const [selectedImage, setSelectedImage] = useState<string>('')
	const inputRef = useRef<HTMLInputElement>(null)

	// TODO: Вынести логику в feature
	function addNftHandle() {
		addNft({
			id: nfts[nfts.length - 1].id + 1,
			name,
			price,
			expirationDate: '00h 00m 00s',
			image: selectedImage,
			idOwner: 1,
		})
		console.log('NFT создан')
	}

	function handleLoadClick(e: React.MouseEvent<HTMLAnchorElement>) {
		e.preventDefault()
		inputRef.current?.click() // Триггерим клик по input
	}

	function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0]
			const fileUrl = URL.createObjectURL(file) // создаём временный URL
			setSelectedImage(fileUrl)
		}
	}
	return (
		<>
			<section className={`${styles.sell} wrapper button`}>
				<div className={styles['sell__title']}>
					<h2>Create Your NFT</h2>
				</div>
				<div className={styles['sell__body']}>
					<div className={styles['sell__text']}>
						<div className={styles['sell__forms']}>
							<form>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									placeholder='ArtWork Name'
									onChange={e => setName(e.target.value)}
								/>
							</form>
							<form className={styles['forms__description']}>
								<label htmlFor='description'>Description</label>
								<input type='text' placeholder='Enter Your Description' />
							</form>
							<div className={styles['sell__forms-dual']}>
								<form>
									<label htmlFor='royalty'>Royalty</label>
									<select name='royalty'>
										<option value='royalty'>Royalty</option>
										<option value='other'>Other</option>
									</select>
								</form>
								<form className='no-image'>
									<label htmlFor='size'>Size</label>
									<input type='text' placeholder='Ex - 100 x 100' />
								</form>
							</div>
							<form>
								<label htmlFor='tags'>Tags</label>
								<input
									type='text'
									placeholder='Beautiful Castle, Monkeys ETC'
								/>
							</form>
							<div className={styles['sell__forms-dual']}>
								<form>
									<label htmlFor='price'>Price</label>
									<div className='option-input no-image'>
										<div className='option-input-hr'>
											<select name='currency'>
												<option value='eth'>ETH</option>
												<option value='bit'>BIT</option>
											</select>
										</div>
										<input
											type='text'
											placeholder='0.00007 ETC'
											onChange={e => setPrice(Number(e.target.value))}
										/>
									</div>
								</form>
								<form>
									<label htmlFor='stocks'>in Stock</label>
									<select>
										<option value='001'>001</option>
										<option value='002'>002</option>
										<option value='003'>003</option>
										<option value='004'>004</option>
									</select>
								</form>
							</div>
							<form className={styles['sell__forms-toggle']}>
								<div>
									<label htmlFor='on-sale'>Put On Sale</label>
									<p>People Will Bids On Your NFT Project</p>
								</div>
								<label className={styles['sell__forms-slider']}>
									<input type='checkbox' />
									<span></span>
								</label>
							</form>
							<form className={styles['sell__forms-toggle']}>
								<div>
									<label htmlFor='direct-sale'>Direct Sale</label>
									<p>No Bids - Only Direct Salling</p>
								</div>
								<label className={styles['sell__forms-slider']}>
									<input type='checkbox' />
									<span></span>
								</label>
							</form>
						</div>
						<button onClick={addNftHandle}>Create</button>
					</div>
					<div className={`${styles['sell__avatar']} button`}>
						<a
							style={
								selectedImage != null
									? {
											backgroundImage: `url(${selectedImage})`,
											backgroundSize: 'cover	',
											backgroundPosition: 'center',
										}
									: {}
							}
							onClick={handleLoadClick}
							className={styles['sell__avatar-block']}
						>
							<img
								src={upload}
								alt=''
								style={selectedImage.length < 1 ? {} : { display: 'none' }}
							/>
							<p style={selectedImage.length < 1 ? {} : { display: 'none' }}>
								PNG, GIF, WEBP, MP4
								<br /> or MP3. Max 1Gb.
							</p>
						</a>
						<input
							type='file'
							accept='image/*'
							ref={inputRef}
							style={{ display: 'none' }}
							onChange={handleFileChange}
						/>
						<button>Upload</button>
					</div>
				</div>
			</section>
		</>
	)
}
