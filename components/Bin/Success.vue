<template>
  <div class="container__bin_success">
    <img
      class="success__icon"
      src="../../assets/icons/ok.svg"
    />
    <span class="success__title">
      Заявка успешно отправлена
    </span>
    <span class="success__description">
      Вскоре наш менеджер свяжется с Вами.
    </span>
  </div>
</template>

<style>
.success__icon {
  align-self: center;
  width: 80px;
  height: 80px;
}
.success__title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #000000;
}
.success__description {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #59606D;
}
</style>