<template>
    <div>
        <button>
            <slot> </slot>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
    cursor: pointer;
    outline: 0;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 4px 10px;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

button:hover {
    border-radius: .25rem;
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
}
</style>