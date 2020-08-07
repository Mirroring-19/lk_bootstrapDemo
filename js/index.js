$(function(){
  $(window).resize(function () { 
      //获取窗口宽度
    let winWid = window.innerWidth;
    //设置临界点
    let showBigImg = winWid>=640;
    //获取所有Item
    let $allItem = $('#lk_carousel .carousel-item')
    // console.log($allItem)
    //遍历所有item
    $allItem.each((index,item)=>{
       //取出图片路径
       let src = showBigImg?$(item).data('lg-img'):$(item).data('sm-img');
	   let imgurl = `url(${src})`
        // 设置背景
        // if(showBigImg){
        //     $(item).css("background",imgurl+" center no-repeat")
        // }else{
        //     $(item).css("background",null)
        // }
        $(item).css({
            backgroundImage:imgurl
        });
        //创建img标签
        if(!showBigImg){
            let imgEle = `<img src='${src}'>`
            $(item).empty().append(imgEle)

        }else{
            $(item).empty();
        }
    })

  }).trigger('resize');
})