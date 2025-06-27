# 个人介绍网站

这是一个简洁、现代的个人介绍网站模板，具有响应式设计和优雅的界面。

## 特点

- 响应式设计，适配各种设备（从手机到桌面）
- 简洁现代的界面设计
- 暗色主题，提供舒适的浏览体验
- 社交媒体链接展示
- 项目展示区域
- 技能展示区域
- 一言API集成，展示随机名言
- 打字机效果增强视觉体验

## 文件结构

```
.
├── index.html          # 主HTML文件
├── styles.css          # CSS样式表
├── script.js           # JavaScript交互脚本
├── images/             # 图片资源目录
│   ├── favicon.jpeg    # 网站图标
│   └── ...             # 其他图片资源
└── README.md           # 项目说明文档
```

## 如何使用

1. 克隆或下载此仓库
2. 编辑 `index.html` 文件，替换个人信息：
   - 修改标题和名字
   - 更新个人介绍和座右铭
   - 更新社交媒体链接
   - 添加你的项目
   - 更新技能图标
3. 替换 `images/favicon.jpeg` 为你自己的网站图标
4. 根据需要自定义 `styles.css` 中的颜色和样式

## 自定义

### 修改颜色主题

在 `styles.css` 文件中，你可以修改 `:root` 部分的 CSS 变量来更改网站的颜色主题：

```css
:root {
    --bg-color: #121212;          /* 背景颜色 */
    --text-color: #e0e0e0;        /* 文本颜色 */
    --accent-color: #7b50c7;      /* 强调色 */
    --card-bg: rgba(255, 255, 255, 0.1);        /* 卡片背景色 */
    --card-hover-bg: rgba(255, 255, 255, 0.15); /* 卡片悬停背景色 */
    /* 其他颜色变量 */
}
```

### 添加更多项目

在 `index.html` 文件中，你可以在 `.project-grid` 部分添加更多项目卡片：

```html
<a href="https://cnb.cool/yourusername/yourproject" target="_blank" class="project-card">
    <div class="project-content">
        <div class="project-info">
            <div class="project-title">项目名称</div>
            <div class="project-description">
                项目描述内容
            </div>
        </div>
        <div class="project-icon">
            <i class="fas fa-icon-name"></i>
        </div>
    </div>
</a>
```

### 添加更多技能图标

在 `index.html` 文件中，你可以在 `.skill-icons` 部分添加更多技能图标。本模板使用 skillicons.hydun.com 服务来显示技能图标：

```html
<a href="https://技能官网.com/" target="_blank" class="skill-icon" title="技能名称">
    <img src="//skillicons.hydun.com/icons?i=技能代码" alt="技能名称">
</a>
```

### 自定义一言API

默认情况下，网站使用 hitokoto.cn API 来获取随机名言。你可以在 `script.js` 文件中修改相关代码来使用其他API或自定义显示内容：

```javascript
// 获取一言内容并显示
fetch('https://v1.hitokoto.cn/')
    .then(response => response.json())
    .then(data => {
        const hitokotoElement = document.getElementById('hitokoto');
        typeEffect(hitokotoElement, data.hitokoto);
    })
    .catch(error => {
        console.error('获取一言失败:', error);
        document.getElementById('hitokoto').textContent = '种一棵树最好的时间是十年前，其次是现在。';
    });
```

### 调整打字效果

你可以在 `script.js` 文件中修改 `typeEffect` 函数的参数来调整打字效果的速度：

```javascript
// 为标题文字添加打字效果
const textElement = document.querySelector('.text-gradient');
const originalText = textElement.textContent;
textElement.textContent = '';

setTimeout(() => {
    typeEffect(textElement, originalText, 100); // 100是打字速度（毫秒）
}, 500);
```

## 浏览器兼容性

此模板兼容所有现代浏览器，包括：
- Chrome
- Firefox
- Safari
- Edge

## 性能优化

- 使用了轻量级的CSS和JavaScript
- 图标使用CDN加载，减少服务器负担
- 响应式图片，适应不同设备

## 贡献

欢迎提交问题和改进建议！如果你想贡献代码，请遵循以下步骤：
1. Fork 此仓库
2. 创建你的功能分支 (`git checkout -b SDCOM/Web/wiki`)
3. 提交你的更改 (`git commit -m 'Add new message'`)
4. 推送到分支 (`git push origin SDCOM/Web/wiki`)
5. 打开一个 Pull Request

## 许可

MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件