<template>
	<div class="">

		<step :stepShow="false">
			<p>选择贷款产品</p>
		</step>

		<div class="productList" v-for="(product, index) in products" @click="goProduct(product)">
			<img :src="backgrounds[index % backgrounds.length]" />
			<p>{{product.ProductName}}</p>
		</div>
		<!--<router-link to='fillInform/step/1/groupId/按揭申请人信息/roleId/self'>

    </router-link>-->
	</div>
</template>
<script>
	import step from '../step/index.vue'
	import { fetchAPI } from '../../libs/fetch'
	import { mapGetters } from 'vuex'

	import bg1 from '../../assets/images/house2.png'
	import bg2 from '../../assets/images/house.png'
	import bg3 from '../../assets/images/house2.png'
	export default {
		data() {
			return {
				topic: "线上贷款"
			}
		},
		components: {
			step
		},
		data() {
			return {
				phone: "",
				products: [],
				backgrounds: [bg1, bg2, bg3]
			}
		},
		methods: {
			goProduct(item) {
				this.$store.commit('SET_FORM')
				if(item.ProductName=="中行爱家"){
					this.$store.commit('ADD_PROPETY')
				}

				this.$store.commit('NONE_MODIFY_ADD_ROLE')
				this.$store.commit('SET_PRODUCTNAME',{ProductName:item.ProductName})
				//不同产品提交
				let paramsObj = {
						step: 1,
						group: '按揭申请人信息',
						role: 'self',
						product: item.ProductId
					}
				if(item.ProductName=="中行爱家"){
					paramsObj.group="中行爱家申请人";
				}
				this.$router.push({
					name: 'fillInform',
					params: paramsObj
				})
			}
		},
		mounted() {
			// 96 德堂8080   114 国显 8081  214 文龙80
			// http://loan.lcfex.com
			// http://loan.lcfex.com
			let phone = this.phone;
			fetchAPI(this, this.$config.interfaceV1 + 'list', 'POST',
				JSON.stringify({
					"phone": phone
				})).then(response => {
				this.products = response.data
			})

		},
		computed: {
			...mapGetters({
				roleGroup: 'roleGroup'
			})
		},
		created() {
			//查看数据结构
			let inf = JSON.stringify({
				"accountName": "alex",
				"password": "123456",
				"phone": "13600136007",
				"productId": "50"
			});
			let ret;
			fetchAPI(this, this.$config.interfaceV1 + 'queryField', 'POST', inf)
				.then(response => {
					console.log(response)
				})
				.then(response => {

				})

			function getUserPhone() {
				/**
				 * 中介用户 mediator
				 * 个人用户 simpleUser
				 * 按揭用户 mortgage
				 * 评估公司  evaluationCompany
				 */
				var u = navigator.userAgent,
					app = navigator.appVersion;
				var userType = "";
				if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
					// 测试chrome中是iphone6模式

					userType = window.getUserPhoneIos();

				} else if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
					userType = window.islogin.getUserPhone();

				}
				console.log(userType)
				// pc端调试时
				return /\d/.test(userType) ? userType : '13600136007';
			}
			this.$store.commit('SAVE_PHONE', {
				phone: getUserPhone()
			})
			this.phone = getUserPhone();
		}
	}

	function fetchField(vm) {
		let inf = JSON.stringify({
			"accountName": "alex",
			"password": "123456",
			"productId": "44"
		});
		let ret;
		fetch(vm.$config.interfaceV1 + 'queryField', {
				method: 'POST',
				body: inf
			})
			.then(response => {
				return response.json()
			})
			.then(response => {
				vm.$store.commit('SAVE_QUERY_FIELD', {
					field: response.data
				})
				ret = response.data
				//                    console.log(ret)
			})
	}
</script>
<style scoped lang="less">
	.productList {
		width: 7rem;
		height: 2.5rem;
		text-align: center;
		background: url(../../assets/images/cityBg.png) white no-repeat;
		background-position: bottom;
		margin: 0.25rem auto;
		background-size: 100% auto;
		border-radius: 10px;
		box-shadow: 1px 1px 10px gray;
		img {
			width: 2.03rem;
			margin-top: 0.2rem;
		}
		p {
			font-size: 0.28rem;
			color: #673344;
		}
	}
</style>