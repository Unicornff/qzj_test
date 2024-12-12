const code1 = `
// 解构赋值数组
const [a, b] = [1, 2, 3, 4];
console.log(a, b); // 输出：1 2

// 解构赋值对象
const person: any = {
    name: '张三',
    age: 18,
    sex: '男'
}
const { name, age, sex } = person
console.log(name, age, sex); // 输出：张三 18 男

const numbers = [1, 2, 3, 4, 5];

// map方法用来变换数组
const doubleResult = numbers.map((item) => item * 2);
console.log(doubleResult); // 输出：[2, 4, 6, 8, 10]

// filter方法用来过滤数组
const evenResult = numbers.filter((item) => item % 2 === 0);
console.log(evenResult); // 输出：[2, 4]

// 空值合并运算符 (??)
const value = null;
const result1 = value !== null && value !== undefined ? value : '默认值' //传统写法
console.log(result1); // 输出：默认值
const result2 = value ?? '默认值'
console.log(result2); // 输出：默认值
`

const code2 = `
111
`

const notes: any = [
    {
        title: "2024-12-10",
        data: [
            {
                type: 'ts',
                code: code1,
            },
        ]
    },
    {
        title: "2024-12-11",
        data: [
            {
                type: 'ts',
                code: code2,
            },
        ]
    },
]

export default notes