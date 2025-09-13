<script setup>

import {CCard, CCardBody, CCardHeader, CCardTitle} from "@coreui/vue";
import DatatableAjax from "@/components/DatatableAjax.vue";
import moment from 'moment'

const apiUrl = import.meta.env.VITE_API_URL
const ajaxUrl = apiUrl + "/visits"
const columns = [
    { data: 'DT_RowIndex', searchable: false, title: 'No', orderable: false },
    {data: 'patient_name', title: 'Pasien'},
    {
        data: 'visit_date', render: function (data) {
            return data ? moment(data).format('dddd, DD MMMM YYYY') : '-';
        }, searchable: false, title: 'Tanggal Kunjungan'
    },
    {data: 'department', title: 'Departemen'},
    {data: 'doctor_name', title: 'Dokter'},
    {
        data: 'complaint', render: function (data) {
            if (data.length > 15) {
                return data.substring(0, 15) + '...';
            } else {
                return data;
            }
        }, title: 'Keluhan'
    },
    {title: 'Aksi', render: '#action', searchable: false, orderable: false},
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
            <DatatableAjax :ajaxUrl="ajaxUrl" :columns="columns"/>
        </CCardBody>
    </CCard>

</template>