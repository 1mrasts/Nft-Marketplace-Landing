import { ExploreMarket } from '../../widgets/ExploreMarket'
import { Hero } from '../../widgets/Hero'
import { TopCollection } from '../../widgets/TopCollection'
import { TopNft } from '../../widgets/TopNft'

export function Home() {
	return (
		<>
			<Hero />
			<TopNft />
			<TopCollection />
			<ExploreMarket />
		</>
	)
}
