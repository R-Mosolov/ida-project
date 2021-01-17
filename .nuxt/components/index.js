export { default as Header } from '../../components/Header.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as Sorter } from '../../components/Sorter.vue'
export { default as BinContainer } from '../../components/Bin/BinContainer.vue'
export { default as Form } from '../../components/Bin/Form.vue'
export { default as ProductsList } from '../../components/Bin/ProductsList.vue'
export { default as Success } from '../../components/Bin/Success.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyProductCard = import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c)
export const LazySidebar = import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
export const LazySorter = import('../../components/Sorter.vue' /* webpackChunkName: "components/sorter" */).then(c => c.default || c)
export const LazyBinContainer = import('../../components/Bin/BinContainer.vue' /* webpackChunkName: "components/bin-container" */).then(c => c.default || c)
export const LazyForm = import('../../components/Bin/Form.vue' /* webpackChunkName: "components/form" */).then(c => c.default || c)
export const LazyProductsList = import('../../components/Bin/ProductsList.vue' /* webpackChunkName: "components/products-list" */).then(c => c.default || c)
export const LazySuccess = import('../../components/Bin/Success.vue' /* webpackChunkName: "components/success" */).then(c => c.default || c)
