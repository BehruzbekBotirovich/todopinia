import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useBoardStore = defineStore('BoardStore', () => {
    const boardData = ref([
        {
            listName: 'list1',
            listId: 1,
            listData: [
                { text: 'buy bread', id: '1' },
                { text: 'go shop', id: '2' },
                { text: 'make', id: '3' },
            ],
        },
        {
            listName: 'list2',
            listId: 2,
            listData: [
                { text: 'kmkasd', id: '6' },
                { text: 'dasd', id: '7' },
                { text: 'sdas', id: '8' },
            ],
        },
    ]);

    const loadFromLocalStorage = () => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            boardData.value = JSON.parse(storedItems);
        }
    };
    loadFromLocalStorage();  // localstoragedan olish 
      
    const saveToLocalStorage = () => { // localga save 
        localStorage.setItem('items', JSON.stringify(boardData.value));
    };

    const addNewList = (text) => {
        boardData.value.push({ listName: text, listId: Date.now(), listData: [] });
        saveToLocalStorage();
    };

    const addNewTask = (listId, item) => {
        boardData.value.forEach((list) => {
            if (list.listId === listId) {
                list.listData.push({ text: item, id: Date.now() });
            }
        });
        saveToLocalStorage();
    };

    const deleteTask = (listId, id) => {
        boardData.value.forEach((list) => {
            if (list.listId === listId) {
                list.listData = list.listData.filter((el) => el.id !== id);
            }
        });
        saveToLocalStorage();
    };

    const deleteList = (listId) => {
        boardData.value = boardData.value.filter((el) => el.listId !== listId);
        saveToLocalStorage();
    };


    return {
        boardData,
        addNewList,
        addNewTask,
        deleteTask,
        deleteList,
    };
});
