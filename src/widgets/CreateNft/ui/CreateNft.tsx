import styles from './CreateNft.module.scss'

export function CreateNft() {
	return (
		<>
			<section className={`${styles.sell} wrapper`}>
				<div className={styles['sell__title']}>
					<h2>Create Your NFT</h2>
				</div>
				<div className={styles['sell__forms']}>
					<form>
						<label htmlFor='name'>Name</label>
						<input type='text' placeholder='ArtWork Name' />
					</form>
					<form className={styles['forms__description']}>
						<label htmlFor='description'>Description</label>
						<input type='text' placeholder='Enter Your Description' />
					</form>
					<div className={styles['sell__forms-dual']}>
						<form>
							<label htmlFor='royalty'>Royalty</label>
							<select>
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
						<input type='text' placeholder='Beautiful Castle, Monkeys ETC' />
					</form>
					{/* <div className={styles['sell__forms-dual']}>
						<form>
							<label htmlFor='price'>Price</label>
							<input type='text' placeholder='0.00007 ETC' />
						</form>
						<form>
							<label htmlFor='tags'>Tags</label>
							<input type='text' placeholder='Beautiful Castle, Monkeys ETC' />
						</form>
					</div> */}
				</div>
			</section>
		</>
	)
}
