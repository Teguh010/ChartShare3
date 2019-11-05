import { uid } from 'quasar'

const pilihKota = [
  'Jakarta', 'Banten', 'Cirebon']
const pilihUser = [
  'Neo', 'RO'
]


export default {
  data() {
    return {
      alert: false,
      optionsKotaKab: pilihKota,
      optionsSumber: ['WA', 'Telphone', 'E-Mail'],
      optionsJenisUser: pilihUser,
      optionsHasilLed: ['Closing', 'Data Baru', 'Penawaran'],
      optionsKebutuhanEPS: ['Kapal', 'Mobil', 'Motor'],
      dense: false,
      show_dialog: false,
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
      },
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        { name: "id", label: "ID", field: "id", align: "center" },
        { name: "actions", label: "Actions", field: "actions", align: "center" },
        { name: "noHP", align: "center", label: "NO HP", field: "noHP", sortable: false },
        { name: "namaUser", required: true, label: "Nama User", align: "left", field: row => row.name, format: val => `${val}`, sortable: true},
        { name: "kotaKab", align: "center", label: "Kota / Kab", field: "kotaKab", sortable: false },
        { name: "alamatLengkap", align: "center", label: "Alamat Lengkap", field: "alamatLengkap", sortable: false },
        { name: "kebutuhan", align: "center", label: "Kebutuhan", field: "kebutuhan", sortable: false },
        { name: "sumber", align: "center", label: "Sumber", field: "sumber", sortable: false },
        { name: "jenisUser", align: "center", label: "Jenis User", field: "jenisUser", sortable: false },
        { name: "hasilLed", align: "center", label: "Hasil Led", field: "hasilLed", sortable: false },
        { name: "kebutuhanEPS", align: "center", label: "Kebutuhan EPS", field: "kebutuhanEPS", sortable: false },
        { name: "namaCS", align: "center", label: "Nama CS", field: "namaCS", sortable: false },
        { name: "keterangan", align: "center", label: "Keterangan", field: "keterangan", sortable: false }
      ],
      data: [
        {id: 1, noHP: 123,  name: "Teguh BDS", kotaKab: "banten", alamatLengkap: "cirebon", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"},
        {id: 2, noHP: 124,  name: "Parwito", kotaKab: "banten", alamatLengkap: "cirebon", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"},
        {id: 3, noHP: 125,  name: "Ade", kotaKab: "banten", alamatLengkap: "banten", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"},
        {id: 4, noHP: 126,  name: "Maul", kotaKab: "banten", alamatLengkap: "cirebon", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"},
        {id: 5, noHP: 127,  name: "Ikhsan", kotaKab: "banten", alamatLengkap: "cirebon", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"},
        {id: 6, noHP: 128,  name: "Adri", kotaKab: "banten", alamatLengkap: "cirebon", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"},
        {id: 7, noHP: 129,  name: "Saepul", kotaKab: "banten", alamatLengkap: "cirebon", kebutuhan: 3, sumber: "WA", jenisUser: "NEO", hasilLed: "Closing", kebutuhanEPS: "Kapal" , namaCS: "Tias", keterangan: "mantullll"}
      ]
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
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Tambah Data' : 'Edit Data'
    },
  }
  // components: {
	// 		'addEdit' : require('components/modal/addEdit.vue').default
	// 	}
  
}