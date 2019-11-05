<template>
   <div class="q-pa-sm q-gutter-sm">
    <q-table title="Treats" :data="data" :columns="columns" row-key="name"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      binary-state-sort>
      <template v-slot:top>
          <q-btn icon="person_add" color="primary" label="Tambah User" @click="show_dialog = true" ></q-btn>
          
        <div>
        <q-dialog v-model="show_dialog">
        <q-card >
          <q-card-section>
            <div class="text-h6">Tambah User Baru!!</div>
          </q-card-section>

          <q-card-section class="q-gutter-sm ">
            <div class="row q-col-gutter-xs">
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled  v-model="editedItem.id" label="ID"></q-input>
              </div>
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled v-model="editedItem.name" label="Nama User"></q-input>
              </div>
                <div class="col-12 col-md-6" >
                <q-input type="number" filled v-model="editedItem.levelUser" label="Level User"></q-input>
                </div>
                <div class="col-12 col-md-6" >
                <q-select filled input-debounce="0" :options="options" v-model="editedItem.tipeUser" label="tipeUser"></q-select>
                 </div>
                <div class="col-12 col-md-6">
                <q-input filled v-model="editedItem.keterangan" label="keterangan"></q-input>
                 </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup @click="addRow" ></q-btn>
          </q-card-actions>
           </q-card>
    </q-dialog>
          </div>
        
      </template>

      <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">{{ props.row.id }}</q-td>
            <q-td key="namaUser" :props="props">{{ props.row.name }}</q-td>
            <q-td key="levelUser" :props="props">{{ props.row.levelUser }}</q-td>
            <q-td key="tipeUser" :props="props">{{ props.row.tipeUser }}</q-td>
            <q-td key="keterangan" :props="props">{{ props.row.keterangan }}</q-td>
            <q-td key="actions" :props="props">
              <q-btn round class="q-mr-xs" color="blue" icon="edit"  @click="editItem(props.row)" size=sm ></q-btn>
              <q-btn round color="red" icon="delete"  @click="deleteItem(props.row)" size=sm></q-btn>
            </q-td>
          </q-tr>
        </template>
    </q-table>
  </div>
</template>

<script src="./IndexTable.vue.js">

</script>

