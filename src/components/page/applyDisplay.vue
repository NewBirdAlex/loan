<!--3.0客户订单（银行审核中）-->
<template>
	<div class="apply-wrapper">
		<div class="top-wrapper of bgWhite">
			<p class="marginGap orderTit">订单编号：{{orderId}}</p>
			<!--初审中-->
			<p class="marginGap orderStatus">{{orderDetail["业务状态"]}}</p>
		</div>
		<div class="dataContent">
			<div class="list">
				主贷款人姓名
				<span class="fr">{{orderDetail["按揭详细信息"]["按揭申请人信息"]["贷款人姓名"]}}</span>
			</div>
			<div class="list">
				成交物业地址
				<span class="fr">
					{{
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_省"]+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_市"]+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_县(区)"]
					}}
				</span>
			</div>
			<div class="list">

				<span class="fr">
					{{
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_街"]+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_路"]+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_巷"]+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_小区名称"]+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_栋"]+"栋"+
						orderDetail["按揭详细信息"]["按揭申请人信息"]["成交物业地址_房号"]+"号"
						
					}}
				</span>
			</div>

			<div class="list">
				成交价
				<span class="fr">
					{{orderDetail["按揭详细信息"]["按揭申请人信息"]["成交价"]}} 万元
				</span>
			</div>
			<div class="list">
				计划贷款金额
				<span class="fr">
					{{orderDetail["按揭详细信息"]["按揭申请人信息"]["计划贷款金额"]}} 万元
				</span>
			</div>
			<div class="list">
				计划贷款年限
				<span class="fr">
					{{orderDetail["按揭详细信息"]["按揭申请人信息"]["计划贷款期限"]}} 月
				</span>
			</div>
			<div class="list">
				提交时间
				<span class="fr">
					{{orderDetail["按揭详细信息"]["申请时间"]}} 
				</span>
			</div>
		</div>

		<p class="more tac bgWhite" @click="lookMore">查看更多信息</p>
	</div>
</template>

<script>
	import xCeil from '../x-ceil'
	import { fetchAPI } from '../../libs/fetch'
	import { mapGetters, mapState } from 'vuex'
	export default {
		components: {
			xCeil
		},
		data() {
			return {
				orderId: "",
				orderDetail: {
					"业务状态": "",
					"按揭详细信息": {
						"按揭申请人信息": {
							"出生年月": "",
							"单位性质": "",
							"婚姻情况": "",
							"性别": "",
							"成交价": "",
							"成交物业地址_县(区)": "",
							"成交物业地址_小区名称": "",
							"成交物业地址_巷": "",
							"成交物业地址_市": "",
							"成交物业地址_房号": "",
							"成交物业地址_栋": "",
							"成交物业地址_省": "",
							"成交物业地址_街": "",
							"成交物业地址_路": "",
							"房产证号": "",
							"房产证持有人数量": "",
							"所在企业人数": "",
							"文化程度": "",
							"贷款人姓名":""
						}
					}
				}
			}
		},
		computed: {
			...mapGetters([
				'userPhone'
			])
		},
		mounted() {
			console.log(this.$route.params)
			const params = this.$route.params;
			this.orderId = params.orderId;
			const self = this;
			fetchAPI(this, this.$config.interfaceV1 + 'getOrderDetails', 'POST',
				JSON.stringify({
					"phone": self.userPhone,
					"sn": params.orderId,
					"productId": params.productId
				})).then(response => {
				console.log(response)
				self.orderDetail = response.data;
			})

			// 返回时立即重置
			// 防止applyInform页面点返回时被认为是增加共同申请人后的返回行为
			// 增加共同申请人后的返回是go(-7)
			this.$store.commit('NONE_MODIFY_ADD_ROLE')
		},
		methods: {
			lookMore() {
				this.$router.push({
					name: 'applyInform',
					params: {
						orderId: this.$route.params.orderId,
						productId: this.$route.params.productId
					}
				})
			}
		}
	}
</script>

<style lang="less" rel="stylesheet/less" scoped="">
	@import "../../assets/css/custom";
	.orderTit {
		font-size: .32rem;
		color: @fontDeepGray;
		margin-top: .56rem;
	}
	
	.remark {
		font-size: .26rem;
		margin-bottom: .2rem;
		color: @fontDeepGray;
	}
	
	.remark:last-of-type {
		padding-bottom: .4rem;
	}
	
	.top-wrapper {
		margin-bottom: .2rem;
	}
	
	.orderStatus {
		font-size: .28rem;
		color: @fontDeepRed;
		margin-top: .6rem;
		margin-bottom: .54rem;
	}
	
	.more {
		padding: .4rem 0;
		color: @fontPink;
	}
	
	.remarkactive {
		color: @fontDeepRed;
	}
	
	.dataContent {
		margin-top: 20px;
		background: white;
	}
	
	.list {
		border-bottom: 1px solid #F4F4F4;
		padding: 0.28rem;
		overflow: hidden;
	}
</style>