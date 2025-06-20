# 个人介绍网站

这是一个简洁、现代的个人介绍网站模板

## 特点

- 响应式设计，适配各种设备
- 简洁现代的界面
- 暗色/亮色模式自动适配
- 社交媒体链接展示
- 项目展示区域
- 技能展示区域

## 如何使用

1. 克隆或下载此仓库
2. 编辑 `index.html` 文件，替换个人信息：
   - 修改标题和名字
   - 更新个人介绍和座右铭
   - 更新社交媒体链接
   - 添加你的项目
   - 更新技能图标
3. 替换 `images/avatar.png` 和 `images/avatar.svg` 为你自己的头像
4. 根据需要自定义 `styles.css` 中的颜色和样式

## 自定义

### 修改颜色主题

在 `styles.css` 文件中，你可以修改 `:root` 部分的 CSS 变量来更改网站的颜色主题：

```css
:root {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --accent-color: #7b50c7;
    --card-bg: rgba(255, 255, 255, 0.1);
    --card-hover-bg: rgba(255, 255, 255, 0.15);
    /* 其他颜色变量 */
}
```

### 添加更多项目

在 `index.html` 文件中，你可以在 `.project-grid` 部分添加更多项目卡片：

```html
<a href="https://github.com/yourusername/yourproject" target="_blank" class="project-card">
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

在 `index.html` 文件中，你可以在 `.skill-icons` 部分添加更多技能图标：

```html
<div class="skill-icon" title="技能名称"><i class="fab fa-icon-name"></i></div>
```

## 启用可选功能

在 `script.js` 文件中，有一些被注释掉的可选功能，如主题切换按钮和打字效果。你可以取消这些部分的注释来启用这些功能。

## 许可

MIT 许可证