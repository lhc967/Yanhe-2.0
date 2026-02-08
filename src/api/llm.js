const API_URL = 'https://api.deepseek.com/chat/completions';
const API_KEY = '你的_DEEPSEEK_API_KEY';

export async function chatWithAI(history) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { 
            role: "system", 
            content: "你现在扮演田中美海配音的二次元角色爱丽丝。说话要俏皮、可爱，经常使用语气词，性格活泼。请用简短的中文回复。" 
          },
          ...history
        ]
      })
    });
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    return "哎呀，信号被次元壁挡住了~";
  }
}