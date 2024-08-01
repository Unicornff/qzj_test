<template>
	<div ref="watermarkedContainer" class="watermarked-container">
		<div class="content">
			<slot></slot>
			<!-- 插槽用于插入自定义内容 -->
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
defineOptions({
	name: "WaterMark"
});

interface WatermarkProps {
	text: string; // 水印文字
	fontSize?: string; // 字体大小
	gradientColors?: string[]; // 颜色(多个设置渐变色)
	rotate?: any; // 旋转角度
	xGap?: any; // x 间隔
	yGap?: any; // y 间隔
}

const props = defineProps<WatermarkProps>();
const watermarkedContainer = ref<HTMLElement | null>(null);

const createWatermark = (
	text: string,
	options: { fontSize?: string; gradientColors?: string[]; rotate?: any; xGap?: any; yGap?: any }
) => {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	if (!ctx) return "";

	// 设置画布尺寸
	const blockWidth = 200; // 水印单个块的宽度
	const blockHeight = 200; // 水印单个块的高度

	canvas.width = blockWidth;
	canvas.height = blockHeight;

	const fontSize = options.fontSize || "24px";
	const rotate = options.rotate || -10;
	const xGap = options.xGap || 200; // x 间隔
	const yGap = options.yGap || 200; // y 间隔

	let gradient: any; // 颜色

	if (options.gradientColors?.length !== 1) {
		// 创建渐变颜色
		const gradientColors = options.gradientColors || ["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.5)"];
		gradient = ctx.createLinearGradient(0, 0, blockWidth, blockHeight);

		// 添加渐变颜色停点
		gradientColors.forEach((color, index) => {
			gradient.addColorStop(index / (gradientColors.length - 1), color);
		});
	} else {
		gradient = options.gradientColors[0];
	}

	ctx.font = `${fontSize} Arial`;
	ctx.fillStyle = gradient; // 使用渐变颜色
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";

	// 绘制水印
	ctx.rotate((rotate * Math.PI) / 180);
	const x = blockWidth / 2;
	const y = blockHeight / 2;

	ctx.fillText(text, x, y);
	// ctx.fillRect(0, 0, canvas.width, canvas.height);

	// 创建一个更大的画布，用于重复水印
	const largeCanvas = document.createElement("canvas");
	const largeCtx = largeCanvas.getContext("2d");

	if (!largeCtx) return "";

	// 设定大画布的尺寸
	largeCanvas.width = xGap * 2; // 调整为需要的宽度
	largeCanvas.height = yGap * 2; // 调整为需要的高度

	// 将小画布绘制到大画布中
	for (let xPos = 0; xPos < largeCanvas.width; xPos += xGap) {
		for (let yPos = 0; yPos < largeCanvas.height; yPos += yGap) {
			largeCtx.drawImage(canvas, xPos, yPos);
		}
	}

	return largeCanvas.toDataURL("image/png");
};

onMounted(() => {
	if (watermarkedContainer.value) {
		const container = watermarkedContainer.value;
		const watermarkUrl = createWatermark(props.text, {
			fontSize: props.fontSize,
			gradientColors: props.gradientColors,
			rotate: Number(props.rotate),
			xGap: Number(props.xGap),
			yGap: Number(props.yGap),
		});

		container.style.position = "relative";
		container.style.width = "100%";
		container.style.height = "100%";

		container.style.backgroundImage = `url(${watermarkUrl})`;
		container.style.backgroundSize = "auto"; // Use 'auto' to ensure background image covers container
		container.style.backgroundRepeat = "repeat";
		container.style.backgroundPosition = "0 0";
	}
});
</script>

<style scoped>
.watermarked-container {
	position: relative;
	width: 100%;
	height: 100%;
}

.content {
	position: relative;
	z-index: 2;
	padding: 20px;
}
</style>
