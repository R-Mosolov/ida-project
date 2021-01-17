<template>
  <div class="container__bin">
    <div class="container__bin_position">
      <span class="position__title">
        Корзина
      </span>
      <img
        class="position__close"
        src="../../assets/icons/close.svg"
      />
    </div>
    <Form />
    <div class="container__success_position">
      <!-- <Success /> -->
    </div>
  </div>
</template>

<script>
import Form from './Form';
import Success from './Success';

export default {}
</script>

<style>
.container__bin {
  position: fixed;
  width: 460px;
  height: 1077px;
  left: 980px;
  top: 0px;
  background: #FFFFFF;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
}
.container__bin_position {
  display: flex;
}
.position__title {
  padding-left: 48px;
  margin-top: 52px;
  width: 118px;
  height: 41px;
  left: 1028px;
  top: 52px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  display: flex;
  align-items: flex-end;
  color: #000000;
}
.position__close {
  position: absolute;
  margin-top: 65px;
  margin-left: 345px;
  padding-left: 48px;
  cursor: pointer;
}
.container__success_position {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 460px;
}
</style>