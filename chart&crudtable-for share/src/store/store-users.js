import Vue from 'vue'
import { uid } from 'quasar'

const state = {
		// 	users: {
		//  'ID1': {
		// 	name: 'Frozen Yogurt',
		// 	calories: 159,
		// 	fat: 6.0,
		// 	carbs: 24,
		// 	protein: 4.0,
		// 	sodium: 87,
		// 	calcium: '14%',
		// 	iron: '1%'
		//  },
		// 	'ID2': {
		// 	name: 'Ice cream sandwich',
		// 	calories: 237,
		// 	fat: 9.0,
		// 	carbs: 37,
		// 	protein: 4.3,
		// 	sodium: 129,
		// 	calcium: '8%',
		// 	iron: '1%'
		//     },
		//  'ID2': {
		// 	name: 'Eclair',
		// 	calories: 262,
		// 	fat: 16.0,
		// 	carbs: 23,
		// 	protein: 6.0,
		// 	sodium: 337,
		// 	calcium: '6%',
		// 	iron: '7%'
        //  }
		users: [
			{
			  id: 1,
			  name: 'Frozen Yogurt',
			  calories: 159,
			  fat: 6.0,
			  carbs: 24,
			  protein: 4.0,
			  sodium: 87,
			  calcium: '14%',
			  iron: '1%'
			},
			{
			  id: 2,
			  name: 'Ice cream sandwich',
			  calories: 237,
			  fat: 9.0,
			  carbs: 37,
			  protein: 4.3,
			  sodium: 129,
			  calcium: '8%',
			  iron: '1%'
			},
			{
			  id: 3,
			  name: 'Eclair',
			  calories: 262,
			  fat: 16.0,
			  carbs: 23,
			  protein: 6.0,
			  sodium: 337,
			  calcium: '6%',
			  iron: '7%'
			},
           
		  ]
			}	


const mutations = {
	// updateTask(state, payload) {
	// 	Object.assign(state.tasks[payload.id], payload.updates)
	// },
	deleteUser(state, row) {
		Vue.delete([state].users, row)
	}
	// addTask(state, payload) {
	// 	Vue.set(state.tasks, payload.id, payload.task)
	// }
}

const actions = {
	// updateTask({ commit }, payload) {
	// 	commit('updateTask', payload)
	// },
	deleteUser({ commit }, row) {
		commit('deleteUser', row)
	}
	// addTask({ commit }, task) {
	// 	let taskId = uid()
	// 	let payload = {
	// 		id: taskId,
	// 		task: task
	// 	}
	// 	commit('addTask', payload)
	// }
}

const getters = {
	users: (state) => {
		return state.users
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}