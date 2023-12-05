<template>
    <div>
        <client-only>
            <input class="w-full bg-white text-black text-sm border-gray-300 border-2 rounded-lg p-3 placeholder-gray-600 focus:outline-none"
                   :maxlength="max"
                   :placeholder="placeholder"
                   @focus="isFocused = true"
                   @blur="isFocused = false"
                   :class="{'border-gray-600 border-2 transition-all' : isFocused}, {'border-red-500' : error}"
                   :type="inputType"
                   v-model="inputComputed"       
                   autocomplete="off"
            />
        </client-only>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:input'])

const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error'])
const { input, placeholder, max, inputType, error } = toRefs(props)

let isFocused = ref(false)

const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})
</script>