/**
 * src/directives/index.js
 * 全局指令注册中心
 * 包含：防连点、权限控制、图片懒加载
 */

// 默认占位图 (一个极小的透明像素，或者你也可以换成灰色背景图)
const defaultImg = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default {
  install(app) {
    
    // ==========================================
    // 1. v-lazy: 图片懒加载 (性能优化核心)
    // 用法: <img v-lazy="image_url" />
    // ==========================================
    app.directive('lazy', {
      mounted(el, binding) {
        // 1. 先保存真实图片地址
        const realSrc = binding.value;
        
        // 2. 初始状态：显示占位图，并添加 loading 类(方便做 CSS 动画)
        el.src = defaultImg;
        el.classList.add('img-lazy-loading');

        // 3. 创建观察者，监听图片是否进入屏幕
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          // 如果进入可视区域
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = realSrc;

            // 图片下载完毕后，替换 src
            img.onload = () => {
              el.src = realSrc;
              el.classList.remove('img-lazy-loading');
              el.classList.add('img-lazy-loaded'); // 添加加载完成类
            };

            img.onerror = () => {
              // 加载失败可以显示一个默认的错误图，或者保持占位
              // el.src = '/assets/error.png'; 
              console.warn('图片加载失败:', realSrc);
              el.classList.remove('img-lazy-loading');
            };

            // 任务完成，停止观察该元素
            observer.unobserve(el);
          }
        });

        // 开始观察
        observer.observe(el);
      }
    });

    // ==========================================
    // 2. v-preventClick: 防止按钮连点 (防抖/节流)
    // 用法: <button v-prevent-click>提交</button>
    // ==========================================
    app.directive('preventClick', {
      mounted(el, binding) {
        el.addEventListener('click', () => {
          if (!el.disabled) {
            // 禁用按钮
            el.disabled = true;
            el.style.cursor = 'not-allowed';
            
            // 定时恢复 (默认 2秒，可传参 v-prevent-click="3000")
            setTimeout(() => {
              el.disabled = false;
              el.style.cursor = 'pointer';
            }, binding.value || 2000);
          }
        });
      }
    });

    // ==========================================
    // 3. v-auth: 按钮级权限控制 (未登录拦截)
    // 用法: <button v-auth>购买</button>
    // ==========================================
    app.directive('auth', {
      mounted(el, binding) {
        const token = localStorage.getItem('yanhe_token');
        
        // 如果没有 Token (未登录)
        if (!token) {
          // 1. 样式置灰
          el.style.filter = 'grayscale(100%)';
          el.style.opacity = '0.6';
          el.title = "该功能需要登录后使用"; // 鼠标悬停提示
          
          // 2. 拦截点击事件 (使用捕获模式 true，确保在所有其他事件前触发)
          el.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止冒泡
            e.preventDefault();  // 阻止默认行为
            
            // 3. 跳转登录页 (记录当前页面路径作为 redirect)
            // 这里使用 window.location 强制跳转，确保逻辑最简单可靠
            const currentPath = window.location.pathname + window.location.search;
            window.location.href = '/login?redirect=' + encodeURIComponent(currentPath);
          }, true); 
        }
      }
    });

  }
};