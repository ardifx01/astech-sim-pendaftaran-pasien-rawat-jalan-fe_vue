<script setup>

import {CButton, CCard, CCardBody, CCardHeader, CCardTitle} from "@coreui/vue";
import DatatableAjax from "@/components/DatatableAjax.vue";
import moment from 'moment'

const apiUrl = import.meta.env.VITE_API_URL
const ajaxUrl = apiUrl + "/patients"
const columns = [
    {data: 'DT_RowIndex', title: 'No', searchable: false, orderable: false},
    {data: 'name', title: 'Nama'},
    {data: 'nik', title: 'NIK'},
    {
        data: 'gender', render: function (data) {
            return data === 'L' ? 'Laki-laki' : 'Perempuan';
        }, searchable: false, title: 'Jenis Kelamin'
    },
    {
        data: 'birth_date', render: function (data) {
            return data ? moment(data).format('DD/MM/YYYY') : '-';
        }, searchable: false, title: 'Tanggal Lahir'
    },
    {data: 'phone', title: 'No. HP'},
    {data: 'address', title: 'Alamat'},
    {render: '#action', title: 'Action'}
]

</script>

<template>
    <CCard>
        <CCardHeader>
            <CCardTitle>
                Patient View
            </CCardTitle>
        </CCardHeader>
        <CCardBody>
            <CButton class="btn btn-primary text-white">
                <RouterLink :to="{name: 'PatientCreate'}" class="text-white">Tambah Pasien</RouterLink>
            </CButton>
            <DatatableAjax :ajaxUrl="ajaxUrl" :columns="columns"/>
        </CCardBody>
    </CCard>

</template>