<script setup>

import {reactive} from "vue";
import {CButton, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CInputGroup, CInputGroupText} from "@coreui/vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import axios from "axios";
import Swal from "sweetalert2";
import router from "@/router";

const apiUrl = import.meta.env.VITE_API_URL
const formUrl = apiUrl + "/patients"
const form = reactive({
    name: '',
    nik: '',
    gender: 'L',
    birth_date: '',
    phone: '',
    address: '',
})

function submit() {
    axios.post(formUrl, form).then(response => {
        router.push('/patients')
        Swal.fire({
            title: 'Success',
            text: 'Data berhasil ditambahkan',
            icon: 'success'
        })
    }).catch(error => {
        router.push('/patients')
        Swal.fire({
            title: 'Error',
            text: 'Data gagal ditambahkan' + error.response.data.message,
            icon: 'error'
        })
    })
}
</script>

<template>
    <CForm :action="formUrl" class="row g-3" @submit.prevent="submit">
        <CCol md="6">
            <CFormLabel>Nama</CFormLabel>
            <CFormInput v-model="form.name" placeholder="Name"/>
        </CCol>
        <CCol md="6">
            <CFormLabel>NIK</CFormLabel>
            <CFormInput v-model="form.nik" placeholder="Harus 16 digit" maxlength="16" minlength="16"/>
        </CCol>
        <CCol md="6">
            <CFormLabel>Jenis Kelamin</CFormLabel>
            <CFormSelect v-model="form.gender">
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
            </CFormSelect>
        </CCol>
        <CCol md="6">
            <CFormLabel>Tanggal Lahir</CFormLabel>
            <VueDatePicker v-model="form.birth_date" max-date="today" :enable-time-picker="false"/>
        </CCol>
        <CCol md="6">
            <CFormLabel>No. HP</CFormLabel>
            <CInputGroup>
                <CInputGroupText id="basic-addon1">62</CInputGroupText>
                <CFormInput placeholder="8xxxxxx" aria-label="Username" v-model="form.phone" aria-describedby="basic-addon1"/>
                
            </CInputGroup>
        </CCol>
        <CCol md="6">
            <CFormLabel>Alamat</CFormLabel>
            <CFormTextarea v-model="form.address" placeholder="Alamat"/>
        </CCol>
        <CCol md="6">
            <CButton type="submit" class="btn btn-primary">Tambah</CButton>
        </CCol>
    </CForm>
</template>

<style scoped>
</style>