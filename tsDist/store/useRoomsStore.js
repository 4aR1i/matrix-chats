import { ref } from 'vue';
import { defineStore } from 'pinia';
import * as sdk from 'matrix-js-sdk';
export const useRoomsStore = defineStore('rooms', () => {
    const rooms = ref(null);
    const client = ref(null);
    async function loadRooms() {
        const baseUrl = localStorage.getItem('matrix_homeserver');
        const accessToken = localStorage.getItem('matrix_access_token');
        const userId = localStorage.getItem('matrix_user_id');
        if (!baseUrl || !accessToken || !userId) {
            console.error('User not authenticated');
            return;
        }
        client.value = sdk.createClient({
            baseUrl,
            accessToken,
            userId,
        });
        try {
            await client.value.startClient({ initialSyncLimit: 10 });
            client.value.once(sdk.ClientEvent.Sync, (state) => {
                if (state === 'PREPARED' && client.value) {
                    const allRooms = client.value.getRooms().map((room) => {
                        const id = room.roomId;
                        const name = room.name;
                        const unreadCount = room.getUnreadNotificationCount();
                        const avatarEvent = room
                            .getLiveTimeline()
                            .getEvents()
                            .find((event) => event.getType() === 'm.room.avatar');
                        const avatarUrl = avatarEvent
                            ? client.value?.mxcUrlToHttp(avatarEvent.event.content?.['url'])
                            : null;
                        const events = room.getLiveTimeline().getEvents();
                        const lastEvent = events.length ? events[events.length - 1] : null;
                        const lastEventDate = lastEvent
                            ? new Date(lastEvent.localTimestamp).toLocaleString()
                            : 'Событий нет';
                        return {
                            id,
                            name,
                            unreadCount,
                            lastEvent: lastEventDate,
                            avatar: avatarUrl,
                        };
                    });
                    rooms.value = allRooms?.sort((a, b) => b.unreadCount - a.unreadCount) ?? null;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    return { rooms, loadRooms };
});
