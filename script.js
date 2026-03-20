
window.onload = function() {
    
    // MENU
    var links = document.querySelectorAll('.menu a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function(e) {
            e.preventDefault();
            var id = this.getAttribute('href').substring(1);
            var el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };
    }
    
    // BOOK BUTTON
    var book = document.getElementById('bookBtn');
    if (book) {
        book.onclick = function() {
            var f = document.getElementById('request');
            if (f) f.scrollIntoView({ behavior: 'smooth' });
        };
    }
    
    // PHOTO BUTTON
    var photo = document.getElementById('photoBtn');
    if (photo) {
        photo.onclick = function() {
            var g = document.getElementById('gallery');
            if (g) g.scrollIntoView({ behavior: 'smooth' });
        };
    }
    
    // FORM BUTTON
    var send = document.querySelector('.btn-form');
    if (send) {
        send.onclick = function() {
            alert('Thank you!');
        };
    }
    
    // AUTHORIZATION
    var modal = document.getElementById('authModal');
    var auth = document.getElementById('authLink');
    var close = document.querySelector('.close-modal');
    var loginBtn = document.getElementById('loginBtn');
    var user = document.getElementById('username');
    var pass = document.getElementById('password');
    
    if (auth) {
        auth.onclick = function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        };
    }
    
    if (close) {
        close.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    window.onclick = function(e) {
        if (e.target == modal) modal.style.display = 'none';
    };
    
    if (loginBtn) {
        loginBtn.onclick = function() {
            if (user.value == 'admin' && pass.value == '12345') {
                alert('Welcome!');
                modal.style.display = 'none';
                user.value = '';
                pass.value = '';
            } else {
                alert('Wrong! Try admin / 12345');
            }
        };
    }
};