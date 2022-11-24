<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">FixApp Technicians</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" :href="'/technician/'+this.$route.params.id+'/appointment'"> My appointments</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" :href="'/technician/'+this.$route.params.id+'/myappliance'">My Tools</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" :href="'/technician/'+this.$route.params.id+'/profile'">My Profile</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" :href="'/'">LogOut</a>
                </li>    
            </ul>
            </div>
        </div>
</nav>
</template>

<script>

export default {
    data() {
        return {
            
            
        }
    }
}

</script>

<style>
   
</style>