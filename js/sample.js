// 太陽ロゴ表示・非表示
$(function () {
    $('.secList').click(function () {
		$('.sun').hide();
    });
});

// クリック時に太陽を出す
// $(function () {
// 	$('.secList').click(function () {
// 	if($('.section').length){
// 		$('.sun').show();
// 		};
// 	  });	
// 	});

	

// 内容表示・非表示
$(function(){
	$('.section').hide();
  
	$('.secList').on('click',function(){
	  $('.section').not($($(this).attr('href'))).hide();
  
	  // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行する
	  $($(this).attr('href')).fadeToggle(1000);
  
	  // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
	  // $($(this).attr('href')).show();
	});
  });




