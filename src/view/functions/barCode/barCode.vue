<template>
    <component :is="tag" ref="barcode" />
</template>


<script setup lang="ts">
import JsBarcode from "jsbarcode";
import { ref, onMounted } from "vue";

defineOptions({
    name: "Barcode"
});

const props = defineProps({
    tag: {
        type: String,
        default: "canvas"
    },
    text: {
        type: String,
        default: null
    },
    options: {
        type: Object,
        default() {
            return {};
        }
    },
    // type 相当于 options.format，如果 type 和 options.format 同时存在，type 值优先；
    type: {
        type: String,
        default: "CODE128"
    }
});

const barcode = ref(null);

onMounted(() => {
    const opt = { ...props.options, format: props.type };
    JsBarcode(barcode.value, props.text, opt);
});
</script>