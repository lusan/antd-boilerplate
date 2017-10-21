import App from '../../App'
import HeaderWrapper from '../../components/layouts/header'
import FooterWrapper from '../../components/layouts/footer'
import OrdersWrapper from '../../components/orders'
import RefillMedicines from '../../components/refill'
import ArticlesWrapper from '../../components/articles'
import ProfileWrapper from '../../components/profile'
import NotFound from '../../NotFound'

export const routes = [
  {
    path: '/',
    exact: true,
    header: HeaderWrapper,
    main: App,
    footer: FooterWrapper
  },
  {
    path: '/orders',
    header: HeaderWrapper,
    main: OrdersWrapper,
    footer: FooterWrapper
  },
  {
    path: '/refill-medicines',
    header: HeaderWrapper,
    main: RefillMedicines,
    footer: FooterWrapper
  },
  {
    path: '/articles',
    header: HeaderWrapper,
    main: ArticlesWrapper,
    footer: FooterWrapper
  },
  {
    path: '/profile',
    header: HeaderWrapper,
    main: ProfileWrapper,
    footer: FooterWrapper
  },
  {
    path: '/not',
    main: NotFound
  }
]
