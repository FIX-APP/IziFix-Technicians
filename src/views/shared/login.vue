<template>
 <body>
        <div class="flex flex-row align-items-center justify-content-center w-full">
    
            <div class="container" flex ="align-items-center">
    
               
    
                <pv-card class="login-card m-auto text-center border-round-sm flex align-items-center justify-content-center">
    
                        <template #title>
                            <img class="imgLogo" src="@/assets/img/text-logos/logo_repair.png" alt="logo_repair.png">
                        </template>
    
                        <template #content>
                            <div class="form-container flex flex-column gap-5 text-center" >
                                <div class="first-part flex flex-column justify-content-center w-9 m-auto gap-3 ">
                                    <pv-input-text class="input-email flex justify-content-center" type="text" v-model="email" :placeholder="$t('Email')" />
                                    <pv-input-text class="input-password flex justify-content-center" type="password" v-model="password" :placeholder="$t('Password')" toggleMask  />
                                    <pv-button class="log-button flex justify-content-center" @click="login()">{{$t("LOG IN")}}</pv-button>
                                </div>
                                <div class="second-part flex flex-column gap-4">
                                    <p>{{$t("Don't have an account?")}} <span class="sign-up text-blue-600" @click="redirectToRegister">{{$t("Sign Up Now!")}}</span></p>
                                    <p><span><a class="about text-blue-600" href="https://fix-app.github.io/landing-page/" target="_blank">{{$t("About")}}</a></span></p>
                                </div>
                            </div>
                        </template>
                </pv-card>
    
            </div>
    
        </div>
    
    </body>
</template>
<script>
import { userService } from '../../core/services/userService';
    
    export default {
        data(){
            return{
                email:"",
                password:""
            }
        },
        services:null,
        created(){
            this.services=new userService();
        },
        methods: {   
            async login(){
                var is_log=0;

                await this.services.logIn(this.email,this.password).then((value)=>{
                    is_log=value;
                });
                console.log("id de usuario encontrado en login",is_log);
                if(is_log!=0){
                    await console.log("redireccionando a client");
                    this.$router.push("technician/"+is_log)
                    
                    
                }
                
    
            },
            redirectToRegister(){
                this.$router.push("/register")
            }
        }, 
            
        
    }
</script>
<style>
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
       
        display: flex;
        min-height: 100vh;
        min-width: 100vh;
       
    }
    .about{
      text-decoration: none;
    }
    .imgBx{display: none;}
    .imgLogo{width: 40%;}
    .login-card{box-shadow: 5px 10px 8px #888888;width: 80%;}
    .input-email,.input-password{background: #FAFAFA;}
    .log-button{transition: all 0.5s;cursor: pointer;box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);}
    .log-button{cursor: pointer;transition: 0.5s;}
    .log-button:after {content: '??';position: absolute;opacity: 0;  top: 14px;right: -20px;transition: 0.5s;}
    .log-button:hover{padding-right: 24px;padding-left:8px;}
    .log-button:hover:after {opacity: 1;right: 10px;}
    .sign-up:hover ,.about:hover{
        cursor: pointer;
        font-weight: bold;
        transition: 0.1s;
    }
    
    @media(min-width:580px){
        .login-card{width: 100%;}
    }
    @media(min-width: 968px){
        .imgBx{display: flex; width: 50%; height: 50%;}
        .login-card{width: 100%; height: 100%;}
    }
</style>