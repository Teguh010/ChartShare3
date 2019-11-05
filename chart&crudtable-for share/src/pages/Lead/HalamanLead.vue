<template>
   <div class="q-pa-sm q-gutter-sm">
    <q-table title="Treats" :data="data" :columns="columns" row-key="name"
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      binary-state-sort>
      <template v-slot:top>
          <q-btn icon="person_add" color="primary" label="Tambah Pengguna" @click="show_dialog = true" ></q-btn>
          
        <div>
        <q-dialog v-model="show_dialog">
         <!-- <addEdit /> -->
        <q-card >
          
          <q-card-section>
            <div class="text-h6">{{ formTitle }}</div>
          </q-card-section>
           <!-- <q-card-title>
              <span class="headline">{{ formTitle }}</span>
            </q-card-title> -->

          <q-card-section class="q-gutter-sm ">
            <div class="row q-col-gutter-xs">
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled  v-model="editedItem.id" label="ID"></q-input>
              </div>
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled type="number"  v-model="editedItem.noHP" label="NO HP"></q-input>
              </div>
               <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled  v-model="editedItem.namaUser" label="Nama User"></q-input>
              </div>
               <div class="col-12 col-md-6 col-sm-6 " >
                <q-select filled input-debounce="0" :options="optionsKotaKab"  v-model="editedItem.kotaKab" label="Kota / Kab"></q-select>
              </div>
              <div class="col-12 col-md-6 col-sm-6" >
                <q-input filled v-model="editedItem.alamatLengkap" label="Alamat Lengkap"></q-input>
                </div>
                 <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled  v-model="editedItem.kebutuhan" label="Kebutuhan"></q-input>
              </div>
               <div class="col-12 col-md-6 col-sm-6 " >
                <q-select filled input-debounce="0" :options="optionsSumber" v-model="editedItem.sumber" label="Sumber"></q-select>
              </div>
              <div class="col-12 col-md-6 col-sm-6 " >
                <q-select filled input-debounce="0" :options="optionsJenisUser" v-model="editedItem.jenisUser" label="jenisUser"></q-select>
              </div>
                <div class="col-12 col-md-6 col-sm-6" >
                <q-select filled input-debounce="0" :options="optionsHasilLed" v-model="editedItem.hasilLed" label="Hasil Led"></q-select>
                </div>
                <div class="col-12 col-md-6 col-sm-6" >
                <q-select filled input-debounce="0" :options="optionsKebutuhanEPS" v-model="editedItem.kebutuhanEPS" label="Kebutuhan EPS"></q-select>
                 </div>
                 <div class="col-12 col-md-6 col-sm-6 " >
                <q-input filled v-model="editedItem.namaUser" label="Nama CS"></q-input>
                  </div>
                  <div class="col-12 col-md-6 col-sm-6 " >
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
             <!-- <q-btn label="Alert" color="primary" @click="alert = true" />
              <q-dialog v-model="alert">
                
              </q-dialog> -->
      </template>

      <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">{{ props.row.id }}</q-td>
             <q-td key="actions" :props="props">
              <q-btn round class="q-mr-xs" color="blue" icon="edit"  @click="editItem(props.row)" size=sm ></q-btn>
              <q-btn round color="red" icon="delete"  @click="deleteItem(props.row)" size=sm></q-btn>
            </q-td>
            <q-td key="noHP" :props="props">{{ props.row.noHP }}</q-td>
            <q-td key="namaUser" :props="props">{{ props.row.name }}</q-td>
             <q-td key="kotaKab" :props="props">{{ props.row.kotaKab }}</q-td>
            <q-td key="alamatLengkap" :props="props">{{ props.row.alamatLengkap }}</q-td>
            <q-td key="kebutuhan" :props="props">{{ props.row.kebutuhan }}</q-td>
            <q-td key="sumber" :props="props">{{ props.row.sumber }}</q-td>
            <q-td key="jenisUser" :props="props">{{ props.row.jenisUser }}</q-td>
            <q-td key="hasilLed" :props="props">{{ props.row.hasilLed }}</q-td>
            <q-td key="kebutuhanEPS" :props="props">{{ props.row.kebutuhanEPS }}</q-td>
            <q-td key="namaCS" :props="props">{{ props.row.namaCS }}</q-td>
            <q-td key="keterangan" :props="props">{{ props.row.keterangan }}</q-td>
            
           
          </q-tr>
        </template>
    </q-table>
  </div>
</template>

<script src="./IndexLead.vue.js">


</script>

