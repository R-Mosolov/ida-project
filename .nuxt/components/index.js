export { default as Bin } from '../../components/Bin.vue'
export { default as Header } from '../../components/Header.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as Sidebar } from '../../components/Sidebar.vue'
export { default as Sorter } from '../../components/Sorter.vue'

export const LazyBin = import('../../components/Bin.vue' /* webpackChunkName: "components/bin" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyProductCard = import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => c.default || c)
export const LazySidebar = import('../../components/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
export const LazySorter = import('../../components/Sorter.vue' /* webpackChunkName: "components/sorter" */).then(c => c.default || c)
