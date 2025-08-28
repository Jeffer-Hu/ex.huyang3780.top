// 导航栏切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // 关闭菜单当点击链接
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
    
    // 侧边栏控制
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && sidebarClose && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
        });
        
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
        
        // 点击侧边栏外部关闭
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('active') && 
                !sidebar.contains(e.target) && 
                e.target !== sidebarToggle) {
                sidebar.classList.remove('active');
            }
        });
    }
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 粒子背景配置
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00f7ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#00f7ff", opacity: 0.3, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // 卡片悬停效果增强
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // 折叠面板功能
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.parentElement;
            accordion.classList.toggle('active');
        });
    });
});

// 移动菜单切换
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // 创建弹窗容器
  const modal = document.createElement('div');
  modal.id = 'contactModal';
  modal.style.cssText = `
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
  `;
  
  // 创建弹窗内容
  const modalContent = document.createElement('div');
  modalContent.style.cssText = `
	background-color: white;
	padding: 2rem;
	border-radius: 10px;
	width: 90%;
	max-width: 500px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	transform: translateY(-20px);
	transition: transform 0.3s ease;
  `;
  
  // 创建标题
  const title = document.createElement('h3');
  title.textContent = 'Attention: ';
  title.style.cssText = `
	margin-top: 0;
	color: #333;
	border-bottom: 1px solid #eee;
	padding-bottom: 0.5rem;
	margin-bottom: 1rem;
  `;
  
  // 创建联系信息（请根据您的实际信息修改以下内容）
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
	<p><strong>中文：</strong>此网页为v1.5.0版本，新的网页在@huyang3780.top</p>
	<br>
	<p><strong>English：</strong>This webpage is version v1.5.0. The new webpage is at @huyang3780.top</p>
	<br>
	<p><strong>日本語：</strong>このページはv1.5.0で、新しいページは@huyang3780.topにあります。</p>
  `;
  contactInfo.style.cssText = `
	color: #666;
	line-height: 1.6;
	margin-bottom: 1.5rem;
  `;
  
  // 创建关闭按钮
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.style.cssText = `
	background-color: #007bff;
	color: white;
	border: none;
	padding: 0.5rem 1.5rem;
	border-radius: 5px;
	cursor: pointer;
	font-size: 1rem;
	transition: background-color 0.2s;
  `;
  
  // 关闭按钮悬停效果
  closeBtn.addEventListener('mouseover', function() {
	this.style.backgroundColor = '#0056b3';
  });
  
  closeBtn.addEventListener('mouseout', function() {
	this.style.backgroundColor = '#007bff';
  });
  
  // 关闭弹窗功能
  closeBtn.addEventListener('click', function() {
	modal.style.opacity = '0';
	modal.style.visibility = 'hidden';
	modalContent.style.transform = 'translateY(-20px)';
  });
  
  // 组装弹窗
  modalContent.appendChild(title);
  modalContent.appendChild(contactInfo);
  modalContent.appendChild(closeBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // 显示弹窗（添加延迟以确保动画效果可见）
  setTimeout(function() {
	modal.style.opacity = '1';
	modal.style.visibility = 'visible';
	modalContent.style.transform = 'translateY(0)';
  }, 500);
});


