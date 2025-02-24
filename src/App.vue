<template>
  <div class="chats">
    <div class="chats__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.chats {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    width: calc(100% - 30px);
    max-width: 800px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 20px;

    &:has(.auth) {
      max-width: 400px;
    }
  }
}
</style>
