<template>
    <div class="list">
        <div style="display: flex; align-items: center;">
            <input v-model="list.listName" class="list-name"> <!--list nomi-->
            <button @click=removeList(list.listId) class="delete-list">
                <svg class="icon" fill="#2c3e50" width="20px" height="20px" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                </svg>
            </button>
        </div>

        <ul>
            <TransitionGroup name="list" tag="ul">
                <li v-for="task in list.listData" :key="list.listData.id" class="task">
                    <input class="task-item" v-model="task.text" :disabled="!task.editing" @blur="stopEditing(task)"
                        ref="taskInput" />
                    <!-- input.value v-model bilan ulangan -->
                    <button @click="edit(task)" class="edit"> <svg width="18px" height="18px" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Edit / Edit_Pencil_Line_01">
                                <path id="Vector"
                                    d="M4 20.0001H20M4 20.0001V16.0001L12 8.00012M4 20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"
                                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg></button>
                    <button @click="removeItem(list.listId, task.id)" class="remove-item">
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="13px" height="13px"
                            viewBox="0 0 469.404 469.404" xml:space="preserve">
                            <g>
                                <path d="M310.4,235.083L459.88,85.527c12.545-12.546,12.545-32.972,0-45.671L429.433,9.409c-12.547-12.546-32.971-12.546-45.67,0
            L234.282,158.967L85.642,10.327c-12.546-12.546-32.972-12.546-45.67,0L9.524,40.774c-12.546,12.546-12.546,32.972,0,45.671
            l148.64,148.639L9.678,383.495c-12.546,12.546-12.546,32.971,0,45.67l30.447,30.447c12.546,12.546,32.972,12.546,45.67,0
            l148.487-148.41l148.792,148.793c12.547,12.546,32.973,12.546,45.67,0l30.447-30.447c12.547-12.546,12.547-32.972,0-45.671
            L310.4,235.083z" />
                            </g>
                        </svg>
                    </button>
                </li>
            </TransitionGroup>
        </ul>

        <button class="add-card" @click="showModal = !showModal" v-if="showModal == false"> <span>+Add a Card</span>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5 9H12C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7H5C4.71667 7 4.47917 7.09583 4.2875 7.2875C4.09583 7.47917 4 7.71667 4 8C4 8.28333 4.09583 8.52083 4.2875 8.7125C4.47917 8.90417 4.71667 9 5 9ZM5 6H12C12.2833 6 12.5208 5.90417 12.7125 5.7125C12.9042 5.52083 13 5.28333 13 5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4H5C4.71667 4 4.47917 4.09583 4.2875 4.2875C4.09583 4.47917 4 4.71667 4 5C4 5.28333 4.09583 5.52083 4.2875 5.7125C4.47917 5.90417 4.71667 6 5 6ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V2H2V14Z"
                    fill="#49454E" />
            </svg> </button>
        <div class="input-card-modal" v-if="showModal">
            <input v-model="newTask" placeholder="Enter new task" class="task-input"
                @keyup.enter="addItem(list.listId)" />
            <div class="modal-btns">

                <blue-btn @click="addItem(list.listId)" class="add-item">Add Task</blue-btn>
                <close-modal @click="showModal = !showModal"> </close-modal>
            </div>


        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import { useBoardStore } from '@/stores/boardData.js'

const todo = useBoardStore();  // todo -- ekzemplyar useBoardStore()

const props = defineProps({
    list: {
        type: Object,
        required: true
    }
})

const showModal = ref(false)
const newTask = ref('')

const emit = defineEmits(['add-item', 'remove-item']);



function addItem(listId) {
    if (newTask.value.trim()) {
        todo.addNewTask(listId, newTask.value.trim())
        newTask.value = '';
    }
}



// function removeItem(id) {
//     emit('remove-item', id);  child--> parent--> storega  ??? ❌
// }

function removeItem(listId, id) {  //chil--> storega togri yuborish  ✅
    todo.deleteTask(listId, id);
}

function removeList(listId) {
    todo.deleteList(listId)
}


function edit(task) {
    task.editing = true;
    this.$refs.taskInput.focus()
}

function stopEditing(task) {
    task.editing = false;
}


</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list {
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    background: #f1f2f4;
    width: 300px;
    padding: 14px;
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.list::-webkit-scrollbar {
    width: 4px;
}

.list::-webkit-scrollbar-track {
    background: transparent
}

.list::-webkit-scrollbar-thumb {
    background: #1a1776;
    border-radius: 2px;
}



.delete-list {
    border: none;
    cursor: pointer;
}

.delete-list:hover .icon {
    fill: #1084f0;
}

/* task inputi  */
.task-item {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    font-size: 14px;
    border-radius: 6px;
    line-height: 1.5;
    padding: 5px 10px;
    transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
    color: rgb(14, 14, 16);
    background: #ffffff9c;
    display: block;
    height: 36px;
    border: 2px solid transparent;
    outline: none;
    transition: 100ms linear;
}

.task-item:hover {
    background: whitesmoke;
    border: 2px solid #1084f0bc;
}

.task-item:focus {
    border: 2px solid #1084f0;
    background: #fff;
}

ul {
    margin-left: 0;
    /* Отступ слева в браузере IE и Opera */
    padding-left: 0;
    /* Отступ слева в браузере Firefox, Safari, Chrome */
}

/* task orab turgan li */
.task {
    width: 100%;
    display: flex;
    gap: 5px;
    list-style-type: none;
    margin-bottom: 10px;
    position: relative;
}

.remove-item {
    display: none;
    align-items: center;
    position: absolute;
    padding: 4px;
    border-radius: 50%;
    border: none;
    outline: none;
    top: 8px;
    cursor: pointer;
    right: 5px;
}

.task:hover .remove-item {
    display: flex;
}

.edit {
    cursor: pointer;
    position: absolute;
    display: none;
    align-items: center;
    position: absolute;
    padding: 2px;
    border-radius: 50%;
    border: none;
    outline: none;
    top: 7px;
    right: 28px;
}

.task:hover .edit {
    display: flex;
}

.list-name {
    width: 100%;
    border-radius: 4px;
    border: 2px solid transparent;
    background: transparent;
    font-size: 18px;
    outline: none;
    padding: 4px;
}

.list-name:focus {
    background: white;
    border: 2px solid blue;
}

.task-input {
    outline: none;
    width: 100%;
    padding: 8px 12px 20px 8px;
    overflow: hidden;
    overflow-y: auto;
    border: none;
    border-radius: 8px;
    background-color: var(--ds-surface-raised, #ffffff);
    box-shadow: var(--ds-shadow-raised, 0px 1px 1px #091e4240, 0px 0px 1px #091e424f);
    resize: none;
    overflow-wrap: break-word;
    margin-bottom: 8px;
}


.add-card {
    width: 100%;
    padding: 8px;
    background: transparent;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    outline: none;
    margin-bottom: 6px;
    color: rgba(18, 18, 18, 0.847);
}

.add-card:hover {
    background: #5062818a;
}

.add-card>span {
    font-weight: 600;
}

.modal-btns {
    display: flex;
    align-items: center;
}

.close-modal {
    cursor: pointer;
    margin-top: 3px;
    margin-left: 8px;
    padding: 2px 4px;
    border: none;
    outline: none;
    background: transparent;
    align-items: center;
}
</style>