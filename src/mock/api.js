/**
 * src/api/mock.js
 * 全局模拟接口层：标准化响应格式
 */

// 模拟网络延迟 (500ms - 1500ms)
const simulateDelay = () => new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

// 标准化响应构建器
const response = (data, code = 200, msg = "成功") => ({ code, msg, data });

// 模拟演示模式开关 (存储在 Session 中)
const isDemoMode = () => sessionStorage.getItem('yanhe_demo_mode') === 'true';

export default {
  // 1. 用户登录
  login: async (username, password) => {
    await simulateDelay();
    // 演示模式下总是成功
    if (isDemoMode() || (username === 'admin' && password === '123456')) {
      return response({
        token: 'mock-token-' + Date.now(),
        userInfo: { id: 101, name: '李华同学', role: 'individual', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiHua' }
      });
    }
    return response(null, 401, "用户名或密码错误");
  },

  // 2. 获取课程详情 (带随机错误模拟)
  getCourseDetail: async (id) => {
    await simulateDelay();
    // 5% 概率模拟网络错误
    if (!isDemoMode() && Math.random() < 0.05) {
      return response(null, 500, "服务器开小差了，请稍后重试");
    }
    return response({
      id: id,
      title: "商务汉语谈判技巧 (进阶版)",
      videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
      poster: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      isPaid: true,
      price: 99
    });
  },

  // 3. 提交题目判分 (客观题即时批改)
  submitQuiz: async (answers) => {
    await simulateDelay();
    const correctAnswers = { 1: 'B', 2: 'A', 3: 'C' };
    let score = 0;
    let wrongs = [];
    
    for (let key in answers) {
      if (answers[key] === correctAnswers[key]) score += 33; // 简单算分
      else wrongs.push(key);
    }
    
    return response({ score: Math.min(score, 100), wrongIds: wrongs });
  }
};