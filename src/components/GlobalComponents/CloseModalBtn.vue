<template>
    <div>
        <button class="close-modal">
            <slot> </slot>
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 469.404 469.404"
                xml:space="preserve">
                <g>
                    <path d="M310.4,235.083L459.88,85.527c12.545-12.546,12.545-32.972,0-45.671L429.433,9.409c-12.547-12.546-32.971-12.546-45.67,0
L234.282,158.967L85.642,10.327c-12.546-12.546-32.972-12.546-45.67,0L9.524,40.774c-12.546,12.546-12.546,32.972,0,45.671
l148.64,148.639L9.678,383.495c-12.546,12.546-12.546,32.971,0,45.67l30.447,30.447c12.546,12.546,32.972,12.546,45.67,0
l148.487-148.41l148.792,148.793c12.547,12.546,32.973,12.546,45.67,0l30.447-30.447c12.547-12.546,12.547-32.972,0-45.671
L310.4,235.083z" />
                </g>
            </svg>

        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.close-modal {
    cursor: pointer;
    
    border: none;
    outline: none;
    background: transparent;
    align-items: center;
}
</style>