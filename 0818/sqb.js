jQuery(document).ready(function($) {
	$("#form_send_email").submit(function(event) {

		/* stop form from submitting normally */
		event.preventDefault();



		/*get the action attribute from the <form action=""> element */
		var $form = $( this ),
		name = $form.find( '#name' ).val(),
		no_hp = $form.find( '#no_hp' ).val(),
		email = $form.find( '#email' ).val(),
		judul = $form.find( '#judul' ).val(),
		keterangan = $form.find( '#keterangan' ).val();

		var $captchaForm = $('#captcha_form'),
		valnum1 = $captchaForm.find( '#valnum1' ).val(),
		valnum2 = $captchaForm.find( '#valnum2' ).val(),
		valres = $captchaForm.find( '#valres' ).val();
		var resValNum = parseInt(valnum1) + parseInt(valnum2);
		if(parseInt(resValNum) != valres){
			$('#images_load').hide();
			$('#emailModal').modal('show');
			$('#emailModalInfo').html('');
			getHtml = '' +
			'<div class="modal-content">' +
			'<div id="emailModalInfo"></div>' +
			'<div class="modal-body">' +
			' Captcha Salah'+
			'</div>' +
			'<div class="modal-footer">' +
			'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
			'</div>' +
			'</div>' +
			'';
			$('#emailModalInfo').html(getHtml);
			return false;
		}


		/* This does the ajax request*/
		$.ajax({
			/*or example_ajax_obj.ajaxurl if using on frontend*/
			url: sqb_js.ajaxurl, 
			data: {
				'action': 'sqb_send_email',
				'name' : name,
				'no_hp' : no_hp,
				'email' : email,
				'judul' : judul,
				'keterangan' : keterangan
			},
			type : 'post',
			beforeSend: function(){
				$('#emailModalInfo').html('');
				$('#images_load').show();
				$('#emailModal').modal('show');

			},
			complete: function(){
				setTimeout(function() {
					$('#images_load').hide();
					$('#emailModalInfo').html('');

					getHtml = '' +
					'<div class="modal-content">' +
					'<div id="emailModalInfo"></div>' +
					'<div class="modal-body">' +
					' Terimakasih Email Anda sudah terkirim, Akan Segera Kami proses'+
					'</div>' +
					'<div class="modal-footer">' +
					'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
					'</div>' +
					'</div>' +
					'';
					$('#emailModalInfo').html(getHtml);
				}, 5000);

			},
			success:function(data) {
				$form.find( '#name' ).val('');
				$form.find( '#no_hp' ).val('');
				$form.find( '#email' ).val('');
				$form.find( '#judul' ).val('');
				$form.find( '#keterangan' ).val('');
				$form.find( '#valres' ).val('');
            	// This outputs the result of the ajax request
            	console.log(data);
            },
            error: function(errorThrown){
            	console.log(errorThrown);
            }
        });  

	});


	$("#form_send_booking").submit(function(event) {

		/* stop form from submitting normally */
		event.preventDefault();

		/*get the action attribute from the <form action=""> element */
		var $form = $( this ),
		jenis_kendaraan = $form.find( '#jenis_kendaraan' ).val(),
		paket_sewa = $form.find( '#paket_sewa' ).val(),
		durasi = $form.find( '#durasi' ).val(),
		tujuan = $form.find( '#tujuan' ).val(),
		name = $form.find( '#name' ).val(),
		tgl_pemakaian = $form.find( '#tgl_pemakaian' ).val(),
		no_hp = $form.find( '#no_hp' ).val(),
		jam_penjemputan = $form.find( '#jam_penjemputan' ).val(),
		judul = $form.find( '#judul' ).val(),
		keterangan = $form.find( '#keterangan' ).val();

		var $captchaForm = $('#captcha_form'),
		valnum1 = $captchaForm.find( '#valnum1' ).val(),
		valnum2 = $captchaForm.find( '#valnum2' ).val(),
		valres = $captchaForm.find( '#valres' ).val();
		var resValNum = parseInt(valnum1) + parseInt(valnum2);
		if(parseInt(resValNum) != valres){
			$('#images_load').hide();
			$('#bookingModal').modal('show');
			$('#emailModalInfo').html('');
			getHtml = '' +
			'<div class="modal-content">' +
			'<div id="emailModalInfo"></div>' +
			'<div class="modal-body">' +
			' Captcha Salah'+
			'</div>' +
			'<div class="modal-footer">' +
			'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
			'</div>' +
			'</div>' +
			'';
			$('#emailModalInfo').html(getHtml);
			return false;
		}

		/* This does the ajax request*/
		$.ajax({
			/*or example_ajax_obj.ajaxurl if using on frontend*/
			url: sqb_js.ajaxurl, 
			data: {
				'action': 'sqb_send_booking',
				'jenis_kendaraan' : jenis_kendaraan,
				'paket_sewa' : paket_sewa,
				'durasi' : durasi,
				'tujuan' : tujuan,
				'name' : name,	
				'tgl_pemakaian' : tgl_pemakaian,
				'no_hp' : no_hp,
				'jam_penjemputan' : jam_penjemputan,
				'judul' : judul,
				'keterangan' : keterangan,
			},
			type : 'post',
			beforeSend: function(){
				$('#emailModalInfo').html('');
				$('#images_load').show();
				$('#bookingModal').modal('show');
			},
			complete: function(){
				setTimeout(function() {
					$('#images_load').hide();
					$('#emailModalInfo').html('');

					getHtml = '' +
					'<div class="modal-content">' +
					'<div id="emailModalInfo"></div>' +
					'<div class="modal-body">' +
					' Terimakasih Email Anda sudah terkirim, Akan Segera Kami proses'+
					'</div>' +
					'<div class="modal-footer">' +
					'<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
					'</div>' +
					'</div>' +
					'';
					$('#emailModalInfo').html(getHtml);
				}, 5000);

			},
			success:function(data) {
				$form.find( 'jenis_kendaraan' ).val('');
				$form.find( 'paket_sewa' ).val('');
				$form.find( 'durasi' ).val('');
				$form.find( 'tujuan' ).val('');
				$form.find( 'name' ).val('');
				$form.find( 'tgl_pemakaian' ).val('');
				$form.find( 'no_hp' ).val('');
				$form.find( 'jam_penjemputan' ).val('');
				$form.find( 'judul' ).val('');
				$form.find( 'keterangan' ).val('');
				$form.find( 'valres' ).val('');

            	// This outputs the result of the ajax request
            	console.log(data);
            },
            error: function(errorThrown){
            	console.log(errorThrown);
            }
        });  

	});



	$("#jenis_kendaraan").change(function(event) {

		/* stop form from submitting normally */
		event.preventDefault();

		/*get the action attribute from the <form action=""> element */
		var jenis_kendaraan = $(this ).val();		
		

		/* This does the ajax request*/
		$.ajax({
			/*or example_ajax_obj.ajaxurl if using on frontend*/
			url: SQBLIB.siteurl+'/wp-admin/admin-ajax.php', 
			data: {
				'action': 'sqb_kendaran_select',
				'jenis_kendaraan' : jenis_kendaraan,
				
			},
			type : 'post',
			beforeSend: function(){

			},
			complete: function(){

			},
			success:function(response) {
				// var ndata = JSON.parse(JSON.stringify(response));
				$('#show_img_jenis_kendaraan').html('');
				$('#show_img_jenis_kendaraan').html('<img style="max-width:100%" src="'+response.data.images+'"/>');
            	// This outputs the result of the ajax request
            	console.log(response);
            },
            error: function(errorThrown){
            	console.log(errorThrown);
            }
        });  

	}).change();
});




/* ajax hook */
jQuery(document).ready(function($) {
	var htls = '<script type="text/javascript">' +
	'/* <![CDATA[ */' +
	// 'var sqb_js = {"ajaxurl":"http:\\\/\\\/beningtransport.com\\\/wp-admin\\\/admin-ajax.php"};' +
	'var sqb_js = {"ajaxurl":"'+SQBLIB.siteurl+'\\\/wp-admin\\\/admin-ajax.php"};' +
	'/* ]]> */' +
	'<\/script>';
	$('head').append(htls);
});