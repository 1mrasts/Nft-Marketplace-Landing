import { Banner } from '../../widgets/Banner'
import { ExploreMarket } from '../../widgets/ExploreMarket'
import { Hero } from '../../widgets/Hero'
import { TopCollection } from '../../widgets/TopCollection'
import { TopNft } from '../../widgets/TopNft'
import { Unleash } from '../../widgets/Unleash'

export function Home() {
	return (
		<>
			<Hero />
			<TopNft />
			<TopCollection />
			<ExploreMarket />
			<Unleash />
			<Banner />
		</>
	)
}
