/**
 * 网站交互功能脚本
 * 包含页脚年份更新、平滑滚动、一言加载和打字效果等功能
 */

/**
 * 更新页脚年份为当前年份
 */
document.getElementById('current-year').textContent = new Date().getFullYear();

/**
 * 为所有页内链接添加平滑滚动效果
 * 监听所有以#开头的链接，实现点击时的平滑滚动
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * 实现打字机效果的函数
 * @param {HTMLElement} element - 要显示文字的DOM元素
 * @param {string} text - 要显示的文字内容
 * @param {number} speed - 打字速度（毫秒）
 */
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * 页面加载完成后的初始化
 * 1. 添加loaded类
 * 2. 获取并显示一言
 * 3. 为标题添加打字效果
 */
document.addEventListener('DOMContentLoaded', () => {
    // 添加页面加载完成的类
    document.body.classList.add('loaded');
    
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
    
    // 为标题文字添加打字效果
    const textElement = document.querySelector('.text-gradient');
    const originalText = textElement.textContent;
    textElement.textContent = '';
    
    setTimeout(() => {
        typeEffect(textElement, originalText);
    }, 500);
});