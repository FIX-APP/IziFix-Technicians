<template>
    <div class="content flex flex-column align-items-center">
  
      <div>
          <pv-datatable :value="appointments" responsiveLayout="scroll">
              <template #header>
                  <div class="table-header">
                      Appointments
                      <Button icon="pi pi-refresh" ></Button>
                  </div>
              </template>
              <pv-column field="user.name" header="Client"></pv-column>
              <pv-column field="technician.name" header="Technician"></pv-column>
              <pv-column field="user.address" header="Address"></pv-column>
              <pv-column header="Options">
                <template #body="slotProps">
                    <pv-button label="Delete" icon="pi pi-trash" @click="deleteAppointment(slotProps.data.id)"/>
                </template>
            </pv-column>
          </pv-datatable>
      </div>
    </div>
  </template>
  
  <script>
  import { appointmentService } from '../../core/services/appointmentService';
  export default{
      components:{
      },
      data(){
          return{
              appointments:[]
          }
      },
      services:null,
      created(){
          this.services=new appointmentService();
      },
      mounted(){
          this.services.getByUserId(this.$route.params.id).then(value=>{

              this.services.getAllAppointments().then(value=>{
            value.data.forEach(element => {
                if(element.technician.id==this.$route.params.id){
                    this.appointments.push(element);
                }
            });
        })
          });
  
          
      },
      methods:{
        deleteAppointment(id){
            this.services.delete(id);
            location.reload();
        }
      }
  }
  </script>
  
  <style scoped>
    div{
        width: 100vh;
    }
  </style>