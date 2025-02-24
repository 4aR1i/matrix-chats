<template>
  <section class="rooms">
    <SpinnerLoader v-if="isLoading" />
    <template v-else>
      <div class="rooms__sort">
        <button @click="sortBy('name')">Сортировать по названию</button>
        <button @click="sortBy('lastEvent')">Сортировать по последнему событию</button>
      </div>
      <ul class="rooms__list">
        <li class="rooms__headers">
          <span>Аватар</span>
          <span>Название</span>
          <span>Последнее событие</span>
          <span>Непрочитанных</span>
        </li>
        <li v-for="room in sortedRooms" :key="room.id" class="rooms__room">
          <span v-if="room.avatar">
            <img :src="room.avatar" alt="Avatar" />
          </span>
          <span v-else></span>
          <span>{{ room.name }}</span>
          <span>{{ room.lastEvent }}</span>
          <span>{{ room.unreadCount }}</span>
        </li>
      </ul>
    </template>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { SpinnerLoader } from '@/components';
import { useRoomsStore } from '@/store';

const roomsStore = useRoomsStore();
const isLoading = ref(false);
const sortByField = ref<'name' | 'lastEvent'>('lastEvent');
const rooms = computed(() => roomsStore.rooms);

const sortedRooms = computed(() => {
  return rooms.value?.toSorted((a, b) => {
    if (sortByField.value === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortByField.value === 'lastEvent') {
      return new Date(b.lastEvent).getTime() - new Date(a.lastEvent).getTime();
    }
    return 0;
  });
});

function sortBy(field: 'name' | 'lastEvent') {
  sortByField.value = field;
}

onMounted(async () => {
  try {
    isLoading.value = true;
    await roomsStore.loadRooms();
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.rooms {
  width: 100%;

  &__sort {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__sort button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #8b302d;
    color: white;
    border: none;
    border-radius: 5px;
    transition: 0.3s;
  }

  &__sort button:hover {
    background-color: #a94442;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__headers,
  &__room {
    display: grid;
    grid-template-columns: 10% 30% 40% 20%;
    padding: 5px 10px;
    column-gap: 10px;
  }

  &__headers span {
    text-align: start;
    font-weight: 700;
  }

  &__room {
    box-shadow: 0 0 2px #000;
    border-radius: 20px;

    & span:last-of-type {
      text-align: center;
    }

    & span:first-of-type {
      text-align: center;
      width: 100%;
      height: auto;
      border-radius: 50%;

      & img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
}
</style>
