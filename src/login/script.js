document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu_item');
    const loginInfos = document.querySelectorAll('.login_info');
    const btnLogin = document.querySelector('.btn_login');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 모든 메뉴 항목과 로그인 정보를 비활성화
            menuItems.forEach(menu => menu.classList.remove('active'));
            loginInfos.forEach(info => {
                info.classList.remove('active');
                info.classList.remove('show-button');
            });

            // 클릭된 메뉴 항목과 관련된 로그인 정보 활성화
            this.classList.add('active');
            const target = this.getAttribute('data-target');
            const targetInfo = document.querySelector(`.${target}`);
            targetInfo.classList.add('active');

            // 로그인 버튼을 포함할지 여부 결정
            if (target === 'login_id') {
                btnLogin.style.display = 'flex'; // 로그인 버튼을 표시
            } else {
                btnLogin.style.display = 'none'; // 로그인 버튼을 숨김
            }
        });
    });
});
