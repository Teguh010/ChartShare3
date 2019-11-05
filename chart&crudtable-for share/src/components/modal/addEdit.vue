<template>
        <q-card >
          
          <q-card-section>
            <div class="text-h6">Tambah User Baru!!</div>
          </q-card-section>

          <q-card-section class="q-gutter-sm ">
            <div class="row q-col-gutter-xs">
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled  v-model="editedItem.id" label="ID"></q-input>
              </div>
              <div class="col-12 col-md-6 col-sm-6" >
                <q-input type="number" filled v-model="editedItem.noHP" label="NO HP"></q-input>
                </div>
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled v-model="editedItem.name" label="Nama User"></q-input>
              </div>
                <div class="col-12 col-md-6 col-sm-6" >
                <q-input type="number" filled v-model="editedItem.levelUser" label="Level User"></q-input>
                </div>
                <div class="col-12 col-md-6 col-sm-6" >
                <q-select filled input-debounce="0" :options="options" v-model="editedItem.tipeUser" label="tipeUser"></q-select>
                 </div>
                <div class="col-12 col-md-6 col-sm-6">
                <q-input filled v-model="editedItem.keterangan" label="keterangan"></q-input>
                 </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup @click="addRow" ></q-btn>
          </q-card-actions>
           </q-card>
</template>

<script>
import { uid } from 'quasar'

const stringOptions = [
  'Admin', 'Marketing', 'Billing']


export default {
    data () {
        return {
    
      options: stringOptions,
      dense: false,
    
    editedIndex: -1,
      editedItem: {
        id: "",
        noHP: "",
        name: "",
        levelUser: "",
        tipeUser: "",
        keterangan: "",
      },
      defaultItem: {
        id: "",
        noHP: "",
        name: "",
        levelUser: "",
        tipeUser: "",
        keterangan: ""
        }
    }
   
},
 methods: {
    addRow() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      } else {
        this.data.push(this.editedItem);
      }
      this.close()
    },
    deleteItem(item) {
      const index = this.data.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.data.splice(index, 1);
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  }
}
</script>