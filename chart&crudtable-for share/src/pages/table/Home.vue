<template>
<q-layout column max-width>
  <q-page-container>
    <q-page >
      <q-layout class="q-pa-sm q-gutter-sm">
        <div class="text-center">
          <q-btn scatch flat>
            <img src="statics/logo-gpsku.png" width="150" style="padding: 5px;">
          </q-btn>
          </div>

    <tableindex />
    
    </q-layout>
     </q-page>
 </q-page-container>
</q-layout>
</template>

<script>  

import tableindex from './TableIndex'

export default {

    components:{
      tableindex
    }
}

</script>

<style scoped>
  .q-page-container {
		padding-top: 30px;
    padding-left:50px;
	}

</style>