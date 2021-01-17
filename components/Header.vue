<template>
  <header class="main__header">
    <div class="main__header_container data__container">
      <span class="container__header-title">
        TestList
      </span>
      <img
        class="main__header_bin"
        src="../assets/bin.svg"
      />
    </div>
  </header>
</template>

<style>
.main__header {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
}
.main__header_container {
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container__header-title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  color: #59606D;
}
</style>