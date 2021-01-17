<template>
  <div class="main__content_product">
    <div class="product__rating">
      <img
        class="star"
        src="../assets/icons/star.svg"
      />
      <span class="product__rating_mean">
        4.5
      </span>
    </div>
    <img
      class="product__bin"
      src="../assets/icons/bin.svg"
    />
    <img
      class="product__preview"
      src="../assets/product-sample.png"
    />
    <h3 class="product__title">
      Рюкзак Louis Vuitton Discovery
    </h3>
    <span class="product__price">
      150 000 ₽
    </span>
  </div>
</template>

<style>
.main__content_product {
  margin-bottom: 16px;
  width: 264px;
  height: 272px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.product__preview {
  margin-top: 18px;
  margin-left: 61px;
}
.product__title {
  margin-top: 16px;
  margin-left: 16px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #59606D;
}
.product__price {
  margin-left: 16px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  color: #1F1F1F;
}
.product__rating {
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
  width: 31px;
}
.product__rating_mean {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  color: #F2C94C;
  align-self: center;
}
.product__bin {
  position: absolute;
  margin-top: 18px;
  margin-left: 234px;
  width: 12px;
}
</style>