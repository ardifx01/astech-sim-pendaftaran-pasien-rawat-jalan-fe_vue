## SIM Pendaftaran Pasien Rawat Jalan — Frontend

Aplikasi frontend untuk sistem pendaftaran pasien rawat jalan. Dibangun dengan Vue 3 (Vite), menggunakan CoreUI untuk UI, Vue Router untuk navigasi, serta Pinia untuk state management. Aplikasi ini dibuat dengan tujuan memenuhi mini project sebagai recruitement untuk PT Alfatih Solusindo (Astech).

## 🚀 Link Deploy  
Untuk mempermudah, aplikasi bisa diakses di:  
🔗 [Aplikasi Pasien Rawat Jalan](https://vue.muammar.web.id/patients)


### Fitur Utama

- Manajemen Pasien: daftar pasien, tambah pasien baru
- Manajemen Kunjungan: daftar kunjungan, tambah kunjungan
- Navbar responsif berbasis CoreUI
- Form & Validasi (Vuelidate)
- Datepicker (Vue DatePicker)
- Notifikasi (SweetAlert2)
- DataTables untuk tabel interaktif

---

### Fitur Belum Terpenuhi

- Manajemen Pasien: edit pasien, hapus pasien
- Manajemen Kunjungan: tambah pasien, filter by name di index, lihat detail kunjungan
- Validasi client side

Beberapa fitur diatas belum terpenuhi karena mini project menggunakan JQuery sebagai sudah selesai dan waktunya tidak cukup.

## Persyaratan

- Node.js: ^20.19.0 atau >=22.12.0 (lihat `package.json > engines`)
- npm (versi mengikuti Node)

## Instalasi

```bash
npm install
```

## Konfigurasi Envinroment

Buat file `.env` di root proyek untuk konfigurasi base URL API:

```bash
# Salin env
copy .env-example .env   # Windows PowerShell
```

Aplikasi menggunakan Axios dengan baseURL dari `VITE_API_URL` (lihat `src/main.js`).

## Menjalankan Aplikasi (Development)

```bash
npm run dev
```

Vite akan menampilkan alamat URL (mis. `http://localhost:5173`).

## Build Production

```bash
npm run build
npm run preview
```

`preview` akan men-serve hasil build secara lokal untuk pengujian.

---

## Stack & Dependency Utama

- Vue 3 + Vite
- Vue Router
- Pinia
- CoreUI Vue + CoreUI CSS
- Axios
- Vuelidate (`@vuelidate/core`, `@vuelidate/validators`)
- Vue DatePicker (`@vuepic/vue-datepicker`)
- SweetAlert2
- DataTables untuk Vue 3

Semua dependency dapat dilihat di `package.json`.

---

## Struktur Proyek Ringkas

```
src/
  assets/
    base.css
    main.css
  components/
    layouts/
      NavbarLayout.vue
    PatientForm.vue
  views/
    HomeView.vue
    patients/
      PatientView.vue
      PatientCreate.vue
    visits/
      VisitView.vue
      VisitCreate.vue
  router/
    index.js
  stores/
    counter.js
  App.vue
  main.js
```

- `src/main.js`: inisialisasi aplikasi, impor CSS CoreUI, registrasi komponen global (Vue DatePicker), set `axios.defaults.baseURL`.
- `src/App.vue`: kerangka utama aplikasi, render navbar dan `<RouterView />`.
- `src/router/index.js`: definisi rute halaman (patients, visits, dll.).
- `src/components/layouts/NavbarLayout.vue`: komponen navbar berbasis CoreUI.

---

## Default Route

- `/` → redirect ke `/patients`
- `/patients` → daftar pasien
- `/patients/create` → tambah pasien
- `/visits` → daftar kunjungan
- `/visits/create` → tambah kunjungan
