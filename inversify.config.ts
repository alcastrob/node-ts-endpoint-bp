import { Container } from 'inversify'
import MiscClass from './src/Application/misc'

const container = new Container()
container.bind<MiscClass>(MiscClass).toSelf()
// For interfaces
// container.bind<IOfferRepository>('IOfferRepository').to(HubspotOfferRepository)

export default container
