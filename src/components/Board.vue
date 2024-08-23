<template>
    <!-- list qoshishga -->
    <div class="board">
        <div>
            <div class="add-list" v-if="newListModal != true" @click="newListModal = !newListModal">
                +Add another list
            </div>
            <div class="add-list-modal" v-if="newListModal == true">
                <input v-model="newListName" placeholder="New list name" @keyup.enter="addList" />

                <div class="modal-btns">
                    <blue-btn @click="addList">Add List</blue-btn>
                    <close-modal @click="newListModal = !newListModal"> </close-modal>
                </div>

            </div>
        </div>

        <!-- listlar  -->
        <transition-group name="list">
            <div v-for="list in todo.boardData" :key="listId">
                <List :list="list" @removeList="removeList(list.listId)"
                    @remove-item="removeItemFromList(list.listId, $event)" />
            </div>
        </transition-group>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBoardStore } from '@/stores/boardData.js'
import List from '@/components/List.vue'

// Получаем данные из магазина
const todo = useBoardStore();  // todo -- ekzemplyar useBoardStore()

const newListName = ref('')
const newListModal = ref(false)

// const list = tofo.getList();  // storeda sort qivolish bu qulay 
// const lidt2 = computed(()=>{
//     return todo.list.filters(v=>!v.deleted); // olish va sort qilish bir hil 
// })   
 

function addList() {
    if (newListName.value !== '') {
        todo.addNewList(newListName.value)
        newListName.value = ''
    }
}
//task qoshish

//task ochirish
// function removeItemFromList(listId, id) {
//     todo.deleteTask(listId, id);
//     console.log('task==id' + id)
// }

//list ochirish

</script>

<style scoped>
/* vue3  spisok uchun animatsiaysi  ========================*/
.list-move,
/* применять переход к движущимся элементам */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* убедитесь, что удаляющиеся элементы выведены из потока, чтобы 
анимации перемещения могли быть рассчитаны правильно. */
.list-leave-active {
    position: absolute;
}

/* vue3  spisok uchun animatsiaysi ======================== */

.board {
    padding: 15px;
    display: flex;
    gap: 20px;
    overflow-x: scroll;
}

.board::-webkit-scrollbar {
    display: none;
}

input {
    padding: 10px;
    height: fit-content;
}

.add-list {
    cursor: pointer;
    width: 300px;
    font-weight: 600;
    font-size: 16px;
    color: black;
    background: rgba(128, 128, 128, 0.444);
    padding: 8px;
    border-radius: 6px;

}

.add-list-modal {
    font-size: 16px;
    background: #f1f2f4;
    width: 300px;
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

}

.add-list-modal>input {
    width: 100%;
    outline: none;
    margin-bottom: 8px;
    padding: 6px 12px;
    overflow: hidden;
    border-radius: 4px;
    color: #081327;
    font-weight: 550;
    resize: none;
    border: 2px solid rgb(61, 76, 234);
    overflow-wrap: break-word;
}


.modal-btns {

    display: flex;
    align-items: center
}
</style>