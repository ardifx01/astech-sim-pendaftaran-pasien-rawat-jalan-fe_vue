<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';
import {CButton} from "@coreui/vue";
import {ref} from "vue";

DataTable.use(DataTablesCore);
const props = defineProps({
    columns: {
        type: Array,
        required: true
    },
    ajaxUrl: {
        type: String,
        required: true
    }
})
const table = ref(null)
const tableOptions = ref({
    serverSide: true,
    processing: true,
    ajax: {
        url: props.ajaxUrl,
        dataSrc: 'data'
    },
    columns: props.columns,
})


</script>

<template>
    <DataTable
        ref="table"
        :options="tableOptions"
        class="display table table-striped table-bordered"
    >
        <template #action="{row}">
            <CButton color="primary" size="sm">Edit</CButton>
        </template>
    </DataTable>
</template>


<style>
@import 'datatables.net-dt';
@import 'datatables.net-bs5';

</style>