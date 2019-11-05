import { uid } from 'quasar'

const stringOptions = [
  'Admin', 'Marketing', 'Billing']

export default {
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
  data() {
    return {
      options: stringOptions,
      dense: false,
      show_dialog: false,
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        levelUser: "",
        tipeUser: "",
        keterangan: "",
      },
      defaultItem: {
        id: "",
        name: "",
        levelUser: "",
        tipeUser: "",
        keterangan: ""
      },
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        
        { name: "id", label: "ID", field: "id" },
        {
          name: "namaUser",
          required: true,
          label: "Nama User",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "levelUser",
          align: "center",
          label: "Level User",
          field: "levelUser",
          sortable: true
        },
        {
          name: "tipeUser",
          label: "Tipe User",
          field: "tipeUser",
          sortable: true,
          style: "width: 10px"
        },
        { name: "keterangan", label: "Keterangan", field: "keterangan" },
        {
          name: "actions",
          label: "Actions",
          field: "actions",
          align: "center",
        },
      ],
      data: [
        {
          id: 1,
          name: "Teguh BDS",
          levelUser: 1,
          tipeUser: "Admin",
          keterangan: "Mantap di Jiwa"
        },
        {
          id: 2,
          name: "Ade",
          levelUser: 2,
          tipeUser: "Marketing",
          keterangan: "jos Gandos"
        },
        {
           id: 3,
          name: "Parwito",
          levelUser: 3,
          tipeUser: "Billing",
          keterangan: "Santuy"
        },
        {
           id: 4,
          name: "Ikhsan",
          levelUser: 6,
          tipeUser: "Billing",
          keterangan: "Mantul"
        },
        {
           id: 5,
          name: "Madin",
          levelUser: 6,
          tipeUser: "Billing",
          keterangan: "Oke Sip"
        },
         {
           id: 6,
          name: "Tias",
          levelUser: 6,
          tipeUser: "Billing",
          keterangan: "Oke Sip"
        },
         {
           id: 7,
          name: "Ren",
          levelUser: 6,
          tipeUser: "Billing",
          keterangan: "Oke Sip"
        }
      ]
    };
  }
}