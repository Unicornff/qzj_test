<template>
	<div class="main-container flex-box flex-column">
		<div class="bottom">
			<div class="three-content" ref="earthMoonRef"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js'; // 引入Stats性能监视器
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import earth_url from '@/assets/three.js/earth.jpeg';
import moon_url from '@/assets/three.js/moon.jpeg';

// 获取引用
const earthMoonRef = ref<HTMLElement | null>(null);
let scene: any = null;
let camera: any = null;
let renderer: any = null;
let earth: any = null;
let moon: any = null;
let controls: any = null;
let animationFrameId: number;
let stats: any = null;
let gui: any = null;

onMounted(() => {
	// 初始化 Three.js 画布
	initThreeCanvas();

	// 添加 resize 事件监听器
	window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
	// 清理 resize 事件监听器和动画帧
	window.removeEventListener('resize', onResize);
	if (animationFrameId) {
		cancelAnimationFrame(animationFrameId);
	}
	if (renderer) {
		renderer.dispose();
	}
});

// 初始化 Three.js 画布
const initThreeCanvas = () => {
	if (earthMoonRef.value) {
		// 创建场景
		scene = new THREE.Scene();

		// 创建相机
		camera = new THREE.PerspectiveCamera(
			75,
			earthMoonRef.value.clientWidth / earthMoonRef.value.clientHeight,
			0.1,
			1000,
		);

		// 创建 WebGL 渲染器
		renderer = new THREE.WebGLRenderer({
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio); // 告诉threejs你的屏幕的设备像素比
		// renderer.setClearColor() // 设置背景色
		renderer.setSize(earthMoonRef.value.clientWidth, earthMoonRef.value.clientHeight);
		earthMoonRef.value.appendChild(renderer.domElement); // 将 canvas 元素添加到 DOM 中

		// 创建轨道控制器
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true; // 将其设置为true以启用阻尼

		// 创建地月
		const geometry_earth = new THREE.SphereGeometry(8);
		const geometry_moon = new THREE.SphereGeometry(2);
		const texture_earth = new THREE.TextureLoader().load(earth_url);
		const texture_moon = new THREE.TextureLoader().load(moon_url);
		const material_earth = new THREE.MeshBasicMaterial({ map: texture_earth });
		const material_moon = new THREE.MeshBasicMaterial({ map: texture_moon });

		earth = new THREE.Mesh(geometry_earth, material_earth);
		moon = new THREE.Mesh(geometry_moon, material_moon);
		moon.position.x = 15;
		scene.add(earth, moon);

		// // 环境光
		// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
		// scene.add(ambientLight);

		// 设置相机的位置
		camera.position.set(0, 0, 20);

		// 启动动画
		animate();
	}
};

// 动画渲染函数
const animate = () => {
	controls.update();

	// 地球自转
	earth.rotation.y += 0.01;

	// 月球绕地球公转————调整速度请改“2”，x和z的数值需统一，不然会‘闪现’~ 哈哈
	moon.position.x = Math.cos((1 * Date.now()) / 1000) * 15;
	moon.position.z = Math.sin((1 * Date.now()) / 1000) * 15;

	// 加快月球自转速度
	moon.rotation.y += 0.03;

	animationFrameId = requestAnimationFrame(animate);
	renderer.render(scene, camera); // 周期性执行相机的渲染功能
};

// 监听窗口尺寸变化并更新渲染器和相机
const onResize = () => {
	if (earthMoonRef.value && renderer && camera) {
		const width = earthMoonRef.value.clientWidth;
		const height = earthMoonRef.value.clientHeight;
		renderer.setSize(width, height);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	}
};
</script>

<style scoped lang="scss">
.bottom {
	flex: 1;
	height: 0;

	.three-content {
		position: relative;
		width: 100%;
		width: auto;
		height: 100%;
	}
}
</style>
