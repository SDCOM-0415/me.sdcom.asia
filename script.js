// 更新页脚年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 添加页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    
    // 获取一言内容
    fetch('https://v1.hitokoto.cn/')
        .then(response => response.json())
        .then(data => {
            const hitokotoElement = document.getElementById('hitokoto');
            // 使用打字效果显示一言
            typeEffect(hitokotoElement, data.hitokoto);
        })
        .catch(error => {
            console.error('获取一言失败:', error);
            document.getElementById('hitokoto').textContent = '种一棵树最好的时间是十年前，其次是现在。';
        });
});

// 主题切换功能已移除

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

// 在页面加载后应用打字效果
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text-gradient');
    const originalText = textElement.textContent;
    textElement.textContent = '';
    
    setTimeout(() => {
        typeEffect(textElement, originalText);
    }, 500);
});