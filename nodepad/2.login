
.container .signin
	.signin-inner
		.signin-photo
			img
		.signin-content
			.signin-header
				h1.logo
				p
			.input-field
				input[type=email]
				input[type=password]
			.status
				label
					input[type=checkbox], em 
				a
			a.btn-signin
			.join-member
				span + a
			.easy-signin
				span
				p
					(a > img) * 5
		#gnb
				(a > (i + span)) * 5