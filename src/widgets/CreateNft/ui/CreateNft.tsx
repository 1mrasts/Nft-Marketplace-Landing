import { useRef, useState } from 'react'
import type {
	currency,
	nftType,
	royalty,
} from '../../../entities/nfts/model/types'
import { useNfts } from '../../../entities/nfts/model/useNfts'
import { handleFileChange, handleLoadClick } from '../../../features'
import upload from '../upload.svg'
import styles from './CreateNft.module.scss'

export function CreateNft() {
	const { nfts, addNft } = useNfts()
	const [nftForm, setNftForm] = useState<nftType>({
		id: nfts[nfts.length - 1].id + 1,
		name: '',
		description: '',
		royalty: 'Royalty',
		size: 0,
		tags: [''],
		currency: 'ETH',
		price: 0,
		stock: '001',
		sale: true,
		direct_sale: false,
		expirationDate: '00h 00m 00s',
		image: '',
		idOwner: 1,
	})
	const inputRef = useRef<HTMLInputElement>(null)
	const [hide, setHideToggle] = useState<string>('hide')
	const [validate, setValidate] = useState<boolean>(false)

	function validateName(e: React.ChangeEvent<HTMLInputElement>) {
		setNftForm(prev => ({ ...prev, name: e.target.value }))
		setValidate(true)
	}
	function addNftHandle() {
		if (
			validate == true &&
			nfts.filter(item => item.name == nftForm.name).length <= 0
		) {
			addNft(nftForm)
			setHideToggle('show')
			setTimeout(() => setHideToggle('hide'), 1000)
		} else {
			alert('Такой NFT уже есть или вы заполнили не все поля')
		}
	}
	return (
		<>
			<section className={`${styles.sell} wrapper button`}>
				<div id='adaptive-hide' className={styles['sell__title']}>
					<h2>Create Your NFT</h2>
				</div>
				<div className={styles['sell__body']}>
					<div className={`${styles['sell__avatar']} button`}>
						<a
							style={
								nftForm.image != null
									? {
											backgroundImage: `url(${nftForm.image})`,
											backgroundSize: 'cover	',
											backgroundPosition: 'center',
										}
									: {}
							}
							onClick={e => handleLoadClick(e, inputRef)}
							className={styles['sell__avatar-block']}
						>
							<img
								src={upload}
								alt=''
								style={nftForm.image.length < 1 ? {} : { display: 'none' }}
							/>
							<p style={nftForm.image.length < 1 ? {} : { display: 'none' }}>
								PNG, GIF, WEBP, MP4
								<br /> or MP3. Max 1Gb.
							</p>
						</a>
						<input
							type='file'
							accept='image/*'
							ref={inputRef}
							style={{ display: 'none' }}
							onChange={e => handleFileChange(e, setNftForm)}
						/>
						<button>Upload</button>
					</div>
					<div className={styles['sell__text']}>
						<div className={styles['sell__forms']}>
							<form>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									placeholder='ArtWork Name'
									onChange={e =>
										e.target.value.length <= 2
											? setValidate(false)
											: validateName(e)
									}
								/>
							</form>
							<form className={styles['forms__description']}>
								<label htmlFor='description'>Description</label>
								<input
									type='text'
									placeholder='Enter Your Description'
									onChange={e =>
										setNftForm(prev => ({
											...prev,
											description: e.target.value,
										}))
									}
								/>
							</form>
							<div className={styles['sell__forms-dual']}>
								<form>
									<label htmlFor='royalty'>Royalty</label>
									<select
										name='royalty'
										onChange={e =>
											setNftForm(prev => ({
												...prev,
												royalty: e.target.value as royalty,
											}))
										}
									>
										<option value='Royalty'>Royalty</option>
										<option value='Creator Fee'>Creator Fee</option>
										<option value='Secondary Sale Fee'>
											Secondary Sale Fee
										</option>
										<option value='Percentage'>Percentage</option>
										<option value='Fixed Fee'>Fixed Fee</option>
										<option value='No Royalty'>No Royalty</option>
									</select>
								</form>
								<form className='no-image'>
									<label htmlFor='size'>Size</label>
									<input
										type='text'
										placeholder='Ex - 100 x 100 (100)'
										onChange={e =>
											setNftForm(prev => ({
												...prev,
												size: Number(e.target.value),
											}))
										}
									/>
								</form>
							</div>
							<form>
								<label htmlFor='tags'>Tags</label>
								<input
									type='text'
									placeholder='Beautiful Castle, Monkeys ETC'
									onChange={e =>
										setNftForm(prev => ({
											...prev,
											tags: e.target.value.split(', '),
										}))
									}
								/>
							</form>
							<div className={styles['sell__forms-dual']}>
								<form>
									<label htmlFor='price'>Price</label>
									<div className='option-input no-image'>
										<div className='option-input-hr'>
											<select
												name='currency'
												onChange={e =>
													setNftForm(prev => ({
														...prev,
														currency: e.target.value as currency,
													}))
												}
											>
												<option value='ETH'>ETH</option>
												<option value='BTC'>BTC</option>
												<option value='USDT'>USDT</option>
											</select>
										</div>
										<input
											type='text'
											placeholder='0.00007 ETC'
											onChange={e =>
												setNftForm(prev => ({
													...prev,
													price: Number(e.target.value),
												}))
											}
										/>
									</div>
								</form>
								<form>
									<label htmlFor='stocks'>in Stock</label>
									<select
										onChange={e =>
											setNftForm(prev => ({ ...prev, stock: e.target.value }))
										}
									>
										<option value='001'>001</option>
										<option value='002'>002</option>
										<option value='003'>003</option>
									</select>
								</form>
							</div>
							<form className={styles['sell__forms-toggle']}>
								<div>
									<label htmlFor='on-sale'>Put On Sale</label>
									<p>People Will Bids On Your NFT Project</p>
								</div>
								<label className={styles['sell__forms-slider']}>
									<input
										onChange={e =>
											setNftForm(prev => ({ ...prev, sale: e.target.checked }))
										}
										type='checkbox'
									/>
									<span></span>
								</label>
							</form>
							<form className={styles['sell__forms-toggle']}>
								<div>
									<label htmlFor='direct-sale'>Direct Sale</label>
									<p>No Bids - Only Direct Salling</p>
								</div>
								<label className={styles['sell__forms-slider']}>
									<input
										onChange={e =>
											setNftForm(prev => ({
												...prev,
												direct_sale: e.target.checked,
											}))
										}
										type='checkbox'
									/>
									<span></span>
								</label>
							</form>
						</div>
						<div className={styles['create__block']}>
							<button onClick={addNftHandle}>Create</button>
							<div id={hide} className={styles['done']}>
								<p>Успешно</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
