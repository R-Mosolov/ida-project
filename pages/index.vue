<template>
  <div class="main">
    <Header />
    <main class="main__content data__container">
      <div class="main__content_meta">
        <h1 class="meta__content-title">
          Каталог
        </h1>
        <span class="meta__content-sorter">
          Сортировать по:
          <span class="meta__content-sorter_variants">
            цене
            <img
              class="variants__arrow"
              src="../assets/icons/bottom-arrow.svg"
            />
          </span>
        </span>
      </div>
      <div class="main__content_container">
        <Sidebar />
        <div class="container__content">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <BinContainer />
      </div>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import BinContainer from '../components/Bin/BinContainer';

export default {}
</script>

<style>
/* GLOBAL STYLES */
.data__container {
  margin-left: auto;
  margin-right: auto;
  width: 1238px;
}

/* LOCAL STYLES */

/* Meta styles */
.main__content_title {
  position: absolute;
  width: 111px;
  height: 41px;

  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;

  color: #1F1F1F;
}
.main__content_meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 24px;
}
.meta__content-sorter {
  cursor: pointer;
}
.variants__arrow {
  width: 10px;
  height: 5px;
  left: 1347px;
  top: 118px;
}

/* Menu styles */
.main__content_container {
  display: flex;
}
.container__sidebar {
  height: 100vh;
  min-width: 161px;
}

/* Content styles */
.container__content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
