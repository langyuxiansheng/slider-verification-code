# slider-verification-code 
# 基于vue开发的简单图片滑块验证码

## 直接安装使用

```bash
npm i slider-verification-code --save
```

```javascript
import SliderVerificationCode from 'slider-verification-code';
import 'slider-verification-code/lib/slider-verification-code.css';

Vue.use(SliderVerificationCode);
```
### 图片展示 输入带预览
---
初始状态
![初始状态](https://github.com/langyuxiansheng/slider-verification-code/blob/master/images/1.png)

滑动中
![滑动中](https://github.com/langyuxiansheng/slider-verification-code/blob/master/images/2.png)

已验证
![已验证](https://github.com/langyuxiansheng/slider-verification-code/blob/master/images/3.png)

更多功能正在完善中......
如果您有什么好的建议请留言

你可以这样使用: 

#### 1. 直接使用v-model 进行绑定

```html
<SliderVerificationCode v-model="value" />

<SliderVerificationCode height="60px" sliderWidth="120px"  inactiveValue="未解锁" activeValue="已解锁" v-model="value"/>
```

#### 2. 也可以使用 @change="handleChange"  进行回调
```javascript
methods:{
    handleChange(value){
        console.log('您验证结果为:',value);
     }
}
```

#### 3. props 属性可选值
```javascript
    props: {
        isLock: { //解锁状态
            type: [String,Boolean,Number,Object],
            required: true,
            default: false
        },
        icon: { //滑块的图标
            type: [String],
            default: null
        },
        activeValue: { //滑块解锁后的值
            type: [String,Boolean,Number,Object],
            default: true
        },
        inactiveValue: { //滑块解锁前的值
            type: [String,Boolean,Number,Object],
            default: false
        },
        content: { //滑块的文字
            type: [String],
            default: `请拖动滑块解锁`
        },
        successContent: { //成功后的滑块的文字
            type: [String],
            default: `验证通过`
        },
        contentColor: { //初始滑块轨道的文字颜色
            type: [String],
            default: `#fff`
        },
        successColor: { //成功后的滑块的文字颜色
            type: [String],
            default: `#fff`
        },
        height: { //高度
            type: [String],
            default: `40px`
        },
        sliderWidth: { //滑块宽度
            type: [String],
            default: `40px`
        },
        background: { //初始背景
            type: [String],
            default: `#e8e8e8`
        },
        textColor: { //初始滑块的文字颜色
            type: [String],
            default: `#f00`
        },

        sliderBg: { //滑动后背景(原生的background 属性可以为16进制和rgb或标准颜色值)
            type: [String],
            default: `#75CDF9`
        },

        sliderColor: { //滑块的文字颜色(原生的color 属性可以为16进制和rgb或标准颜色值)
            type: [String],
            default: `#000`
        },

        sliderSuccessColor: { //滑动后滑块的文字颜色(原生的color 属性可以为16进制和rgb或标准颜色值)
            type: [String],
            default: `#f00`
        },

        successBg: { //滑动成功后背景(原生的background 属性可以为16进制和rgb或标准颜色值)
            type: [String],
            default: `lightgreen`
        },
    }
```
#### 4. solt用法
```html
<SliderVerificationCode v-model="value">
    <template slot="content">
        {{ content }}
    </template>
    <template slot="icon">
        <i class="icon icon-test" />
    </template>
</SliderVerificationCode>
```

---

```bash
## 二次开发 下载项目

## Project setup  git clone https://github.com/langyuxiansheng/slider-verification-code.git
```
```bash
cd slider-verification-code

npm install
```

### Compiles and hot-reloads for development
```bash
npm run dev
```

### Compiles and minifies for production
```bash
npm run build
```

### Run your tests
```bash
npm run test
```

### Lints and fixes files
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 更新日志
- 2019年7月09日 v1.0.0

1. 建立项目,发布到npm

- 2019年9月26日 v1.0.1

1. 修复改变高度后滑块显示异常;
2. 新增自定义解锁前后的值;
3. 新增自定义滑块高度和宽度.
4. v1.0.0的源码在 v1.0.0的分支上. 


- 2019年11月27日 v1.0.2

1. 新增兼容移动端的事件绑定;

- 2019年11月28日 v1.0.3

1. 修复滑块宽度缩小漏出背景色的bug;
2. 修复屏幕宽度缩小后进度条显示异常;
3. 修复重置值之后,样式未初始化的bug;
4. 感谢各位道友的反馈.o(*￣︶￣*)o

- 2020年7月31日 v1.0.4

1. 修复滑块重置后,部分样式没重置的bug;
2. 增加了几个属性配置项,可以更灵活的配置;
3. 感谢网友"weixin_49722066"的反馈.o(*￣︶￣*)o
---
