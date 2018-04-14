<!--客服评分-->
<template>
	<transition name='fade'>
		<div class="xw-toast-wrap" v-if="showToast" @click="toggle">
			<div class="xw-toast-content">
				<div class='xw-toast-text'>
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>


export default{
	props:{
		showToast:{
			type:Boolean,
			default:true
		}
	},
	data(){
		return{

		}
	},
	methods:{
		toggle(){

		}
	}
}
</script>

<style scoped>
.xw-toast-content{
	display: flex;
    position: absolute;
    bottom: 80px;
    width: 150px;
    background: #575758;
    z-index: 1003;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    height: 60px;
    border-radius: 5px;
    background: rgba(0,0,0,.85);
    justify-content: center;
    align-items: center;
}
.xw-toast-text{
	color: #fff;
}
</style>