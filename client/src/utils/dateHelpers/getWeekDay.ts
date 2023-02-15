export const getWeekDay = (locale: string) => {
    if (locale.startsWith('ko')) {
      return ['일', '월', '화', '수', '목', '금', '토'];
    }
  
    if (locale.startsWith('ja')) {
      return ['日', '月', '火', '水', '木', '金', '土'];
    }
  
    if (locale.startsWith('zh')) {
      return ['日', '一', '二', '三', '四', '五', '六'];
    }
  
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };