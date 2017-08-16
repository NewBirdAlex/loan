export const fetchAPI = function(vm, url, method, body) {
	vm.$store.commit('SHOW_LOADING')
	console.log(body)
	console.log(typeof(Promise) === "function")
	console.log("fetch support	"+typeof fetch)
	if(typeof body == 'string') {

		body = {
			phone: vm.$store.state.applicant.userPhone,
			Resource:1,
			...JSON.parse(body)
		}
		body = JSON.stringify(body)
	}
	console.log("phone=" + vm.$store.state.applicant.userPhone)
	return fetch(url, {
			body,
			...{
				method
			}
		})
		.then(response => {
			vm.$store.commit('HIDE_LOADING')
			return response.json()
		})
		.then(response => {
			if(response.code == 50000) return response
			else alert(response.msg)
		})
		.catch(() => vm.$store.commit('HIDE_LOADING'))
}