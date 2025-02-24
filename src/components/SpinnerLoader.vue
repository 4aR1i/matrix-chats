<template>
  <div class="spinner__container">
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #8b302d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
