<script setup lang="ts">
// 可在此处添加响应式数据或方法
</script>

<template>
  <div class="profile-container">
    <!-- 头部区域 -->
    <header class="profile-header">
      <h1 class="gradient-title">吴永琦<span class="chinese-sub">的成长轨迹</span></h1>
      <p class="academic-info">
        <span class="icon">🎓</span>桂林电子科技大学 · 智能科学与技术专业 · 2022级
      </p>
    </header>

    <!-- 主要内容 -->
    <main class="profile-content">
      <!-- 技术栈模块 -->
      <section class="tech-section">
        <h2 class="section-title"><span class="icon">💻</span>技术栈</h2>
        <div class="tech-stack">
          <span class="tech-tag vue">Vue3</span>
          <span class="tech-tag spring">SpringBoot</span>
          <span class="tech-tag vite">Vite</span>
          <span class="tech-tag ts">TypeScript</span>
          <span class="tech-tag vant">Vant</span>
          <span class="tech-tag vuetify">Vuetify</span>
          <span class="tech-tag html">HTML</span>
          <span class="tech-tag css">CSS</span>
        </div>
      </section>

      <!-- 爱好模块 -->
      <section class="hobby-section">
        <h2 class="section-title"><span class="icon">❤️</span>热爱领域</h2>
        <div class="hobby-grid">
          <div class="hobby-card fitness">
            <h3>健身达人</h3>
            <p>每周5次力量训练</p>
          </div>
          <div class="hobby-card music">
            <h3>音乐世界</h3>
            <p>英文歌、华语流行音乐</p>
          </div>
          <div class="hobby-card sports">
            <h3>球类运动</h3>
            <p>篮球、羽毛球、网球、排球</p>
          </div>
          <div class="hobby-card star">
            <h3>最喜欢的明星</h3>
            <p>邓紫棋</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* 基础重置 */
.profile-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

/* 渐变标题 */
.gradient-title {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
}

.chinese-sub {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-left: 1rem;
}

/* 学术信息 */
.academic-info {
  font-size: 1.1rem;
  color: #34495e;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* 图标样式 */
.icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

/* 技术栈标签 */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
  cursor: pointer;
}

.tech-tag {
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-weight: 500;
  transition: transform 0.2s;
}

.tech-tag:hover {
  transform: translateY(-2px);
}

/* 技术栈配色 */
.vue { background: #4fc08d; color: white; }
.spring { background: #6db33f; color: white; }
.vite { background: #646cff; color: white; }
.ts { background: #3178c6; color: white; }
.vant { background: #1989fa; color: white; }
.vuetify { background: #1867c0; color: white; }
.html { background: #e34c26; color: white; }
.css { background: #264de4; color: white; }

/* 爱好网格布局 */
.hobby-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

.hobby-card {
  padding: 2rem;
  border-radius: 12px;
  color: white;
  transition: transform 0.3s ease;
}

.hobby-card:hover {
  transform: translateY(-5px);
}

/* 爱好卡片配色 */
.fitness { background: linear-gradient(135deg, #e74c3c, #e67e22); }
.music { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
.sports { background: linear-gradient(135deg, #27ae60, #2ecc71); }
.star { background: linear-gradient(135deg, #3498db, #2980b9); }

/* 响应式设计 */
@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;
  }
  
  .gradient-title {
    font-size: 2rem;
  }
  
  .hobby-grid {
    grid-template-columns: 1fr;
  }
}
</style>