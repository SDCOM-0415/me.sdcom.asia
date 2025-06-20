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

const themeToggle = document.createElement('button');
themeToggle.id = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.title = '切换主题';
document.body.appendChild(themeToggle);

// 检查本地存储中的主题偏好
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// 主题切换功能
themeToggle.addEventListener('click', () => {
    let theme = 'dark';
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        theme = 'light';
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// 添加主题切换按钮的样式
const style = document.createElement('style');
style.textContent = `
    #theme-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    #theme-toggle:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(style);

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