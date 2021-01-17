<template>
  <div class="container__bin_form">
    <span class="form__title">
      Оформить заказ
    </span>
    <br />
    <div class="form__container">
      <input
        class="form__field"
        placeholder="Ваше имя"
      />
      <input
        class="form__field"
        placeholder="Телефон"
      />
      <input
        class="form__field"
        placeholder="Адрес"
      />
    </div>
    <button class="form__button">
      Отправить
    </button>
  </div>
</template>

<style>
.form__title {
  margin-top: 32px;
  padding-left: 48px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: flex-end;
  color: #59606D;
}
.form__container {
  padding-left: 48px;
}
.form__field {
  margin-bottom: 16px;
  padding-left: 14px;
  width: 364px;
  height: 50px;
  background: #F8F8F8;
  border-radius: 8px;
  border: none;
}
.form__button {
  margin-left: 48px;
  width: 364px;
  height: 50px;
  color: white;
  background: #1F1F1F;
  border-radius: 8px;
  border: none;
}
</style>