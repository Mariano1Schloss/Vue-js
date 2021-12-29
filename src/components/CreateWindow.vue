<template>
    <div class="container form">
        <br/>
    <h4>Add a new window</h4>

    <br />
    <form @submit.prevent="addWindow">
      
      <input
        type="text"
        placeholder="enter window name"
        v-model="formData.name"
        class="form-control"
      />
      <br />
        <input
        type="text"
        placeholder="enter window status"
        v-model="formData.status"
        class="form-control"
      />
      <br />
      Room : 
      <select v-model="selected" @click="getRooms" @change="getRoomId">
    <option v-for="room in rooms" v-bind:key="room.id" >
    {{ room.name }}
    </option>
    </select>
    <br>
    <br/>
      <button type="submit" class="d-grid gap-2 col-6 mx-auto btn btn-dark">
        create
      </button>

    </form>
    </div>
    
</template>

<script>
import axios from "axios";
import { API_HOST } from "../config";


export default {
    data () {
        return {
            formData : {
                name : "",
                roomId : "",
                status : ""
            },
            rooms:[],
            selected:"",
            id :"0"
        };
    },
    methods : {
        addWindow () {
            // this.id=getRoomId;
            axios
            .post (`${API_HOST}/api/windows`,{   
                                              "id": null,
                                              "name": this.formData.name,
                                              "roomId": this.id,
                                              "roomName": null,
                                              "windowStatus": this.formData.status
                                              })
            .then ((response)=>{
                console.log(response.data);
                
            })
            .catch((error)=>{
                console.log(error,error.response);
            });
        },
      getRooms () {
        axios
        .get(`${API_HOST}/api/rooms`)
        .then ((response)=>{
                console.log(response.data);
                this.rooms=response.data;
            })
        .catch((error)=>{
                console.log(error,error.response);
            });
      },
      getRoomId(){
        console.log(this.rooms.find(room=>room.name===this.selected).id);
        this.id=this.rooms.find(room=>room.name===this.selected).id;
      }
      
    },
    
};
</script>
