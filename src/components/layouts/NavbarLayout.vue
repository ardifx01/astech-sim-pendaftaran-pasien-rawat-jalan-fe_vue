<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
    CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavItem,
    CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider,
    CButton
} from '@coreui/vue'

const router = useRouter()
const route = useRoute()

// State for mobile menu toggle
const visible = ref(false)

// Navigation functions
const navigateTo = (path) => {
  router.push(path)
  visible.value = false // Close mobile menu after navigation
}

// Check if current route is active
const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

<template>  
<CNavbar expand="lg" color-scheme="dark" class="bg-dark">
  <CContainer fluid>
    <CNavbarBrand href="#">SIM</CNavbarBrand>
    <CNavbarToggler aria-label="Toggle navigation" :aria-expanded="visible" @click="visible = !visible"/>
    <CCollapse class="navbar-collapse" :visible="visible">
      <CNavbarNav>
        <CNavItem>
         <CNavLink> <RouterLink :to="{ name: 'PatientIndex' }">Patient</RouterLink></CNavLink>
        </CNavItem>
        <CDropdown variant="nav-item" :popper="false">
          <CDropdownToggle color="secondary">Kunjungan</CDropdownToggle>
          <CDropdownMenu>
              <CDropdownItem href="#"><RouterLink :to="{name: 'VisitIndex'}">Data Kunjungan</RouterLink></CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </CNavbarNav>
    </CCollapse>
  </CContainer>
</CNavbar>
</template>