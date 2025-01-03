<template>
	<div class="main-container flex-box flex-column">
		<div class="top">
			<img src="@/assets/layout/activity.png" alt="" class="title-pic" />
			<span class="title-name">three.js</span>
		</div>
		<div class="bottom">
			<div class="three-content" ref="threeRef"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 获取引用
const threeRef = ref<HTMLElement | null>(null);
let scene: any = null;
let camera: any = null;
let renderer: any = null;
let cube: any = null;
let controls: any = null;
let animationFrameId: number;

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
	if (threeRef.value) {
		// 创建场景
		scene = new THREE.Scene();

		// 创建相机
		camera = new THREE.PerspectiveCamera(75, threeRef.value.clientWidth / threeRef.value.clientHeight, 0.1, 1000);

		// 创建 WebGL 渲染器
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(threeRef.value.clientWidth, threeRef.value.clientHeight);
		threeRef.value.appendChild(renderer.domElement); // 将 canvas 元素添加到 DOM 中

		// 创建轨道控制器
		controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true; // 将其设置为true以启用阻尼

		// 创建立方体
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshPhongMaterial({ color: 'skyblue' });
		cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		// 画线
		const material_line = new THREE.LineBasicMaterial({ color: 'skyblue' });
		const points = [];
		points.push(new THREE.Vector3(-2, 0, 0));
		points.push(new THREE.Vector3(0, 2, 0));
		points.push(new THREE.Vector3(2, 0, 0));
		const geometry_line = new THREE.BufferGeometry().setFromPoints(points);
		const line = new THREE.Line(geometry_line, material_line);
		scene.add(line);

		// 灯光
		const light_1 = new THREE.DirectionalLight(0xffffff, 3);
		const light_2 = new THREE.DirectionalLight(0xffffff, 3);
		light_1.position.set(0, 0, 3);
		light_2.position.set(0, 0, -3);
		scene.add(light_1, light_2);

		// 创建坐标轴
		const axesHelper = new THREE.AxesHelper(5);
		scene.add(axesHelper);

		// 设置相机的位置
		camera.position.z = 5;

		// 启动动画
		animate();
	}
};

// 动画渲染函数
const animate = () => {
	controls.update();
	animationFrameId = requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};

// 监听窗口尺寸变化并更新渲染器和相机
const onResize = () => {
	if (threeRef.value && renderer && camera) {
		const width = threeRef.value.clientWidth;
		const height = threeRef.value.clientHeight;
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
		margin: 0 400px;
		width: auto;
		height: 100%;
	}
}
</style>
