<script>$('#email').blur(function() {
    validateEmail($('input').val());
    return false;
});
function validateEmail(email) {
	

	
    var re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if (re.test(email)) {
        if (email.indexOf('@yourdomain.com', email.length - '@yourdomain.com'.length) !== -1) {
            alert('Valid email.');
        } else {
            alert('Email must be a yourdomain e-mail address (your.name@yourdomain.com).');
        }
    } else {
        alert('Not a valid e-mail address.');
    }
}

</script>// JavaScript Document